import React from 'react';
import { BookOpen, CheckCircle2, Zap, ArrowRight, ShieldCheck, Sparkles, Layers, FileCheck } from 'lucide-react';
import { courseData } from '../data/courseData';

export default function ManualSection() {
  return (
    <section id="treinamentos" className="py-16 md:py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
      
      {/* Background radial spotlights */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-black text-amber-400 uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>A VERDADEIRA BÍBLIA DO PROFISSIONAL</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            O Manual do Eletricista Instalador & Reparador Profissional
          </h2>
          
          <p className="text-lg sm:text-xl font-bold text-amber-300">
            Super Apostila Técnica de Elétrica Predial e Residencial com Refrigeração e Ar-Condicionado
          </p>
        </div>

        {/* 2 Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: 3D Book Graphic from src/img (6 cols) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="rgb-card-wrapper w-full max-w-lg shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-5 sm:p-7 relative overflow-hidden">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                    SUPER APOSTILA TÉCNICA
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    PDF EM CORES
                  </span>
                </div>

                {/* Real Apostila Image from user */}
                <div className="rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 shadow-xl p-2 group">
                  <img
                    src="/img/4-apostila-do-eletricista-instalador-4-1024x1536.png"
                    alt="Apostila do Eletricista Instalador"
                    className="w-full h-80 sm:h-96 object-contain mx-auto group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-center text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-base font-black text-amber-400 font-mono">+250 Páginas</p>
                    <p className="text-[10px] text-slate-400">Coloridas e Explicativas</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-base font-black text-amber-400 font-mono">+60 Esquemas</p>
                    <p className="text-[10px] text-slate-400">Ligações Simplificadas</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Technical Highlights & Copy (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Esta apostila é considerada a verdadeira <strong>“bíblia do eletricista instalador profissional”</strong>, reunindo de forma simples, prática e direta os principais pontos da <strong>NBR 5410 – Instalações Elétricas de Baixa Tensão (até 1.000V)</strong>.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              Um material completo, prático e direto ao ponto, desenvolvido para quem deseja aprender, executar e consultar serviços elétricos e de refrigeração com total segurança e padrão profissional.
            </p>

            {/* Checklist items */}
            <div className="space-y-3 pt-2 text-left">
              {courseData.manualHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="https://pay.hotmart.com/Y102262705B?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg shadow-2xl btn-shimmer group uppercase tracking-tight"
              >
                <Zap className="w-5 h-5 fill-slate-950" />
                <span>QUERO RECEBER A SUPER APOSTILA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
