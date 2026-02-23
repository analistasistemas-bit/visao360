import React from 'react';
import { LogoAvil } from '../App';

const EbookCover = () => {
    return (
        <div className="page overflow-hidden relative">
            <div className="absolute inset-0 gradient-primary opacity-90"></div>

            {/* Background Pattern */}
            <div className="absolute inset-0 pattern-dots opacity-20"></div>

            {/* Decorative Elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-avil-orange/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-avil-blue-light/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 h-full flex flex-col items-center justify-between py-24 px-12 text-center">
                {/* Header Badge */}
                <div className="animate-in fade-in slide-in-from-top-4 duration-1000 fill-mode-both">
                    <span className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold tracking-[0.2em] uppercase text-xs">
                        Documento Oficial
                    </span>
                </div>

                {/* Centered Logo and Main Content */}
                <div className="flex-1 flex flex-col items-center justify-center gap-12 w-full max-w-4xl mx-auto">
                    <div className="p-12 bg-white rounded-[40px] shadow-2xl shadow-black/20 transform hover:scale-105 transition-transform duration-700 animate-in zoom-in-95 duration-1000">
                        <img
                            src="/logo.jpeg"
                            alt="AVIL"
                            className="h-32 md:h-48 object-contain"
                        />
                    </div>

                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                            Projeto <span className="text-avil-orange drop-shadow-sm">Visão 360</span>
                        </h1>
                        <div className="h-1.5 w-32 bg-avil-orange mx-auto rounded-full shadow-lg shadow-avil-orange/50"></div>
                        <p className="text-xl md:text-2xl text-blue-100/80 font-medium max-w-2xl mx-auto leading-relaxed">
                            Aceleração estratégica e transformação operacional em 90 dias
                        </p>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="animate-in fade-in duration-1000 delay-700 fill-mode-both w-full flex flex-col items-center gap-8">
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                        © AVIL - Gestão de Alta Performance
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EbookCover;
