import React, { useState, useEffect, useCallback } from 'react';
import { insforge } from '../lib/insforge';
import { useAuth } from '../hooks/useAuth';
import {
    UserCheck,
    UserX,
    Shield,
    ShieldCheck,
    Search,
    Loader2,
    X,
    Users,
    Mail,
    RefreshCw,
    Trash2,
    AlertTriangle,
    Store,
    Briefcase,
    Plus,
    Building2,
    ClipboardList,
    Edit2
} from 'lucide-react';

// ─── Sub-component: Manage a list of items (stores or functions) ────────────
function ManageList({ tableName, label, icon: ListItemIcon }) { // eslint-disable-line no-unused-vars
    const [items, setItems] = useState([]);
    const [newName, setNewName] = useState('');
    const [loading, setLoading] = useState(true);
    const [adding, setAdding] = useState(false);
    const [deletingId, setDeletingId] = useState(null);

    const fetchItems = useCallback(async () => {
        setLoading(true);
        try {
            const { data, error } = await insforge.database
                .from(tableName)
                .select('*')
                .order('name', { ascending: true });
            if (error) throw error;
            setItems(data || []);
        } catch (err) {
            console.error(`Erro ao buscar ${label}:`, err);
        } finally {
            setLoading(false);
        }
    }, [tableName, label]);

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    const handleAdd = async (e) => {
        e.preventDefault();
        const trimmed = newName.trim();
        if (!trimmed) return;
        setAdding(true);
        try {
            const { error } = await insforge.database
                .from(tableName)
                .insert([{ name: trimmed }]);
            if (error) throw error;
            setNewName('');
            await fetchItems();
        } catch (err) {
            console.error(`Erro ao adicionar ${label}:`, err);
            alert(err?.message?.includes('unique') || err?.message?.includes('duplicate')
                ? `Esse nome de ${label.toLowerCase()} já existe.`
                : `Erro ao adicionar. Tente novamente.`);
        } finally {
            setAdding(false);
        }
    };

    const handleDelete = async (id) => {
        setDeletingId(id);
        try {
            const { error } = await insforge.database
                .from(tableName)
                .delete()
                .eq('id', id);
            if (error) throw error;
            await fetchItems();
        } catch (err) {
            console.error(`Erro ao excluir ${label}:`, err);
            alert('Não é possível excluir: pode haver usuários vinculados.');
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <div className="space-y-4">
            {/* Add form */}
            <form onSubmit={handleAdd} className="flex gap-2">
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <ListItemIcon className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder={`Nome da ${label}...`}
                        className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-avil-blue/20 outline-none text-sm font-medium transition-all"
                    />
                </div>
                <button
                    type="submit"
                    disabled={adding || !newName.trim()}
                    className="flex items-center gap-1.5 px-4 py-2.5 bg-avil-blue text-white font-bold text-sm rounded-xl hover:bg-avil-blue-dark shadow-md shadow-avil-blue/20 transition-all disabled:opacity-50"
                >
                    {adding ? <Loader2 size={16} className="animate-spin" /> : <Plus size={16} />}
                    Adicionar
                </button>
            </form>

            {/* Items list */}
            {loading ? (
                <div className="h-32 flex items-center justify-center">
                    <Loader2 className="w-6 h-6 text-avil-orange animate-spin" />
                </div>
            ) : items.length === 0 ? (
                <div className="h-32 flex flex-col items-center justify-center text-slate-400 gap-2">
                    <ListItemIcon size={32} strokeWidth={1.5} />
                    <p className="text-sm font-medium">Nenhuma {label.toLowerCase()} cadastrada</p>
                </div>
            ) : (
                <div className="space-y-2 max-h-[280px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 pr-1">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-white border border-slate-100 px-4 py-3 rounded-xl hover:shadow-sm hover:border-slate-200 transition-all group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-avil-blue/10 rounded-lg flex items-center justify-center">
                                    <ListItemIcon size={16} className="text-avil-blue" />
                                </div>
                                <span className="font-semibold text-slate-700 text-sm">{item.name}</span>
                            </div>
                            <button
                                onClick={() => handleDelete(item.id)}
                                disabled={deletingId === item.id}
                                className="p-1.5 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50"
                                title={`Excluir ${label.toLowerCase()}`}
                            >
                                {deletingId === item.id ? (
                                    <Loader2 size={16} className="animate-spin" />
                                ) : (
                                    <Trash2 size={16} />
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <p className="text-[10px] text-slate-400 font-medium text-center uppercase tracking-wider">
                {items.length} {label.toLowerCase()}(s) cadastrada(s)
            </p>
        </div>
    );
}

// ─── Main AdminPanel ────────────────────────────────────────────────────────
export default function AdminPanel({ isOpen, onClose }) {
    const { user: currentUser } = useAuth();
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [actionLoading, setActionLoading] = useState(null);
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [editingUser, setEditingUser] = useState(null);
    const [editName, setEditName] = useState('');
    const [editStoreId, setEditStoreId] = useState('');
    const [editFunctionId, setEditFunctionId] = useState('');
    const [storesList, setStoresList] = useState([]);
    const [functionsList, setFunctionsList] = useState([]);

    // Tabs: 'users' | 'stores' | 'functions'
    const [activeTab, setActiveTab] = useState('users');

    // Store and function name maps for display
    const [storeMap, setStoreMap] = useState({});
    const [functionMap, setFunctionMap] = useState({});

    const fetchMaps = async () => {
        try {
            const [storesRes, functionsRes] = await Promise.all([
                insforge.database.from('stores').select('id, name').order('name', { ascending: true }),
                insforge.database.from('functions').select('id, name').order('name', { ascending: true }),
            ]);
            if (storesRes.data) {
                const map = {};
                storesRes.data.forEach(s => { map[s.id] = s.name; });
                setStoreMap(map);
                setStoresList(storesRes.data);
            }
            if (functionsRes.data) {
                const map = {};
                functionsRes.data.forEach(f => { map[f.id] = f.name; });
                setFunctionMap(map);
                setFunctionsList(functionsRes.data);
            }
        } catch (err) {
            console.error('Erro ao buscar mapas:', err);
        }
    };

    const fetchProfiles = async () => {
        setLoading(true);
        try {
            const { data, error } = await insforge.database
                .from('profiles')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setProfiles(data || []);
        } catch (err) {
            console.error('Erro ao buscar perfis:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            fetchProfiles();
            fetchMaps();
        }
    }, [isOpen]);

    const handleToggleAuthorization = async (userId, currentStatus) => {
        setActionLoading(userId);
        try {
            const { error } = await insforge.database
                .from('profiles')
                .update({ is_authorized: !currentStatus })
                .eq('id', userId);

            if (error) throw error;
            await fetchProfiles();
        } catch (err) {
            console.error('Erro ao atualizar autorização:', err);
        } finally {
            setActionLoading(null);
        }
    };

    const handleToggleRole = async (userId, currentRole) => {
        const newRole = currentRole === 'admin' ? 'user' : 'admin';
        setActionLoading(userId);
        try {
            const { error } = await insforge.database
                .from('profiles')
                .update({ role: newRole })
                .eq('id', userId);

            if (error) throw error;
            await fetchProfiles();
        } catch (err) {
            console.error('Erro ao atualizar papel:', err);
        } finally {
            setActionLoading(null);
        }
    };

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        if (!editingUser) return;
        const trimmedName = editName.trim();
        setActionLoading(editingUser.id);

        try {
            const { error } = await insforge.database
                .from('profiles')
                .update({
                    name: trimmedName || null,
                    store_id: editStoreId || null,
                    function_id: editFunctionId || null,
                })
                .eq('id', editingUser.id);

            if (error) throw error;
            setEditingUser(null);
            await fetchProfiles();
            await fetchMaps();
        } catch (err) {
            console.error('Erro ao atualizar usuário:', err);
            alert('Erro ao atualizar. Tente novamente.');
        } finally {
            setActionLoading(null);
        }
    };

    const handleDeleteUser = async (userId) => {
        setActionLoading(userId);
        try {
            // Delete from profiles table only
            // Note: Native authentication user remains in the system database
            // but since their profile is deleted, they lose all personalized access
            // and are effectively banned from the strategist features.
            const { error } = await insforge.database
                .from('profiles')
                .delete()
                .eq('id', userId);

            if (error) throw error;

            setDeleteConfirm(null);
            await fetchProfiles();
        } catch (err) {
            console.error('Erro ao excluir usuário:', err);
            alert('Não foi possível excluir o usuário completamente. Verifique se você tem permissão ou se há dados vinculados a este perfil.');
        } finally {
            setActionLoading(null);
        }
    };

    const filteredProfiles = profiles.filter(p =>
        p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.name && p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (!isOpen) return null;

    const tabs = [
        { key: 'users', label: 'Usuários', icon: Users },
        { key: 'stores', label: 'Lojas', icon: Building2 },
        { key: 'functions', label: 'Funções', icon: ClipboardList },
    ];

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />

            <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Header */}
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="bg-avil-blue p-3 rounded-2xl text-white shadow-lg shadow-avil-blue/20">
                            <Shield size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-black text-avil-blue-dark">Painel de Controle</h2>
                            <p className="text-xs text-slate-500 font-medium">Gestão de acessos, lojas e funções</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-200 text-slate-400 hover:text-slate-600 rounded-full transition-all"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Tabs */}
                <div className="px-6 pt-4 bg-white border-b border-slate-100">
                    <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
                        {tabs.map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === tab.key
                                    ? 'bg-white text-avil-blue-dark shadow-sm'
                                    : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                <tab.icon size={16} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ─── Tab: Users ─── */}
                {activeTab === 'users' && (
                    <>
                        {/* Sub-header / Search */}
                        <div className="p-6 bg-white border-b border-slate-50 flex flex-col sm:flex-row gap-4 items-center justify-between">
                            <div className="relative w-full sm:max-w-xs">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Buscar usuário..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-avil-blue/20 outline-none text-sm font-medium transition-all"
                                />
                            </div>
                            <button
                                onClick={() => { fetchProfiles(); fetchMaps(); }}
                                disabled={loading}
                                className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-avil-blue hover:bg-avil-blue-100/50 rounded-xl transition-all disabled:opacity-50"
                            >
                                <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
                                Atualizar Lista
                            </button>
                        </div>

                        {/* List */}
                        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-200">
                            {loading ? (
                                <div className="h-64 flex flex-col items-center justify-center gap-4">
                                    <Loader2 className="w-10 h-10 text-avil-orange animate-spin" />
                                    <p className="text-sm font-bold text-slate-400 animate-pulse uppercase tracking-widest">Carregando usuários</p>
                                </div>
                            ) : filteredProfiles.length === 0 ? (
                                <div className="h-64 flex flex-col items-center justify-center text-slate-400 gap-3">
                                    <Users size={48} strokeWidth={1.5} />
                                    <p className="font-semibold text-lg">Nenhum usuário encontrado</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {filteredProfiles.map((user) => (
                                        <div key={user.id} className="group bg-white border border-slate-100 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-md hover:border-slate-200 transition-all border-l-4" style={{ borderLeftColor: user.role === 'admin' ? '#003366' : '#cbd5e1' }}>
                                            <div className="flex items-center gap-4 w-full">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-inner ${user.role === 'admin' ? 'bg-avil-blue text-white' : 'bg-slate-100 text-slate-500'}`}>
                                                    {(user.name || user.email).charAt(0).toUpperCase()}
                                                </div>
                                                <div className="flex flex-col min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-bold text-slate-800 truncate">{user.name || 'Sem nome'}</span>
                                                        {user.role === 'admin' && (
                                                            <span className="bg-avil-blue/10 text-avil-blue-dark text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-avil-blue/20">Admin</span>
                                                        )}
                                                    </div>
                                                    <span className="text-xs text-slate-500 truncate flex items-center gap-1">
                                                        <Mail size={12} /> {user.email}
                                                    </span>
                                                    {/* Store and Function info */}
                                                    <div className="flex items-center gap-3 mt-1">
                                                        {user.store_id && storeMap[user.store_id] && (
                                                            <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full">
                                                                <Building2 size={10} /> {storeMap[user.store_id]}
                                                            </span>
                                                        )}
                                                        {user.function_id && functionMap[user.function_id] && (
                                                            <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full">
                                                                <ClipboardList size={10} /> {functionMap[user.function_id]}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                                {/* Edit User Button */}
                                                <button
                                                    onClick={() => {
                                                        setEditingUser(user);
                                                        setEditName(user.name || '');
                                                        setEditStoreId(user.store_id || '');
                                                        setEditFunctionId(user.function_id || '');
                                                    }}
                                                    disabled={actionLoading === user.id}
                                                    className="p-2 rounded-xl border-2 border-slate-100 text-slate-400 hover:border-avil-orange hover:text-avil-orange hover:bg-orange-50 transition-all disabled:opacity-50"
                                                    title="Editar usuário"
                                                >
                                                    <Edit2 size={18} />
                                                </button>

                                                {/* Authorization Button */}
                                                <button
                                                    onClick={() => handleToggleAuthorization(user.id, user.is_authorized)}
                                                    disabled={actionLoading === user.id}
                                                    className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl border-2 text-xs font-black transition-all ${user.is_authorized
                                                        ? 'bg-green-50 border-green-100 text-green-600 hover:bg-green-100 hover:text-green-700'
                                                        : 'bg-red-50 border-red-100 text-red-600 hover:bg-red-100 hover:text-red-700'
                                                        } disabled:opacity-50`}
                                                >
                                                    {actionLoading === user.id ? (
                                                        <Loader2 size={16} className="animate-spin" />
                                                    ) : user.is_authorized ? (
                                                        <><UserCheck size={16} /> AUTORIZADO</>
                                                    ) : (
                                                        <><UserX size={16} /> BLOQUEADO</>
                                                    )}
                                                </button>

                                                {/* Admin Role Toggle */}
                                                <button
                                                    onClick={() => handleToggleRole(user.id, user.role)}
                                                    disabled={actionLoading === user.id}
                                                    className={`flex-1 sm:flex-none p-2 rounded-xl border-2 transition-all group/role ${user.role === 'admin'
                                                        ? 'bg-avil-blue border-avil-blue text-white shadow-md'
                                                        : 'bg-white border-slate-100 text-slate-400 hover:border-avil-blue hover:text-avil-blue hover:bg-avil-blue-100/30'
                                                        } disabled:opacity-50`}
                                                    title={user.role === 'admin' ? 'Remover Admin' : 'Tornar Admin'}
                                                >
                                                    {actionLoading === user.id ? (
                                                        <Loader2 size={16} className="animate-spin" />
                                                    ) : user.role === 'admin' ? (
                                                        <ShieldCheck size={20} />
                                                    ) : (
                                                        <Shield size={20} />
                                                    )}
                                                </button>

                                                {/* Delete Button — hidden for self */}
                                                {currentUser?.id !== user.id && (
                                                    <button
                                                        onClick={() => setDeleteConfirm(user)}
                                                        disabled={actionLoading === user.id}
                                                        className="flex-1 sm:flex-none p-2 rounded-xl border-2 bg-white border-slate-100 text-slate-400 hover:border-red-400 hover:text-red-500 hover:bg-red-50 transition-all disabled:opacity-50"
                                                        title="Excluir usuário"
                                                    >
                                                        {actionLoading === user.id ? (
                                                            <Loader2 size={20} className="animate-spin" />
                                                        ) : (
                                                            <Trash2 size={20} />
                                                        )}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
                            <p className="text-[10px] uppercase tracking-widest font-black text-slate-400">Total de {profiles.length} usuários cadastrados</p>
                        </div>
                    </>
                )}

                {/* ─── Tab: Stores ─── */}
                {activeTab === 'stores' && (
                    <div className="flex-1 overflow-y-auto p-6">
                        <ManageList tableName="stores" label="Loja" icon={Building2} />
                    </div>
                )}

                {/* ─── Tab: Functions ─── */}
                {activeTab === 'functions' && (
                    <div className="flex-1 overflow-y-auto p-6">
                        <ManageList tableName="functions" label="Função" icon={ClipboardList} />
                    </div>
                )}
            </div>

            {/* Delete Confirmation Modal */}
            {deleteConfirm && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setDeleteConfirm(null)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full animate-in fade-in zoom-in duration-200">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="bg-red-100 p-4 rounded-full">
                                <AlertTriangle size={32} className="text-red-500" />
                            </div>
                            <h3 className="text-lg font-black text-slate-800">Excluir Usuário?</h3>
                            <p className="text-sm text-slate-500">
                                Tem certeza que deseja excluir <span className="font-bold text-slate-700">{deleteConfirm.name || deleteConfirm.email}</span>? Esta ação não pode ser desfeita.
                            </p>
                            <div className="flex gap-3 w-full mt-2">
                                <button
                                    onClick={() => setDeleteConfirm(null)}
                                    className="flex-1 px-4 py-2.5 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={() => handleDeleteUser(deleteConfirm.id)}
                                    disabled={actionLoading === deleteConfirm.id}
                                    className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {actionLoading === deleteConfirm.id ? (
                                        <Loader2 size={16} className="animate-spin" />
                                    ) : (
                                        <><Trash2 size={16} /> Excluir</>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit User Modal */}
            {editingUser && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setEditingUser(null)} />
                    <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full animate-in fade-in zoom-in duration-200">
                        <form onSubmit={handleUpdateUser} className="space-y-4">
                            <div className="flex flex-col items-center text-center gap-2 mb-4">
                                <div className="bg-avil-blue/10 p-3 rounded-full text-avil-blue">
                                    <Edit2 size={24} />
                                </div>
                                <h3 className="text-lg font-black text-slate-800">Editar Usuário</h3>
                                <p className="text-xs text-slate-500">{editingUser.email}</p>
                            </div>

                            {/* Nome */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wider">Nome Completo</label>
                                <input
                                    type="text"
                                    autoFocus
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    placeholder="Digite o nome..."
                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-avil-blue/20 outline-none text-sm font-medium transition-all"
                                />
                            </div>

                            {/* Loja */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wider flex items-center gap-1.5">
                                    <Building2 size={11} /> Loja
                                </label>
                                <div className="relative">
                                    <select
                                        value={editStoreId}
                                        onChange={(e) => setEditStoreId(e.target.value)}
                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-avil-blue/20 outline-none text-sm font-medium transition-all appearance-none"
                                    >
                                        <option value="">— Sem loja —</option>
                                        {storesList.map(s => (
                                            <option key={s.id} value={s.id}>{s.name}</option>
                                        ))}
                                    </select>
                                    <Store size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                </div>
                            </div>

                            {/* Função */}
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wider flex items-center gap-1.5">
                                    <ClipboardList size={11} /> Função
                                </label>
                                <div className="relative">
                                    <select
                                        value={editFunctionId}
                                        onChange={(e) => setEditFunctionId(e.target.value)}
                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-avil-blue/20 outline-none text-sm font-medium transition-all appearance-none"
                                    >
                                        <option value="">— Sem função —</option>
                                        {functionsList.map(f => (
                                            <option key={f.id} value={f.id}>{f.name}</option>
                                        ))}
                                    </select>
                                    <Briefcase size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                </div>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setEditingUser(null)}
                                    className="flex-1 px-4 py-2.5 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={actionLoading === editingUser.id}
                                    className="flex-1 px-4 py-2.5 rounded-xl bg-avil-blue text-white font-bold text-sm hover:bg-avil-blue-dark transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {actionLoading === editingUser.id ? (
                                        <Loader2 size={16} className="animate-spin" />
                                    ) : (
                                        'Salvar'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
