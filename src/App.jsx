import React, { useState, useEffect } from 'react';
import { generatePDF } from './utils/pdfExport';
import { useAuth } from './hooks/useAuth';
import Login from './components/Login';

import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Target,
  Menu,
  X,
  Info,
  Trophy,
  Scissors,
  ListTodo,
  Download,
  Printer,
  LogOut,
  ShieldAlert,
  Settings
} from 'lucide-react';
import EbookReader from './components/EbookReader';
import UserProfile from './components/UserProfile';
import AdminPanel from './components/AdminPanel';
import ProfileModal from './components/ProfileModal';
import { LogoAvil } from './components/LogoAvil';


const EBOOK_DATA = [
  {
    id: 0,
    title: "Introdução",
    icon: <BookOpen className="w-6 h-6" />,
    content: "Este ebook foi desenhado para o gestor que conhece a operação, mas precisa dominar a estratégia. O objetivo é simples: tirar-te do 'modo bombeiro' e colocar-te no controlo dos resultados.",
    sections: [
      {
        type: "text",
        title: "O Propósito",
        body: "Utilizar os princípios de aceleração de liderança adaptados à realidade das lojas e centros de distribuição para garantir que os seus primeiros 90 dias sejam o trampolim para o sucesso."
      }
    ]
  },
  {
    id: 1,
    title: "Capítulo 1: O Pulo do Gato",
    subtitle: "De Operacional a Estratégico",
    icon: <Target className="w-6 h-6" />,
    content: "Parar de 'apagar fogos' é o primeiro passo para ser um líder que gera lucro. O gerente que passa o dia a repor mercadoria não tem tempo para pensar em como vender mais.",
    checklists: [
      "Identificar as 3 tarefas que mais ocupam tempo.",
      "Delegar pelo menos uma tarefa operacional esta semana.",
      "Reservar 1 hora por dia para análise dos números no BI."
    ],
    exercise: "Verifique se os 5 produtos que mais vendem estão com o preço correto e estoque disponível agora.",
    example: "Um gerente que treinava o seu estoquista para conferir cabides ganhou 4 horas diárias para analisar falta de grade, aumentando o giro em 15%."
  },
  {
    id: 2,
    title: "Capítulo 2: Raio-X da Operação",
    subtitle: "Diagnóstico Ágil",
    icon: <Target className="w-6 h-6" />,
    content: "Para liderar com estratégia, você precisa ver o que os outros ignoram. A loja 'fala' através dos números e das gôndolas.",
    checklists: [
      "Analisar a Curva ABC (o que paga as contas).",
      "Identificar pontos de Ruptura, Perda e Estoque Alto.",
      "Observar o Clima e Execução da equipe sob pressão."
    ],
    exercise: "'O Teste do Carrinho': Tente fazer uma compra completa na sua loja e anote os 3 maiores obstáculos.",
    example: "Um gerente de Atacarejo percebeu que o autoatendimento estava vazio enquanto a fila do açougue crescia. Ajustou a reposição e as vendas subiram 12%."
  },
  {
    id: 3,
    title: "Capítulo 3: Alinhando a Rota",
    subtitle: "Expectativas e Metas",
    icon: <Target className="w-6 h-6" />,
    content: "Não assuma que sabe o que a direção quer. Alinhar a rota é garantir que o seu esforço será reconhecido.",
    checklists: [
      "Reunião de 15 min com o superior para validar prioridades.",
      "Tornar o quadro de metas visível para toda a equipe.",
      "Realizar feedbacks individuais de 5 minutos."
    ],
    exercise: "Pergunte ao seu superior quais os 3 indicadores que definem o seu sucesso nos próximos 90 dias.",
    example: "Loja de Materiais de Construção: O gerente focava em volume (cimento), mas o dono queria margem (acabamentos). O alinhamento subiu o lucro em 8%."
  },
  {
    id: 4,
    title: "Capítulo 4: Vitórias Rápidas",
    subtitle: "Ganhando a Confiança",
    icon: <CheckCircle2 className="w-6 h-6" />,
    content: "Ninguém segue um líder que não mostra resultados. Nos primeiros 30 dias, você precisa de 'Early Wins' (vitórias antecipadas).",
    checklists: [
      "Resolver um problema de estrutura, limpeza e organização.",
      "Ajustar processos burocráticos no recebimento de mercadoria",
      "Implementar uma melhoria sugerida pela base."
    ],
    exercise: "Identifique uma 'fruta baixa' (problema fácil de resolver) e execute a solução em menos de 48 horas.",
    example: "Lubrificar todos os carrinhos de compras num domingo mudou a percepção de eficiência da gerência perante clientes e equipe."
  },
  {
    id: 5,
    title: "Capítulo 5: O Time dos Sonhos",
    subtitle: "Seleção e Engajamento",
    icon: <Target className="w-6 h-6" />,
    content: "No varejo, você gere pessoas que movem produtos. Se resolve tudo sozinho, você é um 'super-operacional', não um líder.",
    checklists: [
      "Identificar os 'multiplicadores' da equipe.",
      "Mapear necessidades de treinamento urgente.",
      "Delegar uma tarefa crítica e monitorar."
    ],
    exercise: "Mapeie os talentos da sua equipe: quem é o melhor em organização? Quem é o melhor em vendas? Use essas forças.",
    example: "Transferir um conferente detalhista mas lento para a Auditoria de Inventário reduziu erros de estoque a quase zero."
  },
  {
    id: 6,
    title: "Capítulo 6: Estratégia na Prática",
    subtitle: "Margem, Giro e Cliente",
    icon: <Target className="w-6 h-6" />,
    content: "Estratégia resume-se a: Entrada, Giro e Margem. Se dominares isto, dominas o mercado.",
    checklists: [
      "Revisar produtos 'micos' (sem giro há 30 dias).",
      "Analisar o Ticket Médio da última semana.",
      "Verificar exposição de produtos de alta margem."
    ],
    exercise: "Implemente uma ação de Cross-selling: coloque um item de alta margem ao lado de um item essencial de alto giro.",
    example: "Atacado de Bebidas: Colocar snacks e gelo na saída do corredor de refrigerantes subiu o lucro da secção em 20%."
  },
  {
    id: 7,
    title: "Capítulo 7: O Ciclo de 90 Dias",
    subtitle: "Sustentando o Crescimento",
    icon: <Target className="w-6 h-6" />,
    content: "Chegar ao fim dos 90 dias é apenas o começo. Gestão estratégica é um hábito, não um evento.",
    checklists: [
      "Estabelecer rituais diários, semanais e mensais.",
      "Criar um plano de sucessão interno.",
      "Realizar autoavaliação do primeiro trimestre."
    ],
    exercise: "Defina onde quer que a sua unidade esteja daqui a um ano e escreva a primeira ação que fará na próxima segunda-feira.",
    example: "Um gestor que aplicou o método reduziu o turnover em 40% e foi promovido a Gerente Regional por provar ter um método replicável."
  }
];

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn("Erro ao carregar o localStorage:", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn("Erro ao salvar no localStorage:", error);
    }
  };

  return [storedValue, setValue];
}



const PrintHeader = () => (
  <div className="hidden print:flex flex-col items-center justify-center mb-10 w-full print-header-container">
    <img src="/logo.jpeg" alt="AVIL" className="h-20 object-contain mb-4" />
    <div className="h-1 w-full bg-avil-blue rounded-full"></div>
  </div>
);

const PrintFooter = () => (
  <div className="hidden print:block print-footer-container">
    <p className="text-slate-500 text-[10px] font-bold">
      © 2026 AVIL - Todos os direitos reservados. Este documento é para uso exclusivo e confidencial.
    </p>
  </div>
);

const CompleteActionPlan = ({ completedTasks }) => {
  // Agrupa os capítulos em pares (2 por página)
  const pagesData = EBOOK_DATA.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []);

  return (
    <div id="action-plan-content" className="hidden print:block complete-action-plan-container w-full max-w-6xl mx-auto print-content bg-slate-50">
      {pagesData.map((pageChapters, pageIdx) => (
        <div key={pageIdx} className="page min-h-[297mm] bg-white pt-12 pb-20 px-8 mx-auto mb-8 relative border-b-4 border-slate-100 flex flex-col">

          <div className="flex flex-col items-center justify-center mb-10">
            <img src="/logo.jpeg" alt="AVIL" className="h-16 object-contain mb-4" />
            <div className="h-1 w-full max-w-2xl bg-slate-100 rounded-full"></div>
          </div>

          <div className="flex-1 flex flex-col justify-start gap-12 w-full max-w-5xl mx-auto">
            {pageChapters.map((chapter, chapterOffset) => {
              const idx = pageIdx * 2 + chapterOffset;


              return (
                <div key={idx} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
                  {/* COLUNA ESQUERDA: Textos */}
                  <div className="lg:col-span-5 flex flex-col xl:pt-2">
                    <div className="mb-5 text-left">
                      <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-avil-orange-100 text-avil-orange-dark rounded-full font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-4 border border-avil-orange-100 shadow-sm">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-avil-orange"></span>
                        {idx === 0 ? "Começar Jornada" : `Módulo ${idx}`}
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-extrabold text-avil-blue-dark mb-3 leading-tight tracking-tight">
                        {chapter.title}
                      </h2>
                      {chapter.subtitle && (
                        <h3 className="text-lg text-slate-500 font-medium tracking-wide">
                          {chapter.subtitle}
                        </h3>
                      )}
                    </div>

                    <div className="prose prose-slate max-w-none text-left">
                      <p className="text-slate-600 leading-relaxed font-normal text-base md:text-sm">
                        {chapter.content}
                      </p>
                    </div>
                  </div>

                  {/* COLUNA DIREITA: Checklists e Prática */}
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    {chapter.checklists && (
                      <div className="bg-white rounded-[20px] shadow-sm border border-slate-200 p-5 break-inside-avoid">
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <div className="flex items-center gap-2">
                            <div className="bg-green-100 p-2 rounded-xl text-green-600 shadow-sm">
                              <CheckCircle2 className="w-5 h-5" strokeWidth={2.5} />
                            </div>
                            <h4 className="font-bold text-lg text-avil-blue-dark">Plano de Ação</h4>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {chapter.checklists.map((task, cIdx) => {
                            const isChecked = !!completedTasks[`${chapter.id}-${cIdx}`];
                            return (
                              <label
                                key={cIdx}
                                className={`flex items-start gap-3 p-3 rounded-xl border-2 ${isChecked ? 'bg-slate-50 border-green-200' : 'bg-white border-slate-100'}`}
                              >
                                <div className={`mt-0.5 flex-shrink-0 h-5 w-5 rounded-md border-2 flex items-center justify-center ${isChecked ? 'bg-green-500 border-green-500' : 'border-slate-300'}`}>
                                  {isChecked && <CheckCircle2 size={12} strokeWidth={3} className="text-white" />}
                                </div>
                                <span className={`text-sm font-medium leading-relaxed ${isChecked ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                                  {task}
                                </span>
                              </label>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      {chapter.exercise && (
                        <div className="bg-gradient-to-br from-avil-blue to-avil-blue-light text-white rounded-[20px] p-5 relative overflow-hidden flex flex-col justify-center break-inside-avoid">
                          <div className="flex items-center gap-2 mb-3 z-10">
                            <div className="bg-white/20 p-2 rounded-lg">
                              <Target size={18} className="text-white" />
                            </div>
                            <h4 className="font-bold text-sm tracking-wide text-white">Prática</h4>
                          </div>
                          <p className="text-blue-50/90 leading-relaxed font-medium text-sm md:text-xs z-10 space-pre-wrap">
                            {chapter.exercise}
                          </p>
                        </div>
                      )}

                      {chapter.example && (
                        <div className="bg-white border text-slate-800 border-slate-200 rounded-[20px] p-5 relative overflow-hidden flex flex-col justify-center break-inside-avoid">
                          <div className="absolute top-0 left-0 w-1.5 h-full bg-avil-orange" />
                          <div className="flex items-center gap-2 mb-3 pl-2">
                            <div className="bg-avil-orange-100 p-2 rounded-lg text-avil-orange-dark">
                              <Info size={18} />
                            </div>
                            <h4 className="font-bold text-sm text-avil-blue-dark">Insight</h4>
                          </div>
                          <p className="text-slate-600 italic leading-relaxed text-sm md:text-xs pl-2 space-pre-wrap">
                            "{chapter.example}"
                          </p>
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const auth = useAuth() || {};
  const { user, loading, isAuthorized, isAdmin } = auth;
  const [activeMode, setActiveMode] = useLocalStorage('avil_mode', 'reading'); // Changed key and default value
  const [completedTasks, setCompletedTasks] = useLocalStorage('avil_tasks', {}); // Changed key
  const [currentPage, setCurrentPage] = useLocalStorage('avil_page', 0); // Changed key
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false); // Added state
  const [pdfStatus, setPdfStatus] = useState(""); // Added state
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-avil-orange rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  const chapter = EBOOK_DATA[currentPage];

  const toggleTask = (chapterId, taskIndex) => {
    const key = `${chapterId}-${taskIndex}`;
    setCompletedTasks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const progress = (currentPage / (EBOOK_DATA.length - 1)) * 100;
  const allTasksInChapterCompleted = chapter.checklists
    ? chapter.checklists.every((_, i) => completedTasks[`${chapter.id}-${i}`])
    : false;

  // Lógica de exportação robusta via Canvas
  const handleExportPDF = async () => {
    setIsGeneratingPDF(true);
    let targetId = activeMode === 'reading' ? '.ebook-reader-container' : '#action-plan-content';
    let filename = activeMode === 'reading' ? 'Resultados reais em 90 dias' : 'Plano-de-Acao-Completo';

    // Forçar exibição temporária do Plano de Ação para o html2canvas tirar print
    if (activeMode === 'task') {
      const el = document.getElementById('action-plan-content');
      if (el) {
        el.classList.remove('hidden', 'print:block');
        el.classList.add('block');
      }
    }

    try {
      await generatePDF(targetId, filename, setPdfStatus);
    } catch (e) {
      console.error(e);
      alert("Houve um erro ao gerar o PDF. Verifique o console.");
    } finally {
      setIsGeneratingPDF(false);

      // Restaurar classes ocultas se for modo task
      if (activeMode === 'task') {
        const el = document.getElementById('action-plan-content');
        if (el) {
          el.classList.remove('block');
          el.classList.add('hidden', 'print:block');
        }
      }
    }
  };

  const renderSidebar = () => (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        className={`fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-avil-blue-100/30">
          <h2 className="font-bold text-xl text-avil-blue-dark">Trilha</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2.5 bg-white hover:bg-slate-100 text-slate-600 rounded-full transition-colors focus:ring-2 focus:ring-avil-orange outline-none shadow-sm"
              aria-label="Fechar menu"
            >
              <X size={20} />
            </button>
            <UserProfile onOpenAdminPanel={() => setIsAdminPanelOpen(true)} onOpenProfile={() => setIsProfileModalOpen(true)} />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {EBOOK_DATA.map((item, idx) => {
            const isActive = currentPage === idx;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(idx);
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full text-left p-3.5 rounded-xl flex items-center gap-4 transition-all duration-300 group ${isActive
                  ? 'bg-avil-blue text-white shadow-md'
                  : 'hover:bg-avil-blue-100/50 text-slate-600 border border-transparent'
                  }`}
              >
                <span className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-avil-blue/10 group-hover:text-avil-blue'}`}>
                  {React.cloneElement(item.icon, { size: 20 })}
                </span>

                <div className="flex flex-col flex-1 min-w-0">
                  <span className={`text-base font-semibold truncate ${isActive ? 'text-white' : 'text-slate-700'}`}>
                    {item.title}
                  </span>
                  {item.subtitle && (
                    <span className={`text-xs truncate mt-0.5 ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );

  if (!isAuthorized && !isAdmin) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-avil-orange-100 rounded-full flex items-center justify-center mb-8 animate-pulse text-avil-orange-dark shadow-xl shadow-avil-orange/20 border-4 border-white text-3xl font-black">
          <ShieldAlert size={56} strokeWidth={2.5} />
        </div>
        <h1 className="text-4xl font-black text-avil-blue-dark mb-4 tracking-tighter uppercase">Acesso Pendente</h1>
        <p className="text-slate-600 max-w-md mx-auto leading-relaxed text-lg mb-10 font-medium">
          Sua conta para <span className="text-avil-blue font-bold">{user?.email}</span> foi criada, mas ainda não foi autorizada por um administrador da AVIL.
        </p>
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-[32px] mb-12 w-full max-w-sm shadow-inner relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-avil-orange opacity-50" />
          <h2 className="font-black text-avil-blue-dark mb-3 uppercase text-xs tracking-widest">Próximo Passo</h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Fale com o gestor responsável para liberar seu acesso no sistema. Você receberá acesso completo assim que for autorizado.
          </p>
        </div>
        <UserProfile onOpenAdminPanel={() => setIsAdminPanelOpen(true)} onOpenProfile={() => setIsProfileModalOpen(true)} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col print:min-h-0 bg-slate-50 text-slate-900 font-sans selection:bg-avil-orange-100 selection:text-avil-orange-dark ${activeMode === 'reading' ? 'mode-reading' : 'mode-task'}`}>
      <PrintHeader />

      <header className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur-xl border-b border-slate-200 shadow-sm flex justify-center print:hidden">
        <div className="w-full max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 scale-90 sm:scale-100 origin-left">
            <LogoAvil />
          </div>

          <div className="flex bg-slate-100 p-1 rounded-xl shadow-inner border border-slate-200">
            <button
              onClick={() => setActiveMode('reading')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${activeMode === 'reading'
                ? 'bg-white text-avil-blue-dark shadow-sm ring-1 ring-black/5'
                : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              <BookOpen size={16} />
              <span className="hidden sm:inline">E-book</span>
            </button>
            <button
              onClick={() => setActiveMode('task')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${activeMode === 'task'
                ? 'bg-white text-avil-orange shadow-sm ring-1 ring-black/5'
                : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              <ListTodo size={16} />
              <span className="hidden sm:inline">Plano de Ação</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleExportPDF}
              disabled={isGeneratingPDF}
              className={`p-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 group outline-none focus:ring-2 focus:ring-slate-300
                ${isGeneratingPDF
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-white border text-slate-800 border-slate-200 hover:bg-slate-50 hover:shadow-sm active:scale-95'}`}
              aria-label={activeMode === 'reading' ? "Baixar E-book (PDF)" : "Baixar Plano de Ação (PDF)"}
            >
              {isGeneratingPDF ? (
                <div className="w-5 h-5 border-2 border-slate-300 border-t-avil-orange rounded-full animate-spin"></div>
              ) : (
                <Printer size={20} className="text-slate-500 group-hover:text-avil-blue-dark transition-colors" />
              )}
              <span className="hidden sm:block text-sm font-semibold text-slate-600 group-hover:text-avil-blue-dark transition-colors">
                {isGeneratingPDF ? (pdfStatus || 'Gerando...') : (activeMode === 'reading' ? 'Baixar E-book' : 'Baixar Plano')}
              </span>
            </button>

            {activeMode === 'task' && (
              <>
                <div className="hidden md:flex flex-col items-end gap-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Progresso
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-avil-blue-light to-avil-blue transition-all duration-700 ease-out relative"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-avil-blue-dark w-9 text-right">{Math.round(progress)}%</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="p-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all duration-200 focus:ring-2 focus:ring-avil-orange outline-none shadow-sm active:scale-95 flex items-center gap-2"
                  aria-label="Menu"
                >
                  <Menu size={20} className="text-avil-blue-dark" />
                  <span className="font-bold text-sm text-avil-blue-dark hidden sm:block">Conteúdo</span>
                </button>
              </>
            )}
            <UserProfile onOpenAdminPanel={() => setIsAdminPanelOpen(true)} onOpenProfile={() => setIsProfileModalOpen(true)} />
          </div>
        </div>
      </header >

      {activeMode === 'reading' ? (
        <main className="w-full flex-1">
          <EbookReader />
        </main>
      ) : (
        <>
          {renderSidebar()}

          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 pb-32 md:pb-24 flex items-center justify-center min-h-[calc(100vh-140px)]">
            <div key={currentPage} className="animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both w-full">

              <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">

                {/* COLUNA ESQUERDA: Textos */}
                <div className="lg:col-span-5 flex flex-col xl:pt-2">
                  <div className="mb-5 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-avil-orange-100 text-avil-orange-dark rounded-full font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-4 border border-avil-orange-100 shadow-sm">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-avil-orange animate-pulse"></span>
                      {currentPage === 0 ? "Começar Jornada" : `Módulo ${currentPage}`}
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-avil-blue-dark mb-3 leading-tight tracking-tight">
                      {chapter.title}
                    </h2>
                    {chapter.subtitle && (
                      <h3 className="text-lg md:text-xl text-slate-500 font-medium tracking-wide">
                        {chapter.subtitle}
                      </h3>
                    )}
                  </div>

                  <div className="prose prose-slate max-w-none mb-8 lg:mb-0 text-center lg:text-left">
                    <p className="text-slate-600 leading-relaxed font-normal text-base md:text-lg">
                      {chapter.content}
                    </p>
                  </div>
                </div>

                {/* COLUNA DIREITA: Checklists e Prática */}
                <div className="lg:col-span-7 flex flex-col gap-4">

                  {chapter.checklists && (
                    <div className="bg-white rounded-[20px] shadow-sm border border-slate-200 p-5 md:p-6 hover:shadow-md transition-shadow duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="bg-green-100 p-2 rounded-xl text-green-600 shadow-sm">
                            <CheckCircle2 className="w-5 h-5" strokeWidth={2.5} />
                          </div>
                          <h4 className="font-bold text-lg md:text-xl text-avil-blue-dark">Plano de Ação</h4>
                        </div>

                        {allTasksInChapterCompleted && (
                          <span className="flex items-center animate-in fade-in zoom-in duration-300 gap-1.5 text-xs font-bold text-green-700 bg-green-100 px-3 py-1.5 rounded-full border border-green-200 shadow-sm">
                            <Trophy size={14} /> Completado!
                          </span>
                        )}
                      </div>

                      <div className="space-y-3">
                        {chapter.checklists.map((task, idx) => {
                          const isChecked = !!completedTasks[`${chapter.id}-${idx}`];
                          return (
                            <label
                              key={idx}
                              className={`group flex items-start gap-3 p-3 md:p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${isChecked
                                ? 'bg-slate-50 border-green-200 hover:border-green-300'
                                : 'bg-white border-slate-100 hover:border-avil-blue hover:bg-avil-blue-100/30'
                                }`}
                            >
                              <div className="relative mt-0.5 flex-shrink-0">
                                <input
                                  type="checkbox"
                                  className="peer sr-only"
                                  checked={isChecked}
                                  onChange={() => toggleTask(chapter.id, idx)}
                                />
                                <div className={`h-6 w-6 rounded-md border-2 transition-all duration-300 flex items-center justify-center ${isChecked
                                  ? 'bg-green-500 border-green-500 scale-105'
                                  : 'border-slate-300 group-hover:border-avil-blue'
                                  }`}>
                                  <CheckCircle2 size={14} strokeWidth={3} className={`text-white transition-all transform duration-300 ${isChecked ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />
                                </div>
                              </div>

                              <span className={`text-sm md:text-base font-medium leading-relaxed transition-colors duration-300 ${isChecked
                                ? 'text-slate-400 line-through'
                                : 'text-slate-700'
                                }`}>
                                {task}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    {chapter.exercise && (
                      <div className="bg-gradient-to-br from-avil-blue to-avil-blue-light text-white rounded-[20px] p-5 shadow-lg shadow-avil-blue/20 transform sm:hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-center">
                        <div className="absolute -right-4 -top-4 opacity-10 pointer-events-none">
                          <Scissors size={80} />
                        </div>
                        <div className="flex items-center gap-2 mb-3 relative z-10">
                          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-md">
                            <Target size={20} className="text-white" />
                          </div>
                          <h4 className="font-bold text-base tracking-wide text-white">Prática</h4>
                        </div>
                        <p className="text-blue-50/90 leading-relaxed font-medium text-sm lg:text-base relative z-10">
                          {chapter.exercise}
                        </p>
                      </div>
                    )}

                    {chapter.example && (
                      <div className="bg-white border text-slate-800 border-slate-200 rounded-[20px] p-5 shadow-sm sm:hover:shadow-md transition-all duration-300 relative overflow-hidden group flex flex-col justify-center">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-avil-orange transition-all duration-300 group-hover:w-2.5" />
                        <div className="flex items-center gap-2 mb-3 pl-2">
                          <div className="bg-avil-orange-100 p-2 rounded-lg text-avil-orange-dark group-hover:bg-avil-orange/20 transition-colors duration-300 shadow-sm">
                            <Info size={20} />
                          </div>
                          <h4 className="font-bold text-base text-avil-blue-dark">Insight</h4>
                        </div>
                        <p className="text-slate-600 italic leading-relaxed text-sm lg:text-base pl-2">
                          "{chapter.example}"
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              </div>

            </div>
          </main >

          {/* Navegação Inferior Otimizada para Mobile */}
          < footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200 p-4 pb-6 z-30 shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.1)]" >
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-1 lg:px-4">
              <button
                onClick={() => {
                  setCurrentPage(Math.max(0, currentPage - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                disabled={currentPage === 0}
                className={`flex items-center justify-center p-3.5 sm:px-6 sm:py-3.5 rounded-2xl font-bold transition-all duration-200 ${currentPage === 0
                  ? 'text-slate-300 cursor-not-allowed bg-slate-50'
                  : 'text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:text-avil-blue-dark active:scale-95 shadow-sm'
                  }`}
                aria-label="Capítulo Anterior"
              >
                <ChevronLeft size={22} className="sm:mr-1" />
                <span className="hidden sm:block">Anterior</span>
              </button>

              <div className="flex items-center gap-1 sm:gap-1.5 flex-1 justify-center overflow-x-auto px-2">
                {EBOOK_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentPage(idx);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="focus:outline-none p-1 sm:p-2 group outline-none min-w-[20px] flex justify-center"
                    aria-label={`Ir para o capítulo ${idx}`}
                  >
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${idx === currentPage
                        ? 'w-8 sm:w-10 bg-avil-orange'
                        : idx < currentPage
                          ? 'w-2 sm:w-3 bg-avil-blue hover:w-4'
                          : 'w-2 sm:w-2 bg-slate-200 hover:bg-slate-300 hover:w-4'
                        }`}
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setCurrentPage(Math.min(EBOOK_DATA.length - 1, currentPage + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                disabled={currentPage === EBOOK_DATA.length - 1}
                className={`flex items-center justify-center p-3.5 sm:px-8 sm:py-3.5 rounded-2xl font-bold transition-all duration-300 active:scale-95 ${currentPage === EBOOK_DATA.length - 1
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-avil-orange text-white shadow-lg shadow-avil-orange/30 hover:shadow-xl hover:shadow-avil-orange/40 hover:-translate-y-0.5 border border-avil-orange-light'
                  }`}
                aria-label="Próximo Capítulo"
              >
                <span className="hidden sm:block mr-2 uppercase tracking-wide text-sm font-black">
                  {currentPage === 0 ? "Começar" : "Seguinte"}
                </span>
                <ChevronRight size={22} />
              </button>
            </div>
          </footer>
        </>
      )
      }
      <CompleteActionPlan completedTasks={completedTasks} />
      <AdminPanel isOpen={isAdminPanelOpen} onClose={() => setIsAdminPanelOpen(false)} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
      <PrintFooter />
    </div >
  );
}
