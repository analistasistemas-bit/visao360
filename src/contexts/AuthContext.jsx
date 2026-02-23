import React, { createContext, useContext, useState, useEffect } from 'react';
import { insforge } from '../lib/insforge';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchProfile = async (userId, userEmail, additionalData = null) => {
        try {
            const db = insforge.database || insforge.data || insforge;
            const { data, error } = await db
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .maybeSingle();

            if (error) {
                console.error('Error fetching profile:', error);
                return null;
            }

            if (!data) {
                // Try to create it
                const profileToInsert = {
                    id: userId,
                    email: userEmail,
                    role: 'user',
                    is_authorized: false,
                    ...additionalData
                };

                const { data: newProfile, error: createError } = await db
                    .from('profiles')
                    .insert([profileToInsert])
                    .select()
                    .single();

                if (newProfile) {
                    setProfile(newProfile);
                    return newProfile;
                }
                if (createError) {
                    console.error('Error creating profile:', createError);
                }
                return null;
            }

            setProfile(data);
            return data;
        } catch (err) {
            console.error('Unexpected error in fetchProfile:', err);
        }
        return null;
    };

    useEffect(() => {
        const checkSession = async () => {
            setLoading(true);
            try {
                const { data, error } = await insforge.auth.getCurrentSession();
                if (error) {
                    console.error('Error fetching session:', error.message);
                } else if (data?.session) {
                    setSession(data.session);
                    setUser(data.session.user);
                    await fetchProfile(data.session.user.id, data.session.user.email);
                }
            } catch (err) {
                console.error('Auth sync error:', err);
            } finally {
                setLoading(false);
            }
        };
        checkSession();
    }, []);

    // Also need to handle Login updates from the Login component
    // We'll expose a custom sign-in method or a refresh method that blocks loading
    const handleLoginSuccess = async (sessionData, additionalProfileData = null) => {
        setLoading(true);
        try {
            setSession(sessionData);
            setUser(sessionData.user);
            await fetchProfile(sessionData.user.id, sessionData.user.email, additionalProfileData);
        } finally {
            setLoading(false);
        }
    };

    const value = {
        session,
        user,
        profile,
        isAdmin: profile?.role === 'admin',
        isAuthorized: profile?.is_authorized === true,
        loading,
        setSession,
        setUser,
        setProfile,
        handleLoginSuccess,
        refreshProfile: () => user && fetchProfile(user.id, user.email)
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading ? children : (
                <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-slate-200 border-t-avil-orange rounded-full animate-spin"></div>
                </div>
            )}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
