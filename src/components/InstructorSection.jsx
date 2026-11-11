import React from 'react';
import { Award, Users, Star, ShieldCheck, CheckCircle2, Zap, Snowflake, Wrench } from 'lucide-react';

export default function InstructorSection() {
  return (
    <section id="sobrenos" className="py-16 md:py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-5xl mx-auto">
          <div className="rgb-card-wrapper shadow-2xl">
            <div className="bg-slate-950 rounded-[22px] p-6 sm:p-12 relative overflow-hidden">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
                {/* Left: Instructor Photo "quem eu sou.jpg" (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="w-full rounded-2xl overflow-hidden border-2 border-amber-500/50 p-2 bg-slate-900 shadow-2xl group">
                    <img
                      src="/img/quem_eu_sou.jpg"
                      alt="Quem eu sou - Instrutor Marcelo Guerraz"
                      className="w-full h-auto max-h-[460px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Floating Expertise Badge */}
                  <div className="mt-4 w-full p-3 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-around text-xs">
                    <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                      <Zap className="w-4 h-4 fill-amber-400" /> Eletricista
                    </span>
                    <span className="text-slate-600 font-bold">+</span>
                    <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                      <Snowflake className="w-4 h-4" /> Refrigerista
                    </span>
                  </div>
                </div>

                {/* Right: Bio & Dual Expertise Copy (7 cols) */}
                <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-black text-amber-400 uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    <span>MENTOR & EXPERT EM ELÉTRICA + REFRIGERAÇÃO</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                    Quem Será o Seu Instrutor?
                  </h2>

                  <p className="text-sm sm:text-base font-bold text-amber-400">
                    Especialista em Instalações Elétricas (NBR 5410 & NR-10) e Sistemas de Refrigeração & Climatização Comercial e Residencial
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Com mais de <strong>15 anos de atuação diária no campo</strong>, domina desde a montagem e balanceamento de quadros elétricos complexos (QDC) até o diagnóstico e manutenção avançada de sistemas de ar-condicionado (Split, Inverter), refrigeradores comerciais, balcões e câmaras frias.
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Ele uniu as <strong>duas profissões mais requisitadas e lucrativas do Brasil</strong> em um único treinamento 100% prático, ensinando o método exato que qualquer pessoa pode aplicar para executar serviços completos e faturar de R$ 3.000 a mais de R$ 8.000 por mês.
                  </p>

                  {/* Trust Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <p className="text-lg font-black text-amber-400 font-mono">+14.800</p>
                      <p className="text-[10px] text-slate-400">Alunos Capacitados</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <p className="text-lg font-black text-blue-400 font-mono">+15 Anos</p>
                      <p className="text-[10px] text-slate-400">Vivência no Campo</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
                      <p className="text-lg font-black text-emerald-400 font-mono">Dupla Formação</p>
                      <p className="text-[10px] text-slate-400">Elétrica + Refrigeração</p>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
