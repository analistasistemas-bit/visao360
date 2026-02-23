import React, { useState, useEffect } from 'react';
import { X, User, Mail, Building2, ClipboardList, Save, Loader2, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { insforge } from '../lib/insforge';

export default function ProfileModal({ isOpen, onClose }) {
    const { user, profile, refreshProfile } = useAuth();
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [storeName, setStoreName] = useState('...');
    const [functionName, setFunctionName] = useState('...');

    useEffect(() => {
        if (profile) {
            setName(profile.name || '');
            fetchDetails();
        }
    }, [profile, isOpen]);

    const fetchDetails = async () => {
        if (!profile) return;

        try {
            const db = insforge.database;

            if (profile.store_id) {
                const { data: store } = await db.from('stores').select('name').eq('id', profile.store_id).single();
                if (store) setStoreName(store.name);
            } else {
                setStoreName('Não informada');
            }

            if (profile.function_id) {
                const { data: func } = await db.from('functions').select('name').eq('id', profile.function_id).single();
                if (func) setFunctionName(func.name);
            } else {
                setFunctionName('Não informada');
            }
        } catch (err) {
            console.error('Erro ao buscar nomes de loja/função:', err);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        setLoading(true);
        try {
            const { error } = await insforge.database
                .from('profiles')
                .update({ name: name.trim(), updated_at: new Date().toISOString() })
                .eq('id', user.id);

            if (error) throw error;

            await refreshProfile();
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            console.error('Erro ao atualizar perfil:', err);
            alert('Erro ao salvar alterações.');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl border border-slate-200/50 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500">

                {/* Header Gradient */}
                <div className="h-32 bg-gradient-to-br from-avil-blue to-avil-blue-dark relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur-md transition-all active:scale-95"
                    >
                        <X size={20} />
                    </button>

                    {/* User Avatar Large */}
                    <div className="absolute -bottom-10 left-8">
                        <div className="w-24 h-24 rounded-3xl bg-white p-1.5 shadow-xl">
                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-avil-orange to-avil-orange-light flex items-center justify-center text-white text-4xl font-black">
                                {name?.charAt(0).toUpperCase() || user.email.charAt(0).toUpperCase()}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-16 pb-8 px-8">
                    <div className="mb-8">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight">Meu Perfil</h2>
                        <p className="text-slate-500 font-medium text-sm">Gerencie suas informações básicas</p>
                    </div>

                    <form onSubmit={handleSave} className="space-y-6">
                        {/* Nome Campo */}
                        <div className="space-y-1.5 group">
                            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 transition-colors group-focus-within:text-avil-blue">
                                Nome Completo
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-avil-blue">
                                    <User size={18} className="text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Seu nome"
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-avil-blue/10 focus:border-avil-blue outline-none transition-all font-bold text-slate-800"
                                    required
                                />
                            </div>
                        </div>

                        {/* Informações de Leitura */}
                        <div className="grid grid-cols-1 gap-4 bg-slate-50 p-4 rounded-3xl border border-slate-100">
                            {/* Email */}
                            <div className="flex items-center gap-4 px-2">
                                <div className="p-2 bg-white rounded-xl shadow-sm text-slate-400">
                                    <Mail size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">E-mail</span>
                                    <span className="text-sm font-bold text-slate-600 truncate">{user.email}</span>
                                </div>
                            </div>

                            {/* Loja */}
                            <div className="flex items-center gap-4 px-2">
                                <div className="p-2 bg-white rounded-xl shadow-sm text-slate-400">
                                    <Building2 size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Loja</span>
                                    <span className="text-sm font-bold text-slate-600">{storeName}</span>
                                </div>
                            </div>

                            {/* Função */}
                            <div className="flex items-center gap-4 px-2">
                                <div className="p-2 bg-white rounded-xl shadow-sm text-slate-400">
                                    <ClipboardList size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Função</span>
                                    <span className="text-sm font-bold text-slate-600">{functionName}</span>
                                </div>
                            </div>
                        </div>

                        {/* Botão Salvar */}
                        <button
                            type="submit"
                            disabled={loading || name === profile?.name}
                            className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all duration-300 shadow-lg ${success
                                ? 'bg-green-500 text-white shadow-green-200'
                                : 'bg-avil-blue text-white shadow-avil-blue/20 hover:shadow-avil-blue/30 active:scale-[0.98] disabled:opacity-50 disabled:grayscale disabled:shadow-none'
                                }`}
                        >
                            {loading ? (
                                <Loader2 className="animate-spin" size={18} />
                            ) : success ? (
                                <CheckCircle2 size={18} className="animate-in zoom-in" />
                            ) : (
                                <Save size={18} />
                            )}
                            {success ? 'Salvo com sucesso' : 'Salvar Alterações'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
