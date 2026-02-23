import React, { useState, useRef, useEffect } from 'react';
import { LogOut, User, ChevronDown, Mail, Shield, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { insforge } from '../lib/insforge';

export default function UserProfile({ onOpenAdminPanel, onOpenProfile }) {
    const { user, isAdmin } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [signingOut, setSigningOut] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSignOut = async () => {
        setSigningOut(true);
        // Apply a global "wait" cursor
        document.body.style.cursor = 'wait';

        try {
            await insforge.auth.signOut();
            window.location.reload();
        } catch (error) {
            console.error('Erro ao sair:', error);
            setSigningOut(false);
            document.body.style.cursor = 'default';
        }
    };

    if (!user) return null;

    const userName = user.profile?.name || user.email.split('@')[0];
    const userInitial = userName.charAt(0).toUpperCase();

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-1.5 pr-3 rounded-full hover:bg-slate-100 transition-all duration-200 border border-slate-200 bg-white shadow-sm group active:scale-95"
            >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-avil-blue to-avil-blue-light flex items-center justify-center text-white font-bold text-sm shadow-inner group-hover:shadow-md transition-shadow">
                    {userInitial}
                </div>
                <div className="hidden sm:flex flex-col items-start leading-none gap-0.5">
                    <span className="text-xs font-bold text-avil-blue-dark truncate max-w-[100px]">
                        {userName}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">Perfis</span>
                </div>
                <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-300 origin-top-right z-50 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}>
                <div className="p-4 border-b border-slate-50 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-avil-orange-100 flex items-center justify-center text-avil-orange font-bold">
                            {userInitial}
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-sm font-bold text-slate-900 truncate">{userName}</span>
                            <span className="text-[11px] text-slate-500 truncate flex items-center gap-1">
                                <Mail size={10} />
                                {user.email}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="p-2">
                    <button
                        onClick={() => {
                            onOpenProfile?.();
                            setIsOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 rounded-xl hover:bg-slate-50 transition-colors text-left"
                    >
                        <User size={18} className="text-slate-400" />
                        Meu Perfil
                    </button>

                    {isAdmin && (
                        <button
                            onClick={() => {
                                onOpenAdminPanel?.();
                                setIsOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-avil-blue-dark rounded-xl hover:bg-avil-blue-100/30 transition-colors text-left"
                        >
                            <Shield size={18} className="text-avil-blue" />
                            Painel de Controle
                        </button>
                    )}

                    <div className="my-1 border-t border-slate-50" />

                    <button
                        onClick={handleSignOut}
                        disabled={signingOut}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-red-600 rounded-xl hover:bg-red-50 transition-all duration-300 group active:scale-95 disabled:opacity-70 ${signingOut ? 'cursor-wait' : ''}`}
                    >
                        {signingOut ? (
                            <Loader2 size={18} className="text-red-600 animate-spin" />
                        ) : (
                            <LogOut size={18} className="text-red-400 group-hover:text-red-600 transition-colors" />
                        )}
                        {signingOut ? 'Saindo...' : 'Sair da Conta'}
                    </button>
                </div>
            </div>
        </div>
    );
}
