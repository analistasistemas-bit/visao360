import React, { useState } from 'react';
import { insforge } from '../lib/insforge';
import { useAuth } from '../contexts/AuthContext';
import { Mail, Key, User, ArrowRight, Loader2 } from 'lucide-react';
import { LogoAvil } from '../App'; // Importing the logo component from App

export default function Login() {
    const { setUser, setSession } = useAuth();
    const [view, setView] = useState('sign-in'); // 'sign-in' | 'sign-up' | 'verify-email' | 'forgot-password' | 'reset-password'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [otp, setOtp] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

    // Sign Up Flow
    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');
        setSuccessMsg('');

        try {
            const { data, error } = await insforge.auth.signUp({
                email,
                password,
                name,
            });

            if (error) {
                setErrorMsg(error.message);
            } else if (data?.requireEmailVerification) {
                setSuccessMsg('Conta criada! Verifique seu e-mail para pegar o código.');
                setView('verify-email');
            } else if (data?.accessToken) {
                setSession(data);
                setUser(data.user);
            }
        } catch (err) {
            setErrorMsg('Ocorreu um erro inesperado.');
        } finally {
            setLoading(false);
        }
    };

    // Sign In Flow
    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');
        setSuccessMsg('');

        try {
            const { data, error } = await insforge.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setErrorMsg('E-mail ou senha inválidos.');
            } else if (data) {
                setSession({ accessToken: data.accessToken, user: data.user });
                setUser(data.user);
            }
        } catch (err) {
            setErrorMsg('Ocorreu um erro inesperado.');
        } finally {
            setLoading(false);
        }
    };

    // Verify Email (OTP)
    const handleVerifyEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');
        setSuccessMsg('');

        try {
            const { data, error } = await insforge.auth.verifyEmail({
                email,
                otp,
            });

            if (error) {
                setErrorMsg('Código inválido ou expirado.');
            } else if (data) {
                setSession({ accessToken: data.accessToken, user: data.user });
                setUser(data.user);
            }
        } catch (err) {
            setErrorMsg('Ocorreu um erro inesperado. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    // Request Password Reset
    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');
        setSuccessMsg('');

        try {
            const { data, error } = await insforge.auth.sendResetPasswordEmail({ email });
            if (error) {
                setErrorMsg(error.message);
            } else if (data?.success) {
                setSuccessMsg('Código de recuperação enviado para seu e-mail.');
                setView('reset-password');
            }
        } catch (err) {
            setErrorMsg('Ocorreu um erro inesperado.');
        } finally {
            setLoading(false);
        }
    };

    // Execute Password Reset
    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');
        setSuccessMsg('');

        try {
            // For code method: 1. Exchange code for reset token
            const { data: exchangeData, error: exchangeError } = await insforge.auth.exchangeResetPasswordToken({
                email,
                code: otp
            });

            if (exchangeError) {
                setErrorMsg('Código inválido ou expirado.');
                setLoading(false);
                return;
            }

            // 2. Use token to reset password
            const { data, error } = await insforge.auth.resetPassword({
                newPassword: password,
                otp: exchangeData.token
            });

            if (error) {
                setErrorMsg(error.message);
            } else if (data) {
                setSuccessMsg('Senha alterada com sucesso! Faça login.');
                setView('sign-in');
                setOtp('');
                setPassword('');
            }
        } catch (err) {
            setErrorMsg('Ocorreu um erro inesperado.');
        } finally {
            setLoading(false);
        }
    };

    const currentOnSubmit = () => {
        if (view === 'sign-in') return handleSignIn;
        if (view === 'sign-up') return handleSignUp;
        if (view === 'verify-email') return handleVerifyEmail;
        if (view === 'forgot-password') return handleForgotPassword;
        if (view === 'reset-password') return handleResetPassword;
        return (e) => e.preventDefault();
    }

    return (
        <div className="min-h-[calc(100vh)] bg-slate-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 transform transition-all">

                {/* Header/Logo */}
                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="mb-6 scale-110">
                        <LogoAvil />
                    </div>
                    <h2 className="text-2xl font-extrabold text-avil-blue-dark text-center">
                        {view === 'sign-in' && 'Acesse sua conta'}
                        {view === 'sign-up' && 'Crie sua conta'}
                        {view === 'verify-email' && 'Verifique seu e-mail'}
                        {view === 'forgot-password' && 'Recuperar senha'}
                        {view === 'reset-password' && 'Nova senha'}
                    </h2>
                    <p className="text-slate-500 text-sm mt-2 text-center">
                        {view === 'sign-in' && 'Bem-vindo de volta à Trilha 90 Dias'}
                        {view === 'sign-up' && 'Inicie sua jornada rumo aos resultados reais'}
                        {view === 'verify-email' && 'Digite o código de 6 dígitos que enviamos para você'}
                        {view === 'forgot-password' && 'Enviaremos um código para redefinir sua senha'}
                        {view === 'reset-password' && 'Digite o código recebido e a nova senha'}
                    </p>
                </div>

                {/* Global Messages */}
                {errorMsg && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium text-center">
                        {errorMsg}
                    </div>
                )}
                {successMsg && (
                    <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-100 text-green-700 text-sm font-medium text-center">
                        {successMsg}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={currentOnSubmit()} className="space-y-5">
                    {/* Campo Nome (Apenas Cadastro) */}
                    {view === 'sign-up' && (
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-slate-700 ml-1">Nome Completo</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-avil-blue/20 focus:border-avil-blue transition-all outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                                    placeholder="Seu nome"
                                />
                            </div>
                        </div>
                    )}

                    {/* Campo E-mail */}
                    {['sign-in', 'sign-up', 'forgot-password', 'verify-email', 'reset-password'].includes(view) && (
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-slate-700 ml-1">E-mail</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    disabled={view === 'verify-email' || view === 'reset-password'}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-avil-blue/20 focus:border-avil-blue transition-all outline-none text-slate-800 placeholder:text-slate-400 font-medium disabled:opacity-60"
                                    placeholder="voce@exemplo.com"
                                />
                            </div>
                        </div>
                    )}

                    {/* Campo OTP (Email Verification e Reset Password) */}
                    {(view === 'verify-email' || view === 'reset-password') && (
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-slate-700 ml-1">Código de Segurança (6 dígitos)</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    required
                                    maxLength={6}
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-avil-orange/20 focus:border-avil-orange transition-all outline-none text-slate-800 font-bold text-center tracking-widest text-lg"
                                    placeholder="000000"
                                />
                            </div>
                        </div>
                    )}

                    {/* Campo Senha */}
                    {['sign-in', 'sign-up', 'reset-password'].includes(view) && (
                        <div className="space-y-1">
                            <div className="flex items-center justify-between ml-1">
                                <label className="text-sm font-bold text-slate-700">Senha</label>
                                {view === 'sign-in' && (
                                    <button
                                        type="button"
                                        onClick={() => { setView('forgot-password'); setErrorMsg(''); setSuccessMsg(''); }}
                                        className="text-sm font-semibold text-avil-blue hover:text-avil-blue-dark transition-colors"
                                    >
                                        Esqueceu?
                                    </button>
                                )}
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Key className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-avil-blue/20 focus:border-avil-blue transition-all outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                                    placeholder={view === 'reset-password' ? 'Sua nova senha' : 'Sua senha'}
                                    minLength={6}
                                />
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-4 mt-6 bg-avil-orange hover:bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-avil-orange/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
                    >
                        {loading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                {view === 'sign-in' && 'Entrar'}
                                {view === 'sign-up' && 'Criar Conta'}
                                {view === 'verify-email' && 'Verificar Código'}
                                {view === 'forgot-password' && 'Enviar Código'}
                                {view === 'reset-password' && 'Redefinir Senha'}
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </form>

                {/* Footer Alternators */}
                <div className="mt-8 text-center">
                    {view === 'sign-in' && (
                        <p className="text-slate-500 text-sm font-medium">
                            Não tem uma conta?{' '}
                            <button
                                onClick={() => { setView('sign-up'); setErrorMsg(''); setSuccessMsg(''); }}
                                className="text-avil-orange-dark font-bold hover:underline"
                            >
                                Cadastre-se
                            </button>
                        </p>
                    )}
                    {view === 'sign-up' && (
                        <p className="text-slate-500 text-sm font-medium">
                            Já tem uma conta?{' '}
                            <button
                                onClick={() => { setView('sign-in'); setErrorMsg(''); setSuccessMsg(''); }}
                                className="text-avil-blue-dark font-bold hover:underline"
                            >
                                Fazer login
                            </button>
                        </p>
                    )}
                    {(view === 'forgot-password' || view === 'reset-password' || view === 'verify-email') && (
                        <button
                            onClick={() => { setView('sign-in'); setErrorMsg(''); setSuccessMsg(''); }}
                            className="text-slate-500 text-sm font-bold hover:text-slate-700 transition-colors flex items-center justify-center gap-1 mx-auto"
                        >
                            Voltar ao login
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}
