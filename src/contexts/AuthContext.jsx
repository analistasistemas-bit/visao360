import React, { createContext, useContext, useState, useEffect } from 'react';
import { insforge } from '../lib/insforge';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check active sessions and sets the user
        const checkSession = async () => {
            try {
                const { data, error } = await insforge.auth.getCurrentSession();
                if (error) {
                    console.error('Error fetching session:', error.message);
                } else if (data?.session) {
                    setSession(data.session);
                    setUser(data.session.user);
                }
            } catch (err) {
                console.error('Unexpected error checking session:', err);
            } finally {
                setLoading(false);
            }
        };

        checkSession();
    }, []);

    const value = {
        session,
        user,
        loading,
        setSession,
        setUser
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
