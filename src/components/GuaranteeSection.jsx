import React from 'react';
import { ShieldCheck, RotateCcw, CheckCircle, Lock } from 'lucide-react';

export default function GuaranteeSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-amber-500/40 p-8 sm:p-12 shadow-2xl overflow-hidden">
          
          {/* Subtle gold glow inside */}
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            
            {/* Guarantee Shield Badge Icon */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-amber-500 to-amber-300 p-1 shadow-xl shadow-amber-500/20 animate-float">
                <div className="w-full h-full bg-slate-950 rounded-[22px] flex flex-col items-center justify-center p-2 text-center">
                  <ShieldCheck className="w-10 h-10 text-amber-400 mb-1" />
                  <span className="text-xl font-black text-white leading-none font-mono">7 DIAS</span>
                  <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider">GARANTIA TOTAL</span>
                </div>
              </div>
            </div>

            {/* Text details */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
                RISCO ZERO PARA VOCÊ
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Garantia Incondicional de Satisfação
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Você tem <strong>7 dias completos</strong> para acessar a plataforma, baixar os materiais, conferir as aulas e testar o método. Se por qualquer motivo você achar que o treinamento não superou suas expectativas, basta nos enviar um único e-mail que devolveremos <strong>100% do seu investimento</strong> na mesma hora.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-semibold text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> Sem Letras Miúdas
                </span>
                <span className="flex items-center gap-1.5">
                  <RotateCcw className="w-4 h-4" /> Reembolso Simples
                </span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Lock className="w-4 h-4 text-amber-400" /> Transação Segura
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
