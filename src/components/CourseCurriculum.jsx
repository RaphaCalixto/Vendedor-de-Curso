import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Cpu, 
  Sliders, 
  Compass, 
  ShieldAlert,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { courseData } from '../data/courseData';

export default function CourseCurriculum() {
  const [openModule, setOpenModule] = useState(1);

  const toggleModule = (id) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section id="conteudo" className="py-16 md:py-24 relative bg-slate-950/40">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            Grade Completa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O Que Você Vai Aprender Passo a Passo
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Conteúdo prático e direto ao ponto, estruturado em 8 módulos que cobrem do básico à gestão de obras profissionais.
          </p>
        </div>

        {/* Modules Accordion / Card List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Modules (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {courseData.modules.map((module) => {
              const isOpen = openModule === module.id;
              return (
                <div
                  key={module.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-slate-900/90 border-amber-500/50 shadow-xl shadow-amber-500/10' 
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-black font-mono px-3 py-1.5 rounded-xl border ${
                        isOpen 
                          ? 'bg-amber-400 text-slate-950 border-amber-300' 
                          : 'bg-slate-800 text-amber-400 border-slate-700'
                      }`}>
                        MÓDULO {module.number}
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 mb-0.5 block">
                          {module.tag}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                          {module.title}
                        </h3>
                      </div>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                      isOpen 
                        ? 'bg-amber-500/20 text-amber-400 border-amber-500/30 rotate-180' 
                        : 'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 text-left space-y-4 animate-fadeIn">
                      <p className="text-sm text-slate-300">
                        {module.description}
                      </p>
                      
                      <div className="space-y-2.5 pt-1">
                        <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                          Tópicos abordados nesta etapa:
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                          {module.topics.map((topic, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Visual Summary & Quick Action Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Resumo da Formação</h4>
                  <p className="text-xs text-slate-400">Tudo incluso no pacote completo</p>
                </div>
              </div>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm">
                  <span className="text-slate-300">Módulos Completos</span>
                  <span className="font-bold text-amber-400">8 Módulos Práticos</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm">
                  <span className="text-slate-300">Carga Horária</span>
                  <span className="font-bold text-amber-400">60 Horas Certificadas</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm">
                  <span className="text-slate-300">Formato</span>
                  <span className="font-bold text-amber-400">PDF + Vídeo Aulas + Suporte</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm">
                  <span className="text-slate-300">Validade do Acesso</span>
                  <span className="font-bold text-emerald-400">Vitalício (Para Sempre)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center mb-6">
                <p className="text-xs text-slate-300 mb-1">Valor com 75% OFF liberado hoje:</p>
                <div className="text-3xl font-black text-amber-400 font-mono">
                  R$ 49,90 <span className="text-xs text-slate-400 font-normal">à vista</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">ou 6x de R$ 9,15 no cartão</p>
              </div>

              <a
                href="#oferta"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base transition shadow-lg shadow-amber-400/20 btn-shimmer"
              >
                <Zap className="w-5 h-5 fill-slate-950" />
                <span>QUERO ACESSAR TODOS OS MÓDULOS</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
