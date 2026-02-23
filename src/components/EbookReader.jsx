import React from 'react';
import { LogoAvil } from '../App';
import EbookCover from './EbookCover';

export default function EbookReader() {
    return (
        <div className="ebook-reader-container w-full min-h-screen bg-slate-50 pt-8 pb-32">
            {/*  CAPA  */}
            <EbookCover />


            {/*  ÍNDICE  */}
            <div className="page p-4 md:p-8 pattern-grid">
                <div className="h-full flex flex-col">
                    {/*  Header  */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-accent mb-4">
                            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary">Sumário</h2>
                        <p className="text-muted mt-2">Seu roteiro de 90 dias para a excelência</p>
                    </div>

                    {/*  Chapters Grid  */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/*  Chapter 1  */}
                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm card-hover cursor-pointer group">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl font-display font-bold text-accent/30 group-hover:text-accent transition-colors">01</div>
                                <div className="flex-1">
                                    <h3 className="font-display font-semibold text-primary group-hover:text-accent transition-colors">O Pulo do Gato</h3>
                                    <p className="text-sm text-muted mt-1">De Operacional a Estratégico</p>
                                    <div className="flex gap-2 mt-3">
                                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Mindset</span>
                                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Priorização</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Chapter 2  */}
                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm card-hover cursor-pointer group">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl font-display font-bold text-accent/30 group-hover:text-accent transition-colors">02</div>
                                <div className="flex-1">
                                    <h3 className="font-display font-semibold text-primary group-hover:text-accent transition-colors">O Raio-X da Operação</h3>
                                    <p className="text-sm text-muted mt-1">Diagnóstico Ágil</p>
                                    <div className="flex gap-2 mt-3">
                                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Análise</span>
                                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">KPIs</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Chapter 3  */}
                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm card-hover cursor-pointer group">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl font-display font-bold text-accent/30 group-hover:text-accent transition-colors">03</div>
                                <div className="flex-1">
                                    <h3 className="font-display font-semibold text-primary group-hover:text-accent transition-colors">Alinhando a Rota</h3>
                                    <p className="text-sm text-muted mt-1">Expectativas e Metas</p>
                                    <div className="flex gap-2 mt-3">
                                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Comunicação</span>
                                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Liderança</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Chapter 4  */}
                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm card-hover cursor-pointer group">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl font-display font-bold text-accent/30 group-hover:text-accent transition-colors">04</div>
                                <div className="flex-1">
                                    <h3 className="font-display font-semibold text-primary group-hover:text-accent transition-colors">Vitórias Rápidas</h3>
                                    <p className="text-sm text-muted mt-1">Ganhando a Confiança</p>
                                    <div className="flex gap-2 mt-3">
                                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Autoridade</span>
                                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Resultados</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Chapter 5  */}
                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm card-hover cursor-pointer group">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl font-display font-bold text-accent/30 group-hover:text-accent transition-colors">05</div>
                                <div className="flex-1">
                                    <h3 className="font-display font-semibold text-primary group-hover:text-accent transition-colors">O Time dos Sonhos</h3>
                                    <p className="text-sm text-muted mt-1">Seleção e Engajamento</p>
                                    <div className="flex gap-2 mt-3">
                                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Pessoas</span>
                                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Cultura</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Chapter 6  */}
                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm card-hover cursor-pointer group">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl font-display font-bold text-accent/30 group-hover:text-accent transition-colors">06</div>
                                <div className="flex-1">
                                    <h3 className="font-display font-semibold text-primary group-hover:text-accent transition-colors">Estratégia na Prática</h3>
                                    <p className="text-sm text-muted mt-1">Margem, Giro e Cliente</p>
                                    <div className="flex gap-2 mt-3">
                                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Financeiro</span>
                                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Vendas</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Chapter 7 - Full width  */}
                        <div className="md:col-span-2 bg-gradient-to-r from-primary to-secondary rounded-xl p-5 shadow-lg">
                            <div className="flex items-start gap-4">
                                <div className="text-4xl font-display font-bold text-accent">07</div>
                                <div className="flex-1">
                                    <h3 className="font-display font-semibold text-white">O Ciclo de 90 Dias</h3>
                                    <p className="text-sm text-blue-200 mt-1">Sustentando o Crescimento</p>
                                    <div className="flex gap-2 mt-3">
                                        <span className="text-xs bg-white/20 text-white px-2 py-1 rounded">Método</span>
                                        <span className="text-xs bg-accent/80 text-white px-2 py-1 rounded">Continuidade</span>
                                    </div>
                                </div>
                                <svg className="w-12 h-12 text-accent/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  ALINHAMENTO ESTRATÉGICO  */}
            <div className="page p-8 md:p-12 pattern-grid">
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-10 text-center lg:text-left">
                        <div className="inline-block bg-avil-orange-100 text-avil-orange-dark px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-avil-orange-200">
                            Manifesto
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-avil-blue-dark leading-tight tracking-tight mb-4">
                            Alinhamento Estratégico: <br />
                            <span className="text-avil-orange">O Novo Padrão de Gestão Avil</span>
                        </h2>
                        <div className="h-1.5 w-40 bg-avil-orange rounded-full"></div>
                    </div>

                    {/* Content Grid */}
                    <div className="flex-1 space-y-8 overflow-y-auto pr-2 custom-scrollbar">
                        {/* Section 1 */}
                        <div className="relative pl-8 border-l-2 border-slate-100 group hover:border-avil-blue transition-colors duration-300">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-avil-blue shadow-sm group-hover:scale-110 transition-transform"></div>
                            <h3 className="text-xl font-bold text-avil-blue-dark mb-3">1. O Cenário Atual</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                O varejo e o atacado são dinâmicos, mas a verdade é que a operação engole quem não tem método. É comum que profissionais que conhecem o chão de loja como ninguém acabem sufocados pelo operacional. Estar o tempo todo ocupado, resolvendo problemas de balcão e apagando incêndios, cria uma falsa sensação de produtividade. A realidade é dura: se você continua agindo como um "faz-tudo" , sendo o único que resolve os problemas da loja, você se torna um "super-operacional", e não um líder.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="relative pl-8 border-l-2 border-slate-100 group hover:border-avil-orange transition-colors duration-300">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-avil-orange shadow-sm group-hover:scale-110 transition-transform"></div>
                            <h3 className="text-xl font-bold text-avil-blue-dark mb-3">2. A Solução</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                É exatamente para romper essa mentalidade que este material foi criado. Nosso objetivo aqui é transformar a operação bruta de varejo e atacado em uma gestão estratégica de alta performance. Este e-book não é apenas um guia prático; é o manual de execução de um Ciclo de 90 Dias desenhado para que você saia do operacional, assuma o controle estratégico da sua unidade, domine os indicadores e acelere resultados reais.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div className="relative pl-8 border-l-2 border-slate-100 group hover:border-avil-blue transition-colors duration-300">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-avil-blue shadow-sm group-hover:scale-110 transition-transform"></div>
                            <h3 className="text-xl font-bold text-avil-blue-dark mb-3">3. O Escopo e o Seu Papel</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Toda grande mudança na cultura da empresa começa pela gerência. O projeto se inicia com você porque o seu comportamento dita o ritmo da equipe. O foco desta jornada é que você assuma definitivamente o papel de mentor e estrategista. Ao aplicar o diagnóstico correto e conquistar vitórias rápidas, você construirá a autoridade necessária para, no futuro, cascatear essa mesma mentalidade para as demais lideranças e coordenadores da rede.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div className="relative pl-8 border-l-2 border-slate-100 group hover:border-avil-orange transition-colors duration-300">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-avil-orange shadow-sm group-hover:scale-110 transition-transform"></div>
                            <h3 className="text-xl font-bold text-avil-blue-dark mb-3">4. O Que Esperamos de Você</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                A partir de hoje, a expectativa sobre o seu trabalho muda. O olhar deixa de ser apenas sobre volume de vendas e passa a focar nos três pilares financeiros vitais: Entrada, Giro e Margem. Lembre-se sempre de que dinheiro parado na prateleira é prejuízo. Esperamos que você construa uma agenda blindada para analisar os números da sua unidade e, acima de tudo, que forme uma equipe autônoma, que não dependa do gestor para cada detalhe do dia a dia.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div className="relative pl-8 border-l-2 border-slate-100 group hover:border-avil-blue transition-colors duration-300">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-avil-blue shadow-sm group-hover:scale-110 transition-transform"></div>
                            <h3 className="text-xl font-bold text-avil-blue-dark mb-3">5. O Retorno: Ganhos Reais</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                O resultado dessa transformação beneficia a todos. Para a empresa, o sucesso será medido na prática com a melhora real na última linha do DRE (lucro líquido) e a identificação de onde o dinheiro está escorrendo com quebras e perdas. Para você, esse ciclo significa construir uma operação que roda sozinha e estar pronto para os novos desafios e o próximo nível da sua carreira. O sucesso da sua unidade está em suas mãos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/*  INTRODUÇÃO  */}
            <div className="page p-8">
                <div className="h-full flex flex-col">
                    {/*  Header  */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4M12 8h.01" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="font-display text-2xl font-bold text-primary">Introdução</h2>
                            <p className="text-muted text-sm">Bem-vindo à sua transformação</p>
                        </div>
                    </div>

                    {/*  Main content  */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/*  Left column - Main text  */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="bg-surface rounded-xl p-6 border-l-4 border-accent">
                                <p className="text-lg text-dark leading-relaxed">
                                    Este e-book é um <span className="font-semibold text-primary">guia prático e direto ao ponto</span>, desenhado para gerentes, coordenadores, supervisores e líderes.
                                </p>
                            </div>

                            <p className="text-muted leading-relaxed">
                                Se você é um profissional que conhece o chão de loja como ninguém, mas se sente sufocado pelo operacional e precisa aprender a olhar para margem, giro e liderança de forma analítica e estratégica, este material é para você.
                            </p>

                            {/*  Highlight box  */}
                            <div className="bg-primary rounded-xl p-6 text-white relative overflow-hidden">
                                <svg className="absolute top-0 right-0 w-32 h-32 opacity-10" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" fill="white" />
                                </svg>
                                <div className="relative z-10">
                                    <div className="text-accent font-display font-semibold mb-2">NOSSO OBJETIVO</div>
                                    <p className="text-lg leading-relaxed">
                                        Transformar a operação bruta de varejo e atacado em uma <span className="text-accent font-semibold">gestão estratégica de alta performance</span>, permitindo que você saia do operacional e assuma o controle estratégico da sua unidade em apenas <span className="text-accent font-bold">90 dias</span>.
                                    </p>
                                </div>
                            </div>

                            {/*  Target audience  */}
                            <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                                <h3 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    Para Quem é Este Ebook
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 text-muted">
                                        <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                        <span className="text-sm">Gerentes</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted">
                                        <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                        <span className="text-sm">Coordenadores</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted">
                                        <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                        <span className="text-sm">Supervisores</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted">
                                        <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                        </svg>
                                        <span className="text-sm">Líderes</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Right column - Visual  */}
                        <div className="flex flex-col gap-4">
                            {/*  Journey illustration  */}
                            <div className="bg-white rounded-xl p-4 border border-border shadow-sm flex-1">
                                <h4 className="font-display text-sm font-semibold text-primary mb-4 text-center">Sua Jornada de 90 Dias</h4>
                                <svg viewBox="0 0 200 280" className="w-full h-auto">
                                    {/*  Timeline  */}
                                    <line x1="100" y1="20" x2="100" y2="260" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="5,5" />

                                    {/*  Day 0  */}
                                    <circle cx="100" cy="30" r="12" fill="#1a365d" />
                                    <text x="130" y="35" fontSize="10" fill="#1a365d" fontWeight="600">Início</text>
                                    <text x="130" y="47" fontSize="8" fill="#718096">Diagnóstico</text>

                                    {/*  Day 30  */}
                                    <circle cx="100" cy="90" r="12" fill="#2c5282" />
                                    <text x="130" y="95" fontSize="10" fill="#1a365d" fontWeight="600">Dia 30</text>
                                    <text x="130" y="107" fontSize="8" fill="#718096">Primeiras Vitórias</text>

                                    {/*  Day 60  */}
                                    <circle cx="100" cy="150" r="12" fill="#ed8936" />
                                    <text x="130" y="155" fontSize="10" fill="#1a365d" fontWeight="600">Dia 60</text>
                                    <text x="130" y="167" fontSize="8" fill="#718096">Time Engajado</text>

                                    {/*  Day 90  */}
                                    <circle cx="100" cy="210" r="12" fill="#38a169" />
                                    <text x="130" y="215" fontSize="10" fill="#1a365d" fontWeight="600">Dia 90</text>
                                    <text x="130" y="227" fontSize="8" fill="#718096">Resultados Sólidos</text>

                                    {/*  Final star  */}
                                    <polygon points="100,250 103,258 112,258 105,263 108,272 100,267 92,272 95,263 88,258 97,258" fill="#ed8936" />
                                </svg>
                            </div>

                            {/*  Quote  */}
                            <div className="bg-accent/10 rounded-xl p-4 border-l-4 border-accent">
                                <p className="text-sm text-dark italic leading-relaxed">
                                    "Ser estratégico não é usar palavras difíceis, é saber onde colocar sua energia para o resultado aparecer."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 1  */}
            <div className="page">
                <div className="h-full flex flex-col">
                    {/*  Chapter header  */}
                    <div className="gradient-primary p-4 md:p-8 relative overflow-hidden">
                        <div className="chapter-number text-white font-display">01</div>
                        <svg className="absolute top-0 right-0 w-48 h-48 opacity-5" viewBox="0 0 200 200">
                            <path d="M100 10 L190 100 L100 190 L10 100 Z" fill="white" />
                        </svg>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-accent text-sm font-semibold tracking-wider mb-2">
                                <span>CAPÍTULO 1</span>
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">O Pulo do Gato</h2>
                            <p className="text-blue-200 text-lg">De Operacional a Estratégico</p>
                        </div>
                    </div>

                    {/*  Content  */}
                    <div className="flex-1 p-4 md:p-8 pattern-grid">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                            {/*  Main content  */}
                            <div className="md:col-span-2 space-y-6">
                                {/*  Objective box  */}
                                <div className="bg-accent/10 border border-accent/30 rounded-xl p-5">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="M12 8v8M8 12h8" />
                                            </svg>
                                        </div>
                                        <span className="font-display font-semibold text-primary">OBJETIVO</span>
                                    </div>
                                    <p className="text-dark">Romper a mentalidade de "faz-tudo" e assumir o papel de mentor e estrategista.</p>
                                </div>

                                {/*  Content text  */}
                                <div className="prose max-w-none">
                                    <p className="text-dark leading-relaxed">
                                        No varejo e atacado, a operação engole quem não tem método. <span className="font-semibold text-primary">Ser estratégico não é usar palavras difíceis</span>, é saber onde colocar sua energia para o resultado aparecer no final do mês.
                                    </p>

                                    <p className="text-muted leading-relaxed">
                                        O operacional resolve a falta de troco, atende o cliente que reclama e limpa o balcão. O estratégico analisa <span className="text-accent font-medium">por que o troco faltou</span>, treina a equipe para o cliente não reclamar e cria processos para a loja estar sempre limpa.
                                    </p>
                                </div>

                                {/*  Key topics  */}
                                <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
                                    <h3 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                        Principais Tópicos
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3 p-3 bg-surface rounded-lg">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-primary">1</span>
                                            </div>
                                            <div>
                                                <span className="font-medium text-dark">A armadilha da urgência:</span>
                                                <span className="text-muted text-sm"> como a falsa sensação de produtividade pode prejudicar sua gestão.</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 bg-surface rounded-lg">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-primary">2</span>
                                            </div>
                                            <div>
                                                <span className="font-medium text-dark">Diferença entre vender e dar lucro:</span>
                                                <span className="text-muted text-sm"> entender que volume de vendas nem sempre significa rentabilidade.</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 bg-surface rounded-lg">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-primary">3</span>
                                            </div>
                                            <div>
                                                <span className="font-medium text-dark">Onde focar sua energia:</span>
                                                <span className="text-muted text-sm"> priorizar atividades que geram impacto real na primeira semana.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*  Sidebar  */}
                            <div className="space-y-4">
                                {/*  Infographic: Pyramid  */}
                                <div className="bg-white rounded-xl p-4 border border-border shadow-sm">
                                    <h4 className="font-display text-sm font-semibold text-primary text-center mb-4">Do Operacional ao Estratégico</h4>
                                    <svg viewBox="0 0 200 180" className="w-full">
                                        {/*  Pyramid  */}
                                        <polygon points="100,10 180,170 20,170" fill="#f7fafc" stroke="#e2e8f0" strokeWidth="2" />

                                        {/*  Strategic zone  */}
                                        <polygon points="100,10 140,70 60,70" fill="#ed8936" />
                                        <text x="100" y="50" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">ESTRATÉGICO</text>

                                        {/*  Tactical zone  */}
                                        <polygon points="60,70 140,70 160,120 40,120" fill="#2c5282" />
                                        <text x="100" y="100" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">TÁTICO</text>

                                        {/*  Operational zone  */}
                                        <polygon points="40,120 160,120 180,170 20,170" fill="#1a365d" />
                                        <text x="100" y="150" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">OPERACIONAL</text>

                                        {/*  Arrow  */}
                                        <defs>
                                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                                <polygon points="0 0, 10 3.5, 0 7" fill="#ed8936" />
                                            </marker>
                                        </defs>
                                        <line x1="190" y1="140" x2="190" y2="40" stroke="#ed8936" strokeWidth="2" markerEnd="url(#arrowhead)" />
                                        <text x="190" y="95" textAnchor="middle" fontSize="7" fill="#ed8936" transform="rotate(-90 190 95)">EVOLUÇÃO</text>
                                    </svg>
                                </div>

                                {/*  Result box  */}
                                <div className="bg-primary rounded-xl p-4 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <span className="font-display text-sm font-semibold text-accent">RESULTADO PRÁTICO</span>
                                    </div>
                                    <p className="text-sm text-blue-100 leading-relaxed">
                                        O gestor terá uma agenda blindada para atividades que realmente movem o ponteiro do resultado.
                                    </p>
                                </div>

                                {/*  Warning  */}
                                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                    <div className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                            <line x1="12" y1="9" x2="12" y2="13" />
                                            <line x1="12" y1="17" x2="12.01" y2="17" />
                                        </svg>
                                        <p className="text-sm text-red-700">
                                            <span className="font-semibold">Cuidado:</span> Estar "ocupado" não significa estar sendo "eficiente".
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 1 - continuação  */}
            <div className="page p-4 md:p-8 pattern-grid">
                <div className="h-full flex flex-col">
                    {/*  Section header  */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>
                        </div>
                        <h3 className="font-display text-xl font-bold text-primary">Onde Focar na Primeira Semana</h3>
                    </div>

                    {/*  Three pillars  */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm text-center card-hover">
                            <div className="w-12 h-12 rounded-full gradient-primary mx-auto mb-3 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h4 className="font-display font-semibold text-primary mb-2">Observação Silenciosa</h4>
                            <p className="text-sm text-muted">Olhe como o cliente circula e como a equipe se comporta sem sua interferência.</p>
                        </div>

                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm text-center card-hover">
                            <div className="w-12 h-12 rounded-full gradient-accent mx-auto mb-3 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                            </div>
                            <h4 className="font-display font-semibold text-primary mb-2">Identificação de Gargalos</h4>
                            <p className="text-sm text-muted">Onde a venda trava? É no estoque? No caixa? Descubra.</p>
                        </div>

                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm text-center card-hover">
                            <div className="w-12 h-12 rounded-full bg-green-500 mx-auto mb-3 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                            </div>
                            <h4 className="font-display font-semibold text-primary mb-2">Agenda Blindada</h4>
                            <p className="text-sm text-muted">Reserve 1 hora por dia para olhar números, longe do barulho.</p>
                        </div>
                    </div>

                    {/*  Checklist  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
                            <h4 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 11l3 3L22 4" />
                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                </svg>
                                Checklist Prático
                            </h4>
                            <div className="space-y-3">
                                <div className="checklist-item text-sm text-dark">Identifiquei as 3 tarefas que mais tomam meu tempo hoje.</div>
                                <div className="checklist-item text-sm text-dark">Deleguei pelo menos uma tarefa operacional.</div>
                                <div className="checklist-item text-sm text-dark">Defini o horário da minha "Hora Estratégica" diária.</div>
                                <div className="checklist-item text-sm text-dark">Observei o fluxo de clientes em horários de pico.</div>
                            </div>
                        </div>

                        {/*  Exercise  */}
                        <div className="bg-accent/5 rounded-xl p-5 border-2 border-accent/30">
                            <h4 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                Exercício Aplicável
                            </h4>
                            <div className="bg-white rounded-lg p-4 mb-3">
                                <p className="font-semibold text-primary text-sm mb-2">A Regra dos 80/20 na Loja</p>
                                <p className="text-sm text-muted leading-relaxed">
                                    Liste os 5 produtos que mais vendem na sua unidade. Vá até a prateleira e verifique: eles estão bem expostos? Estão com preço correto? Têm estoque para o final de semana?
                                </p>
                            </div>
                            <p className="text-sm text-accent font-medium">Focar no que traz resultado é o começo da estratégia.</p>
                        </div>
                    </div>

                    {/*  Real example  */}
                    <div className="bg-white rounded-xl p-5 border border-border shadow-sm mb-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-display font-semibold text-primary mb-2">Exemplo Realista</h4>
                                <p className="text-sm text-muted leading-relaxed mb-3">
                                    Um gerente de varejo de moda passava <span className="font-semibold text-dark">4 horas por dia</span> conferindo cabides. Ele treinou o estoquista para fazer isso e usou essas 4 horas para analisar quais tamanhos estavam faltando no estoque.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                                        <span className="text-xs text-green-600">RESULTADO</span>
                                        <p className="text-lg font-bold text-green-700">+15%</p>
                                        <span className="text-xs text-green-600">giro das peças principais em 2 semanas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 2  */}
            <div className="page">
                <div className="h-full flex flex-col">
                    {/*  Chapter header  */}
                    <div className="gradient-primary p-4 md:p-8 relative overflow-hidden">
                        <div className="chapter-number text-white font-display">02</div>
                        <svg className="absolute top-0 right-0 w-48 h-48 opacity-5" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" fill="white" />
                        </svg>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-accent text-sm font-semibold tracking-wider mb-2">
                                <span>CAPÍTULO 2</span>
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">O Raio-X da Operação</h2>
                            <p className="text-blue-200 text-lg">Diagnóstico Ágil</p>
                        </div>
                    </div>

                    {/*  Content  */}
                    <div className="flex-1 p-8">
                        {/*  Intro  */}
                        <div className="mb-8">
                            <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 8v8M8 12h8" />
                                        </svg>
                                    </div>
                                    <span className="font-display font-semibold text-primary">OBJETIVO</span>
                                </div>
                                <p className="text-dark">Enxergar o que os números e as prateleiras não dizem de imediato.</p>
                            </div>

                            <p className="text-muted leading-relaxed">
                                Para liderar com estratégia, você precisa enxergar o que ninguém mais vê. No varejo e atacado, a loja <span className="text-primary font-semibold">"fala" através dos números e do comportamento das gôndolas</span>. O diagnóstico ágil serve para você não perder tempo com palpites e focar em fatos.
                            </p>
                        </div>

                        {/*  Three Pillars  */}
                        <div className="mb-8">
                            <h3 className="font-display text-lg font-bold text-primary mb-4">Os 3 Pilares do Diagnóstico Ágil</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/*  Pillar 1  */}
                                <div className="bg-white rounded-xl p-5 border-t-4 border-primary shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-3xl font-display font-bold text-primary/20">01</span>
                                        <h4 className="font-display font-semibold text-primary">Curva ABC de Vendas</h4>
                                    </div>
                                    <p className="text-sm text-muted mb-3">O que realmente paga as contas?</p>
                                    <div className="bg-surface rounded-lg p-3">
                                        <p className="text-xs text-dark">
                                            <span className="font-semibold text-accent">20%</span> dos produtos trazem <span className="font-semibold text-accent">80%</span> do lucro. Saiba quais são eles e garanta que nunca faltem.
                                        </p>
                                    </div>
                                </div>

                                {/*  Pillar 2  */}
                                <div className="bg-white rounded-xl p-5 border-t-4 border-accent shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-3xl font-display font-bold text-accent/20">02</span>
                                        <h4 className="font-display font-semibold text-primary">Ruptura, Perda e Estoque Alto</h4>
                                    </div>
                                    <p className="text-sm text-muted mb-3">Onde o dinheiro está escorrendo?</p>
                                    <div className="bg-surface rounded-lg p-3">
                                        <p className="text-xs text-dark">
                                            Produto que falta na gôndola é venda perdida. Estoque alto é dinheiro parado. Produto vencido é lucro jogado no lixo.
                                        </p>
                                    </div>
                                </div>

                                {/*  Pillar 3  */}
                                <div className="bg-white rounded-xl p-5 border-t-4 border-green-500 shadow-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-3xl font-display font-bold text-green-500/20">03</span>
                                        <h4 className="font-display font-semibold text-primary">Clima e Execução</h4>
                                    </div>
                                    <p className="text-sm text-muted mb-3">Como a equipe se comporta?</p>
                                    <div className="bg-surface rounded-lg p-3">
                                        <p className="text-xs text-dark">
                                            Eles se ajudam ou cada um fica no seu quadrado? A execução segue o padrão?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Comparative table  */}
                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm mb-6">
                            <h4 className="font-display font-semibold text-primary mb-4 text-center">Visão Comum vs. Visão Estratégica</h4>
                            <svg viewBox="0 0 600 120" className="w-full">
                                {/*  Header  */}
                                <rect x="0" y="0" width="300" height="30" fill="#f7fafc" stroke="#e2e8f0" />
                                <text x="150" y="20" textAnchor="middle" fontSize="12" fontWeight="600" fill="#718096">VISÃO COMUM</text>

                                <rect x="300" y="0" width="300" height="30" fill="#1a365d" />
                                <text x="450" y="20" textAnchor="middle" fontSize="12" fontWeight="600" fill="#ed8936">VISÃO ESTRATÉGICA</text>

                                {/*  Content  */}
                                <rect x="0" y="30" width="300" height="90" fill="white" stroke="#e2e8f0" />
                                <rect x="300" y="30" width="300" height="90" fill="#f7fafc" stroke="#e2e8f0" />

                                {/*  Row 1  */}
                                <circle cx="20" cy="55" r="6" fill="#718096" />
                                <text x="35" y="60" fontSize="11" fill="#4a5568">"Preciso repor a gôndola vazia"</text>

                                <circle cx="320" cy="55" r="6" fill="#ed8936" />
                                <text x="335" y="60" fontSize="11" fill="#1a365d">"Por que o sistema não avisou que ia acabar?"</text>

                                {/*  Row 2  */}
                                <circle cx="20" cy="85" r="6" fill="#718096" />
                                <text x="35" y="90" fontSize="11" fill="#4a5568">"O estoque está bagunçado"</text>

                                <circle cx="320" cy="85" r="6" fill="#ed8936" />
                                <text x="335" y="90" fontSize="11" fill="#1a365d">"Foi erro de compra ou excesso de venda?"</text>
                            </svg>
                        </div>

                        {/*  Technique  */}
                        <div className="bg-primary rounded-xl p-5 text-white flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-display font-semibold text-accent mb-1">Técnica do "Pé no Chão"</h4>
                                <p className="text-sm text-blue-100">Não faça o diagnóstico sentado no escritório. Caminhe pela loja como se fosse um cliente chato. Comece pelo estacionamento e termine no fundo do estoque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 2 - continuação  */}
            <div className="page p-4 md:p-8 pattern-grid">
                <div className="h-full flex flex-col">
                    {/*  Exercise: Cart Test  */}
                    <div className="bg-white rounded-xl p-6 border-2 border-accent mb-6">
                        <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-display text-lg font-bold text-primary mb-2">Exercício Aplicável: O Teste do Carrinho</h4>
                                <p className="text-muted leading-relaxed mb-4">
                                    Tente fazer uma compra completa na sua própria loja ou unidade de atacado. Cronometre quanto tempo leva para achar o produto, passar no caixa e sair.
                                </p>
                                <div className="bg-accent/10 rounded-lg p-4">
                                    <p className="text-sm text-dark">
                                        <span className="font-semibold text-accent">Importante:</span> Se você se irritar com algo, o seu cliente também se irrita. Anote os 3 maiores obstáculos dessa jornada.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Real example  */}
                    <div className="bg-white rounded-xl p-6 border border-border shadow-sm mb-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-display font-semibold text-primary mb-2">Exemplo Realista</h4>
                                <p className="text-sm text-muted leading-relaxed mb-3">
                                    Em um atacarejo de alimentos, um gerente percebeu que a fila do açougue estava sempre cheia, mas a venda não crescia. Ao fazer o diagnóstico, viu que o balcão de autoatendimento estava vazio. Ele deslocou um funcionário para repor o autoatendimento.
                                </p>
                                <div className="flex items-center gap-6">
                                    <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-center">
                                        <p className="text-lg font-bold text-green-700">-Fila</p>
                                        <span className="text-xs text-green-600">Satisfação aumentou</span>
                                    </div>
                                    <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-center">
                                        <p className="text-lg font-bold text-green-700">+12%</p>
                                        <span className="text-xs text-green-600">Venda de carne em 1 semana</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Checklist  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
                            <h4 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 11l3 3L22 4" />
                                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                </svg>
                                Checklist Prático
                            </h4>
                            <div className="space-y-3">
                                <div className="checklist-item text-sm text-dark">Analisei a lista dos 10 produtos mais vendidos (Curva A).</div>
                                <div className="checklist-item text-sm text-dark">Verifiquei se há produtos da Curva A em falta (ruptura).</div>
                                <div className="checklist-item text-sm text-dark">Chequei o setor de trocas/perdas da última semana.</div>
                                <div className="checklist-item text-sm text-dark">Conversei com 3 clientes para ouvir críticas reais.</div>
                            </div>
                        </div>

                        {/*  Result  */}
                        <div className="bg-primary rounded-xl p-5 text-white flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span className="font-display font-semibold text-accent">RESULTADO PRÁTICO</span>
                            </div>
                            <p className="text-blue-100 leading-relaxed">
                                Um mapa completo de vulnerabilidades e oportunidades da sua loja ou setor.
                            </p>

                            {/*  Mini illustration  */}
                            <svg viewBox="0 0 200 60" className="w-full mt-4 opacity-30">
                                <rect x="10" y="20" width="30" height="30" fill="white" rx="4" />
                                <rect x="50" y="10" width="30" height="40" fill="white" rx="4" />
                                <rect x="90" y="15" width="30" height="35" fill="white" rx="4" />
                                <rect x="130" y="5" width="30" height="45" fill="#ed8936" rx="4" />
                                <text x="145" y="32" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">FOCO</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 3  */}
            <div className="page">
                <div className="h-full flex flex-col">
                    {/*  Chapter header  */}
                    <div className="gradient-primary p-4 md:p-8 relative overflow-hidden">
                        <div className="chapter-number text-white font-display">03</div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-accent text-sm font-semibold tracking-wider mb-2">
                                <span>CAPÍTULO 3</span>
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">Alinhando a Rota</h2>
                            <p className="text-blue-200 text-lg">Expectativas e Metas</p>
                        </div>
                    </div>

                    {/*  Content  */}
                    <div className="flex-1 p-8">
                        {/*  Objective  */}
                        <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 8v8M8 12h8" />
                                    </svg>
                                </div>
                                <span className="font-display font-semibold text-primary">OBJETIVO</span>
                            </div>
                            <p className="text-dark">Negociar o que é prioridade com a diretoria/donos e comunicar com clareza para o time.</p>
                        </div>

                        {/*  Key message  */}
                        <div className="bg-primary rounded-xl p-6 text-white mb-6">
                            <div className="flex items-start gap-4">
                                <svg className="w-10 h-10 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                <div>
                                    <p className="text-lg leading-relaxed">
                                        No varejo, o maior erro de um gestor é <span className="text-accent font-semibold">assumir que sabe o que a diretoria quer</span>. Se você focar em "limpar a loja" enquanto o dono quer "margem de lucro", você vai falhar.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/*  Translator concept  */}
                        <div className="bg-white rounded-xl p-6 border border-border shadow-sm mb-6">
                            <h3 className="font-display text-lg font-bold text-primary mb-4 text-center">Seu Papel: O Tradutor</h3>

                            <svg viewBox="0 0 600 140" className="w-full">
                                {/*  Left side - Corporate  */}
                                <rect x="0" y="20" width="180" height="100" fill="#1a365d" rx="8" />
                                <text x="90" y="45" textAnchor="middle" fontSize="10" fill="#ed8936" fontWeight="600">DIRETORIA FALA</text>
                                <text x="90" y="65" textAnchor="middle" fontSize="9" fill="white">"EBITDA"</text>
                                <text x="90" y="80" textAnchor="middle" fontSize="9" fill="white">"Mark-up"</text>
                                <text x="90" y="95" textAnchor="middle" fontSize="9" fill="white">"ROI"</text>
                                <text x="90" y="110" textAnchor="middle" fontSize="9" fill="white">"Margem Bruta"</text>

                                {/*  Arrow  */}
                                <path d="M190 70 L240 70" stroke="#ed8936" strokeWidth="3" fill="none" />
                                <polygon points="240,65 250,70 240,75" fill="#ed8936" />

                                {/*  Center - Translator  */}
                                <rect x="250" y="20" width="100" height="100" fill="#ed8936" rx="8" />
                                <text x="300" y="55" textAnchor="middle" fontSize="10" fill="white" fontWeight="600">GESTOR</text>
                                <text x="300" y="75" textAnchor="middle" fontSize="9" fill="white">TRADUTOR</text>
                                <text x="300" y="95" textAnchor="middle" fontSize="20" fill="white">⚡</text>

                                {/*  Arrow  */}
                                <path d="M360 70 L410 70" stroke="#ed8936" strokeWidth="3" fill="none" />
                                <polygon points="410,65 420,70 410,75" fill="#ed8936" />

                                {/*  Right side - Team  */}
                                <rect x="420" y="20" width="180" height="100" fill="#2c5282" rx="8" />
                                <text x="510" y="45" textAnchor="middle" fontSize="10" fill="#ed8936" fontWeight="600">TIME ENTENDE</text>
                                <text x="510" y="65" textAnchor="middle" fontSize="9" fill="white">"Bater a meta"</text>
                                <text x="510" y="80" textAnchor="middle" fontSize="9" fill="white">"Vender o produto X"</text>
                                <text x="510" y="95" textAnchor="middle" fontSize="9" fill="white">"Kit completo"</text>
                                <text x="510" y="110" textAnchor="middle" fontSize="9" fill="white">"Foco no lucro"</text>
                            </svg>
                        </div>

                        {/*  Key question  */}
                        <div className="bg-accent/5 border-2 border-accent rounded-xl p-5 mb-6">
                            <h4 className="font-display font-semibold text-primary mb-3">A Pergunta de Ouro</h4>
                            <p className="text-dark leading-relaxed">
                                Sente com seu superior e pergunte: <span className="text-accent font-semibold">"Quais são os 3 indicadores que definem meu sucesso nos próximos 90 dias?"</span>
                            </p>
                            <p className="text-sm text-muted mt-2">Pode ser faturamento, redução de quebras ou produtividade da equipe.</p>
                        </div>

                        {/*  Practical result  */}
                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span className="font-display font-semibold text-accent">RESULTADO PRÁTICO</span>
                            </div>
                            <p className="text-muted">Fim dos conflitos de prioridade e equipe alinhada ao propósito do mês.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 3 - continuação  */}
            <div className="page p-4 md:p-8 pattern-grid">
                <div className="h-full flex flex-col">
                    {/*  Exercise  */}
                    <div className="bg-white rounded-xl p-6 border-2 border-accent mb-6">
                        <h4 className="font-display text-lg font-bold text-primary mb-4 flex items-center gap-2">
                            <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            Exercício Aplicável: O Jogo das Prioridades
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-surface rounded-lg p-4">
                                <p className="text-sm text-muted mb-2">1. Escreva o que VOCÊ acha que é a prioridade da loja hoje.</p>
                                <div className="h-16 border-2 border-dashed border-border rounded"></div>
                            </div>
                            <div className="bg-surface rounded-lg p-4">
                                <p className="text-sm text-muted mb-2">2. Peça para seu CHEFE fazer o mesmo.</p>
                                <div className="h-16 border-2 border-dashed border-border rounded"></div>
                            </div>
                        </div>
                        <div className="bg-accent/10 rounded-lg p-4 mt-4">
                            <p className="text-sm text-dark text-center">
                                <span className="font-semibold text-accent">Compare as respostas.</span> Se forem diferentes, ajuste seu foco imediatamente.
                            </p>
                        </div>
                    </div>

                    {/*  Real example  */}
                    <div className="bg-white rounded-xl p-6 border border-border shadow-sm mb-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-display font-semibold text-primary mb-2">Exemplo Realista</h4>
                                <p className="text-sm text-muted leading-relaxed mb-3">
                                    Em uma loja de materiais de construção, o gerente achava que o foco era vender cimento (volume). Após alinhar com o dono, descobriu que a meta era vender acabamentos (margem). Ele mudou a equipe de vendas de lugar e...
                                </p>
                                <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 inline-block">
                                    <span className="text-xs text-green-600">RESULTADO</span>
                                    <p className="text-xl font-bold text-green-700">+8%</p>
                                    <span className="text-xs text-green-600">lucro da loja no primeiro mês</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Checklist  */}
                    <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
                        <h4 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 11l3 3L22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                            Checklist Prático
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="checklist-item text-sm text-dark">Reunião de 15 minutos com meu superior para validar metas.</div>
                            <div className="checklist-item text-sm text-dark">Definição dos 3 KPIs principais do mês.</div>
                            <div className="checklist-item text-sm text-dark">Quadro de metas visível para toda a equipe.</div>
                            <div className="checklist-item text-sm text-dark">Feedback individual com os líderes de setor.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 4  */}
            <div className="page">
                <div className="h-full flex flex-col">
                    <div className="gradient-primary p-4 md:p-8 relative overflow-hidden">
                        <div className="chapter-number text-white font-display">04</div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-accent text-sm font-semibold tracking-wider mb-2">
                                <span>CAPÍTULO 4</span>
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">Vitórias Rápidas</h2>
                            <p className="text-blue-200 text-lg">Ganhando a Confiança do Chão de Loja</p>
                        </div>
                    </div>

                    <div className="flex-1 p-8">
                        {/*  Objective  */}
                        <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 8v8M8 12h8" />
                                    </svg>
                                </div>
                                <span className="font-display font-semibold text-primary">OBJETIVO</span>
                            </div>
                            <p className="text-dark">Identificar e resolver problemas crônicos rapidamente para gerar autoridade.</p>
                        </div>

                        {/*  Key insight  */}
                        <div className="bg-primary rounded-xl p-6 text-white mb-6">
                            <p className="text-lg leading-relaxed">
                                Ninguém segue um líder que não mostra resultados. Nos primeiros 30 dias, você precisa de <span className="text-accent font-semibold">"vitórias rápidas" (Early Wins)</span>. São pequenas mudanças que resolvem problemas antigos e mostram que você veio para somar.
                            </p>
                        </div>

                        {/*  Early wins concept  */}
                        <div className="bg-white rounded-xl p-6 border border-border shadow-sm mb-6">
                            <h3 className="font-display text-lg font-bold text-primary mb-4 text-center">As "Frutas Baixas"</h3>
                            <p className="text-muted text-center mb-4">Problemas fáceis de resolver, mas que ninguém mexia...</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-surface rounded-lg p-4 text-center">
                                    <svg className="w-10 h-10 text-accent mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="5" />
                                        <line x1="12" y1="1" x2="12" y2="3" />
                                        <line x1="12" y1="21" x2="12" y2="23" />
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                        <line x1="1" y1="12" x2="3" y2="12" />
                                        <line x1="21" y1="12" x2="23" y2="12" />
                                    </svg>
                                    <p className="text-sm text-dark font-medium">Corredor mal iluminado</p>
                                </div>
                                <div className="bg-surface rounded-lg p-4 text-center">
                                    <svg className="w-10 h-10 text-accent mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                        <polyline points="14 2 14 8 20 8" />
                                        <line x1="16" y1="13" x2="8" y2="13" />
                                        <line x1="16" y1="17" x2="8" y2="17" />
                                    </svg>
                                    <p className="text-sm text-dark font-medium">Processo burocrático no recebimento</p>
                                </div>
                                <div className="bg-surface rounded-lg p-4 text-center">
                                    <svg className="w-10 h-10 text-accent mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <p className="text-sm text-dark font-medium">Escala de folgas que gera briga</p>
                                </div>
                            </div>
                        </div>

                        {/*  Key topics  */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white rounded-xl p-4 border-t-4 border-primary shadow-sm">
                                <h4 className="font-display font-semibold text-primary mb-2">Ajustes de Layout</h4>
                                <p className="text-sm text-muted">Otimizar a disposição dos produtos para vender mais.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 border-t-4 border-accent shadow-sm">
                                <h4 className="font-display font-semibold text-primary mb-2">Correção de Processos</h4>
                                <p className="text-sm text-muted">Agilizar o fluxo de trabalho no caixa e recebimento.</p>
                            </div>
                            <div className="bg-white rounded-xl p-4 border-t-4 border-green-500 shadow-sm">
                                <h4 className="font-display font-semibold text-primary mb-2">Poder do Exemplo</h4>
                                <p className="text-sm text-muted">Sua atitude inspira toda a equipe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 4 - continuação  */}
            <div className="page p-4 md:p-8 pattern-grid">
                <div className="h-full flex flex-col">
                    {/*  Exercise  */}
                    <div className="bg-white rounded-xl p-6 border-2 border-accent mb-6">
                        <h4 className="font-display text-lg font-bold text-primary mb-4 flex items-center gap-2">
                            <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            Exercício Aplicável: A Caça aos "Gargalos"
                        </h4>
                        <div className="bg-surface rounded-lg p-4">
                            <p className="text-dark mb-3">
                                Pergunte ao seu operador de caixa: <span className="font-semibold text-primary">"O que mais te atrasa no dia a dia?"</span>
                            </p>
                            <div className="bg-accent/10 rounded-lg p-3">
                                <p className="text-sm text-dark">
                                    Se for o sistema lento ou falta de bobina, <span className="text-accent font-semibold">resolva isso em 24 horas</span>. Isso é uma vitória rápida.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*  Real example  */}
                    <div className="bg-white rounded-xl p-6 border border-border shadow-sm mb-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-display font-semibold text-primary mb-2">Exemplo Realista</h4>
                                <p className="text-sm text-muted leading-relaxed mb-3">
                                    Em um supermercado, os carrinhos de compra estavam sempre travando as rodas. O novo gerente mandou lubrificar todos em um único domingo.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                                        <span className="text-xs text-green-600">CLIENTES</span>
                                        <p className="text-sm font-medium text-green-700">Elogiaram</p>
                                    </div>
                                    <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                                        <span className="text-xs text-green-600">EQUIPE</span>
                                        <p className="text-sm font-medium text-green-700">Confiou no líder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Checklist  */}
                    <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
                        <h4 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 11l3 3L22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                            Checklist Prático
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="checklist-item text-sm text-dark">Identifiquei 3 "incêndios" que se repetem toda semana.</div>
                            <div className="checklist-item text-sm text-dark">Resolvi um problema técnico ou de estrutura da loja.</div>
                            <div className="checklist-item text-sm text-dark">Implementei uma melhoria sugerida por um funcionário.</div>
                            <div className="checklist-item text-sm text-dark">Comemorei publicamente a primeira meta batida.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 5  */}
            <div className="page">
                <div className="h-full flex flex-col">
                    <div className="gradient-primary p-4 md:p-8 relative overflow-hidden">
                        <div className="chapter-number text-white font-display">05</div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-accent text-sm font-semibold tracking-wider mb-2">
                                <span>CAPÍTULO 5</span>
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">O Time dos Sonhos</h2>
                            <p className="text-blue-200 text-lg">Seleção e Engajamento no Varejo</p>
                        </div>
                    </div>

                    <div className="flex-1 p-8">
                        {/*  Objective  */}
                        <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 8v8M8 12h8" />
                                    </svg>
                                </div>
                                <span className="font-display font-semibold text-primary">OBJETIVO</span>
                            </div>
                            <p className="text-dark">Formar uma equipe autônoma que não dependa do gestor para cada detalhe.</p>
                        </div>

                        {/*  Key insight  */}
                        <div className="bg-primary rounded-xl p-6 text-white mb-6">
                            <p className="text-lg leading-relaxed">
                                No varejo e atacado, você não gerencia produtos, você gerencia <span className="text-accent font-semibold">pessoas que movem produtos</span>. Se você for o único que resolve problemas, você é um "super-operacional", não um líder.
                            </p>
                        </div>

                        {/*  Talent illustration  */}
                        <div className="bg-white rounded-xl p-6 border border-border shadow-sm mb-6">
                            <h3 className="font-display text-lg font-bold text-primary mb-4 text-center">Busque Brilho nos Olhos</h3>

                            <svg viewBox="0 0 600 120" className="w-full">
                                {/*  Left: Skills  */}
                                <rect x="20" y="20" width="160" height="80" fill="#f7fafc" stroke="#e2e8f0" rx="8" />
                                <text x="100" y="40" textAnchor="middle" fontSize="10" fill="#718096" fontWeight="600">FÁCIL DE ENSINAR</text>
                                <text x="100" y="60" textAnchor="middle" fontSize="9" fill="#4a5568">Usar coletor de dados</text>
                                <text x="100" y="75" textAnchor="middle" fontSize="9" fill="#4a5568">Operar o sistema</text>
                                <text x="100" y="90" textAnchor="middle" fontSize="9" fill="#4a5568">Repor gôndola</text>

                                {/*  VS  */}
                                <text x="250" y="65" textAnchor="middle" fontSize="14" fill="#ed8936" fontWeight="bold">VS</text>

                                {/*  Right: Attitude  */}
                                <rect x="300" y="20" width="280" height="80" fill="#1a365d" rx="8" />
                                <text x="440" y="40" textAnchor="middle" fontSize="10" fill="#ed8936" fontWeight="600">DIFÍCIL DE ENSINAR</text>
                                <text x="340" y="60" fontSize="9" fill="white">Ser proativo</text>
                                <text x="340" y="75" fontSize="9" fill="white">Sorrir para o cliente</text>
                                <text x="340" y="90" fontSize="9" fill="white">Ter iniciativa</text>
                                <text x="480" y="60" fontSize="9" fill="white">Resolver problemas</text>
                                <text x="480" y="75" fontSize="9" fill="white">Trabalhar em equipe</text>
                                <text x="480" y="90" fontSize="9" fill="white">Ter compromisso</text>
                            </svg>
                        </div>

                        {/*  Practical tip  */}
                        <div className="bg-accent/5 border-2 border-accent rounded-xl p-5 mb-6">
                            <h4 className="font-display font-semibold text-primary mb-3">Dica Prática</h4>
                            <p className="text-dark leading-relaxed">
                                Pare de dar ordens e comece a fazer perguntas: <span className="text-accent font-semibold">"Como você resolveria essa falta de espaço na gôndola?"</span>
                            </p>
                            <p className="text-sm text-muted mt-2">Deixe o time pensar. Isso gera autonomia e libera seu tempo.</p>
                        </div>

                        {/*  Result  */}
                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span className="font-display font-semibold text-accent">RESULTADO PRÁTICO</span>
                            </div>
                            <p className="text-muted">Redução de turnover e aumento da produtividade por m².</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 5 - continuação  */}
            <div className="page p-4 md:p-8 pattern-grid">
                <div className="h-full flex flex-col">
                    {/*  Exercise: Talent Map  */}
                    <div className="bg-white rounded-xl p-6 border-2 border-accent mb-6">
                        <h4 className="font-display text-lg font-bold text-primary mb-4 flex items-center gap-2">
                            <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            Exercício Aplicável: Mapa de Talentos
                        </h4>
                        <p className="text-muted mb-4">Faça uma lista da sua equipe. Para cada um, escreva uma qualidade e um ponto a melhorar.</p>

                        <div className="bg-surface rounded-lg p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm font-semibold text-primary mb-2">
                                <span>Nome</span>
                                <span>Qualidade</span>
                                <span>Ponto a Melhorar</span>
                                <span>Ação</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-muted mb-2">
                                <span>Maria</span>
                                <span className="text-green-600">Organizada</span>
                                <span className="text-orange-600">Timidez</span>
                                <span>Cuida do estoque</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm text-muted">
                                <span>João</span>
                                <span className="text-green-600">Comunicativo</span>
                                <span className="text-orange-600">Desorganizado</span>
                                <span>Atende no balcão</span>
                            </div>
                        </div>

                        <p className="text-sm text-accent font-medium mt-3">Use a qualidade dele para ajudar a loja!</p>
                    </div>

                    {/*  Real example  */}
                    <div className="bg-white rounded-xl p-6 border border-border shadow-sm mb-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-display font-semibold text-primary mb-2">Exemplo Realista</h4>
                                <p className="text-sm text-muted leading-relaxed mb-3">
                                    Em um Centro de Distribuição, um gestor percebeu que o conferente era muito lento. Em vez de demitir, percebeu que ele era <span className="font-semibold text-dark">extremamente detalhista</span>. Mudou-o para a área de Inventário e Auditoria.
                                </p>
                                <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 inline-block">
                                    <span className="text-xs text-green-600">RESULTADO</span>
                                    <p className="text-sm font-medium text-green-700">Índice de erros de estoque caiu para quase zero</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Checklist  */}
                    <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
                        <h4 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 11l3 3L22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                            Checklist Prático
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="checklist-item text-sm text-dark">Identifiquei quem são os "multiplicadores".</div>
                            <div className="checklist-item text-sm text-dark">Mapeei quem precisa de treinamento urgente.</div>
                            <div className="checklist-item text-sm text-dark">Realizei uma dinâmica rápida de integração.</div>
                            <div className="checklist-item text-sm text-dark">Deleguei uma tarefa importante (sem microgerenciar).</div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 6  */}
            <div className="page">
                <div className="h-full flex flex-col">
                    <div className="gradient-primary p-4 md:p-8 relative overflow-hidden">
                        <div className="chapter-number text-white font-display">06</div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-accent text-sm font-semibold tracking-wider mb-2">
                                <span>CAPÍTULO 6</span>
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">Estratégia na Prática</h2>
                            <p className="text-blue-200 text-lg">Margem, Giro e Cliente</p>
                        </div>
                    </div>

                    <div className="flex-1 p-8">
                        {/*  Objective  */}
                        <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 8v8M8 12h8" />
                                    </svg>
                                </div>
                                <span className="font-display font-semibold text-primary">OBJETIVO</span>
                            </div>
                            <p className="text-dark">Dominar os pilares financeiros sem ser um contador.</p>
                        </div>

                        {/*  Key insight  */}
                        <div className="bg-primary rounded-xl p-6 text-white mb-6">
                            <p className="text-lg leading-relaxed text-center">
                                Estratégia no varejo se resume a três palavras: <span className="text-accent font-bold text-xl">Entrada, Giro e Margem</span>. Se você dominar isso, domina o mercado.
                            </p>
                        </div>

                        {/*  Three Pillars  */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-white rounded-xl p-5 border-t-4 border-primary shadow-sm">
                                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                        <polyline points="17 6 23 6 23 12" />
                                    </svg>
                                </div>
                                <h4 className="font-display font-semibold text-primary text-center mb-2">ENTRADA</h4>
                                <p className="text-sm text-muted text-center">Comprar bem e receber rápido.</p>
                                <div className="mt-3 bg-surface rounded-lg p-2 text-center">
                                    <span className="text-xs text-accent font-medium">Dinheiro entra na empresa</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-5 border-t-4 border-accent shadow-sm">
                                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="23 4 23 10 17 10" />
                                        <polyline points="1 20 1 14 7 14" />
                                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                                    </svg>
                                </div>
                                <h4 className="font-display font-semibold text-primary text-center mb-2">GIRO</h4>
                                <p className="text-sm text-muted text-center">O produto não pode "ficar morando" na prateleira.</p>
                                <div className="mt-3 bg-surface rounded-lg p-2 text-center">
                                    <span className="text-xs text-accent font-medium">Dinheiro parado = prejuízo</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-5 border-t-4 border-green-500 shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="12" y1="1" x2="12" y2="23" />
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                </div>
                                <h4 className="font-display font-semibold text-primary text-center mb-2">MARGEM</h4>
                                <p className="text-sm text-muted text-center">Não adianta vender muito se a sobra é pouca.</p>
                                <div className="mt-3 bg-surface rounded-lg p-2 text-center">
                                    <span className="text-xs text-accent font-medium">Foque no lucro líquido</span>
                                </div>
                            </div>
                        </div>

                        {/*  Customer focus  */}
                        <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
                            <h4 className="font-display font-semibold text-primary mb-3 text-center">O Cliente no Centro</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 rounded-lg p-4 text-center">
                                    <span className="text-sm font-semibold text-primary">Cliente ATACADO</span>
                                    <p className="text-xs text-muted mt-1">Busca <span className="font-semibold text-accent">preço e agilidade</span> </p>
                                </div>
                                <div className="bg-orange-50 rounded-lg p-4 text-center">
                                    <span className="text-sm font-semibold text-primary">Cliente VAREJO</span>
                                    <p className="text-xs text-muted mt-1">Busca <span className="font-semibold text-accent">conveniência e experiência</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 6 - continuação  */}
            <div className="page p-4 md:p-8 pattern-grid">
                <div className="h-full flex flex-col">
                    {/*  Cross-selling exercise  */}
                    <div className="bg-white rounded-xl p-6 border-2 border-accent mb-6">
                        <h4 className="font-display text-lg font-bold text-primary mb-4 flex items-center gap-2">
                            <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                            Exercício: Cálculo de Oportunidade
                        </h4>
                        <div className="bg-surface rounded-lg p-4 mb-4">
                            <p className="text-dark mb-3">
                                Pegue um produto que vende muito, mas tem margem baixa (ex: Arroz).
                            </p>
                            <div className="flex items-center justify-center gap-4">
                                <div className="bg-white rounded-lg p-3 border border-border text-center">
                                    <span className="text-xs text-muted">PRODUTO ALTO VOLUME</span>
                                    <p className="text-lg font-bold text-primary">Arroz</p>
                                    <span className="text-xs text-red-500">Margem baixa</span>
                                </div>
                                <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                                <div className="bg-accent/10 rounded-lg p-3 border border-accent text-center">
                                    <span className="text-xs text-accent">COLOCAR AO LADO</span>
                                    <p className="text-lg font-bold text-primary">Temperos Premium</p>
                                    <span className="text-xs text-green-600">Margem alta</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-accent font-medium text-center">Isso é Cross-selling estratégico!</p>
                    </div>

                    {/*  Real example  */}
                    <div className="bg-white rounded-xl p-6 border border-border shadow-sm mb-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-display font-semibold text-primary mb-2">Exemplo Realista</h4>
                                <p className="text-sm text-muted leading-relaxed mb-3">
                                    Em um atacado de bebidas, o gestor percebeu que o refrigerante vendia muito, mas a margem era mínima. Ele passou a colocar snacks e gelo logo na saída do corredor de bebidas.
                                </p>
                                <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 inline-block">
                                    <span className="text-xs text-green-600">RESULTADO</span>
                                    <p className="text-xl font-bold text-green-700">+20%</p>
                                    <span className="text-xs text-green-600">lucro total da seção (sem vender mais refrigerante)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Checklist  */}
                    <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
                        <h4 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 11l3 3L22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                            Checklist Prático
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="checklist-item text-sm text-dark">Revisei os produtos "micos" (que não giram há +30 dias).</div>
                            <div className="checklist-item text-sm text-dark">Criei uma promoção de "queima" para liberar espaço.</div>
                            <div className="checklist-item text-sm text-dark">Analisei o Ticket Médio da última semana.</div>
                            <div className="checklist-item text-sm text-dark">Verifiquei se os produtos de alta margem estão visíveis.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 7  */}
            <div className="page">
                <div className="h-full flex flex-col">
                    <div className="gradient-primary p-4 md:p-8 relative overflow-hidden">
                        <div className="chapter-number text-white font-display">07</div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 text-accent text-sm font-semibold tracking-wider mb-2">
                                <span>CAPÍTULO 7</span>
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">O Ciclo de 90 Dias</h2>
                            <p className="text-blue-200 text-lg">Sustentando o Crescimento</p>
                        </div>
                    </div>

                    <div className="flex-1 p-8">
                        {/*  Objective  */}
                        <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 8v8M8 12h8" />
                                    </svg>
                                </div>
                                <span className="font-display font-semibold text-primary">OBJETIVO</span>
                            </div>
                            <p className="text-dark">Criar um método de gestão contínua para evitar o efeito "voo de galinha".</p>
                        </div>

                        {/*  Key insight  */}
                        <div className="bg-primary rounded-xl p-6 text-white mb-6">
                            <p className="text-lg leading-relaxed text-center">
                                Você chegou ao final dos primeiros 90 dias. Agora, o desafio é <span className="text-accent font-semibold">não deixar a peteca cair</span>. Gestão estratégica não é um evento, é um hábito.
                            </p>
                        </div>

                        {/*  Rituals  */}
                        <div className="bg-white rounded-xl p-6 border border-border shadow-sm mb-6">
                            <h3 className="font-display text-lg font-bold text-primary mb-4 text-center">Rituais de Gestão</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-3 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <h4 className="font-display font-semibold text-primary mb-1">DIÁRIO</h4>
                                    <p className="text-sm text-muted">Reunião matinal rápida (5 min)</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                    </div>
                                    <h4 className="font-display font-semibold text-primary mb-1">SEMANAL</h4>
                                    <p className="text-sm text-muted">Análise de indicadores e metas</p>
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-green-500 mx-auto mb-3 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                            <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                                            <polyline points="7.5 19.79 7.5 14.6 3 12" />
                                            <polyline points="21 12 16.5 14.6 16.5 19.79" />
                                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                            <line x1="12" y1="22.08" x2="12" y2="12" />
                                        </svg>
                                    </div>
                                    <h4 className="font-display font-semibold text-primary mb-1">MENSAL</h4>
                                    <p className="text-sm text-muted">Planejamento de ações e promoções</p>
                                </div>
                            </div>
                        </div>

                        {/*  Delegate to grow  */}
                        <div className="bg-accent/5 border-2 border-accent rounded-xl p-5">
                            <h4 className="font-display font-semibold text-primary mb-3">Delegar para Crescer</h4>
                            <p className="text-dark leading-relaxed">
                                Se você ainda está fazendo coisas que seus subordinados poderiam fazer, você está <span className="text-accent font-semibold">impedindo o crescimento deles e o seu</span>. Aprenda a soltar as rédeas com controle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CAPÍTULO 7 - continuação  */}
            <div className="page p-4 md:p-8 pattern-grid">
                <div className="h-full flex flex-col">
                    {/*  Exercise  */}
                    <div className="bg-white rounded-xl p-6 border-2 border-accent mb-6">
                        <h4 className="font-display text-lg font-bold text-primary mb-4 flex items-center gap-2">
                            <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                            A Pergunta de Ouro
                        </h4>
                        <div className="bg-surface rounded-lg p-4">
                            <p className="text-dark text-lg mb-3">
                                Daqui a um ano, onde você quer que sua loja esteja?
                            </p>
                            <p className="text-muted text-sm mb-4">Escreva 3 grandes objetivos.</p>
                            <div className="space-y-2 mb-4">
                                <div className="h-10 border-2 border-dashed border-border rounded"></div>
                                <div className="h-10 border-2 border-dashed border-border rounded"></div>
                                <div className="h-10 border-2 border-dashed border-border rounded"></div>
                            </div>
                            <p className="text-sm text-accent font-medium">Agora, defina o que você vai fazer na próxima segunda-feira para chegar lá.</p>
                        </div>
                    </div>

                    {/*  Real example  */}
                    <div className="bg-white rounded-xl p-6 border border-border shadow-sm mb-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-display font-semibold text-primary mb-2">Exemplo Realista</h4>
                                <p className="text-sm text-muted leading-relaxed mb-3">
                                    Em uma rede híbrida (varejo/atacado), um gestor que aplicou o ciclo de 90 dias conseguiu reduzir as faltas da equipe em 40% e bater a meta de lucro por 3 meses seguidos.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                                        <span className="text-xs text-green-600">FALTAS</span>
                                        <p className="text-lg font-bold text-green-700">-40%</p>
                                    </div>
                                    <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                                        <span className="text-xs text-green-600">META DE LUCRO</span>
                                        <p className="text-lg font-bold text-green-700">3 meses</p>
                                    </div>
                                    <div className="bg-accent/10 border border-accent rounded-lg px-4 py-2">
                                        <span className="text-xs text-accent">PROMOÇÃO</span>
                                        <p className="text-sm font-bold text-primary">Gerente Regional</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Checklist  */}
                    <div className="bg-white rounded-xl p-5 border border-border shadow-sm">
                        <h4 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">
                            <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 11l3 3L22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                            Checklist Prático
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="checklist-item text-sm text-dark">Cronograma de reuniões estratégicas para o próximo trimestre.</div>
                            <div className="checklist-item text-sm text-dark">Plano de sucessão: quem pode assumir meu lugar?</div>
                            <div className="checklist-item text-sm text-dark">Autoavaliação: o que não farei mais?</div>
                            <div className="checklist-item text-sm text-dark">Celebração oficial dos resultados com a equipe.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CONCLUSÃO  */}
            <div className="page">
                <div className="h-full gradient-primary relative overflow-hidden">
                    <div className="absolute inset-0 pattern-dots"></div>

                    <svg className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-5" viewBox="0 0 400 400">
                        <circle cx="200" cy="200" r="180" fill="white" />
                    </svg>

                    <div className="relative z-10 h-full flex flex-col p-8">
                        {/*  Header  */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">Conclusão</h2>
                            <p className="text-blue-200">Sua jornada começa agora</p>
                        </div>

                        {/*  Content  */}
                        <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto">
                            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
                                <p className="text-lg text-white leading-relaxed">
                                    Este e-book forneceu um roteiro claro para a transição de uma gestão operacional para uma <span className="text-accent font-semibold">gestão estratégica</span> no varejo e atacado.
                                </p>
                            </div>

                            {/*  Journey summary  */}
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
                                <div className="bg-white/10 rounded-lg p-3 text-center">
                                    <svg className="w-6 h-6 text-accent mx-auto mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 8v8M8 12h8" />
                                    </svg>
                                    <span className="text-xs text-blue-200">Diagnosticar</span>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3 text-center">
                                    <svg className="w-6 h-6 text-accent mx-auto mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="4" y1="9" x2="20" y2="9" />
                                        <line x1="4" y1="15" x2="20" y2="15" />
                                    </svg>
                                    <span className="text-xs text-blue-200">Alinhar</span>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3 text-center">
                                    <svg className="w-6 h-6 text-accent mx-auto mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                    <span className="text-xs text-blue-200">Conquistar</span>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3 text-center">
                                    <svg className="w-6 h-6 text-accent mx-auto mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    <span className="text-xs text-blue-200">Engajar</span>
                                </div>
                                <div className="bg-white/10 rounded-lg p-3 text-center">
                                    <svg className="w-6 h-6 text-accent mx-auto mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="12" y1="1" x2="12" y2="23" />
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                    <span className="text-xs text-blue-200">Dominar</span>
                                </div>
                            </div>

                            <div className="bg-accent rounded-xl p-6 text-white text-center mb-6">
                                <p className="text-lg leading-relaxed">
                                    Lembre-se que a gestão estratégica é um <span className="font-bold">hábito contínuo</span>. Aplique os rituais de gestão, delegue com controle e continue buscando o crescimento.
                                </p>
                            </div>

                            <p className="text-xl text-white text-center leading-relaxed">
                                O sucesso da sua unidade e o avanço da sua carreira estão em suas mãos. <span className="text-accent font-bold">Comece hoje!</span>
                            </p>
                        </div>

                        {/*  Footer with logo  */}
                        <div className="text-center">
                            <div className="bg-white rounded-lg p-2 inline-block shadow-lg mb-2">
                                <LogoAvil />
                            </div>
                            <p className="text-blue-200 text-sm">Transformando gestão em resultados</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}
