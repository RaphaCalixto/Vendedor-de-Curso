import React from 'react';
import { Play, Star, CheckCircle2, MessageSquareQuote, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { courseData } from '../data/courseData';

export default function VideoTestimonials() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-black text-amber-400 uppercase tracking-wider">
            <MessageSquareQuote className="w-4 h-4 text-amber-400" />
            <span>DEPOIMENTOS DOS ALUNOS</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Veja o Que Estão Falando Sobre o Curso
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Os alunos elogiam a linguagem simples e objetiva. <strong>Nada de teoria complicada.</strong> É aprender hoje e aplicar no dia seguinte faturando com serviços reais!
          </p>
        </div>

        {/* 4 Video Cards Grid with RGB borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {courseData.videoTestimonials.map((item, index) => (
            <div key={item.id} className="rgb-card-wrapper shadow-2xl flex flex-col">
              <div className="bg-slate-950 rounded-[22px] p-5 sm:p-6 flex-1 flex flex-col justify-between">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      DEPOIMENTO REAL #{index + 1}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Embedded Responsive YouTube Video */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 shadow-xl mb-4">
                  <iframe
                    src={item.embedUrl}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>

                {/* Text summary below video */}
                <div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <CheckCircle2 className="w-4 h-4" /> Aluno Verificado
                    </span>
                    <span className="text-slate-400">Resultado Comprovado</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA below videos */}
        <div className="mt-14 text-center">
          <a
            href="https://pay.hotmart.com/Y102262705B?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg shadow-2xl btn-shimmer group uppercase tracking-tight"
          >
            <Zap className="w-5 h-5 fill-slate-950" />
            <span>QUERO TER OS MESMOS RESULTADOS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
