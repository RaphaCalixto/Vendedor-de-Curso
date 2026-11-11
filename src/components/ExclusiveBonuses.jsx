import React from 'react';
import { Gift, ShieldCheck, Calculator, Snowflake, FileText, Check, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { courseData } from '../data/courseData';

export default function ExclusiveBonuses() {
  return (
    <section id="bonus" className="py-16 md:py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with User's Exact Copy */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/30 border border-red-500/40 text-xs font-black text-red-400 uppercase tracking-wider animate-pulse">
            <Gift className="w-4 h-4 text-red-400" />
            <span>ATENÇÃO! OFERTA ESPECIAL</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Você Recebe <span className="text-neon-yellow">4 SUPER BRINDES GRÁTIS</span>
          </h2>
          
          <p className="text-base sm:text-xl font-bold text-amber-300">
            Você leva todos, mas NÃO PAGA NADA a mais por isso!
          </p>
          
          <p className="text-slate-300 text-sm sm:text-base">
            Bônus exclusivos desenvolvidos para acelerar seu crescimento e faturamento na profissão!
          </p>
        </div>

        {/* 4 Bonuses Cards Grid with RGB borders and Real Images from user */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courseData.bonuses.map((bonus) => (
            <div key={bonus.id} className="rgb-card-wrapper shadow-2xl flex flex-col">
              <div className="bg-slate-950 rounded-[22px] p-6 sm:p-8 flex-1 flex flex-col justify-between relative overflow-hidden">
                
                {/* Free Badge */}
                <div className="absolute top-5 right-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">
                  100% GRÁTIS
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5">
                    {/* Image Preview */}
                    <div className="w-24 h-32 sm:w-28 sm:h-36 rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 shrink-0 p-1">
                      <img
                        src={bonus.image}
                        alt={bonus.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="text-center sm:text-left">
                      <span className="text-xs font-mono font-black text-amber-400 uppercase tracking-widest block mb-1">
                        {bonus.badge}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                        {bonus.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal mt-2">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-slate-500 line-through">De R$ {bonus.originalPrice}</span>
                    <span className="text-emerald-400 font-extrabold text-sm">Por: R$ 0,00</span>
                  </div>
                  <span className="flex items-center gap-1 text-slate-300 font-semibold">
                    <Check className="w-4 h-4 text-emerald-400" /> Incluso no Pacote
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Total Valuation Stacking Box */}
        <div className="mt-14 max-w-3xl mx-auto rounded-3xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-500/20 border-2 border-amber-400/60 p-6 sm:p-8 text-center shadow-2xl pulse-glow-amber">
          <div className="flex items-center justify-center gap-2 text-amber-400 mb-2">
            <Sparkles className="w-6 h-6" />
            <span className="text-sm font-black uppercase tracking-widest">Economia Real</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
            Economize Mais de <span className="text-neon-yellow">R$ 358,00</span> em Materiais Complementares
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Garantindo sua vaga agora na Formação Completa por apenas R$ 99,97, você leva todos os 4 Super Brindes sem nenhum custo adicional.
          </p>
          <a
            href="https://pay.hotmart.com/Y102262705B?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg shadow-2xl btn-shimmer group uppercase tracking-tight"
          >
            <Zap className="w-5 h-5 fill-slate-950" />
            <span>QUERO GARANTIR TODOS OS 4 BRINDES GRÁTIS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
