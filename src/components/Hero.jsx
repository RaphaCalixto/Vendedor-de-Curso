import React from 'react';
import { 
  Zap, 
  Flame, 
  Award, 
  ShieldCheck, 
  Infinity as InfinityIcon, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Sparkles,
  Lock,
  PlaySquare,
  Snowflake,
  Wrench
} from 'lucide-react';
import { courseData } from '../data/courseData';

export default function Hero({ onOpenCheckout }) {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background Ambience & Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/20 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-24 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* High-tech grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d14_1px,transparent_1px),linear-gradient(to_bottom,#1f293d14_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Urgency Header Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs sm:text-sm font-black text-amber-300 shadow-xl shadow-amber-500/10">
            <Flame className="w-4 h-4 text-red-500 fill-red-500 animate-bounce" />
            <span className="text-white">ATENÇÃO:</span>
            <span className="text-amber-400">COMBINAÇÃO DE DUAS PROFISSÕES QUE MAIS GERAM RENDA NO BRASIL</span>
          </div>
        </div>

        {/* Aggressive Guru Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
            APRENDA A PROFISSÃO QUE <br className="hidden sm:inline" />
            <span className="text-neon-yellow underline decoration-amber-500 decoration-wavy decoration-from-font">
              NUNCA FICA SEM SERVIÇO!
            </span>
          </h1>

          <p className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 max-w-3xl mx-auto">
            Eletricista + Refrigerista: a combinação que mais gera renda no país.
          </p>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Os profissionais das áreas de eletricidade e refrigeração estão entre os <strong>10 mais bem remunerados do Brasil</strong>. O mercado está aquecido e faltam profissionais qualificados para atender a demanda de residências, comércios e indústrias.
          </p>
        </div>

        {/* Main 2-Column Grid with RGB Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: RGB Framed Graphic Mockup (6 cols) with Real Image from src/img */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            <div className="rgb-card-wrapper w-full max-w-lg shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-4 sm:p-6 relative overflow-hidden flex flex-col items-center">
                
                {/* Header of the Card */}
                <div className="w-full flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      FORMAÇÃO COMPLETA 2 EM 1
                    </span>
                  </div>
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                    +350 VIDEOAULAS
                  </span>
                </div>

                {/* Real Image from src/img */}
                <div className="w-full rounded-xl overflow-hidden border border-amber-500/40 relative group bg-slate-900">
                  <img
                    src="/img/ChatGPT-Image-25_07_2026-05_46_40-576x1024.png"
                    alt="Eletricista Instalador e Reparador com Refrigeração e Ar-Condicionado"
                    className="w-full h-80 sm:h-96 object-contain mx-auto p-1 transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-4 text-center">
                    <p className="text-xs font-black text-amber-300 uppercase tracking-wider">
                      ELETRICIDADE PREDIAL + REFRIGERAÇÃO & AR-CONDICIONADO
                    </p>
                  </div>
                </div>

                {/* Live Feature Badges */}
                <div className="w-full grid grid-cols-2 gap-2 mt-4 text-left">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2">
                    <PlaySquare className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">+350 Aulas</p>
                      <p className="text-[10px] text-slate-400">Prática direto no campo</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2">
                    <Snowflake className="w-4 h-4 text-blue-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">Refrigeração</p>
                      <p className="text-[10px] text-slate-400">Instalação & Manutenção</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right: Pitch, Price, and Guru CTA (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Value checklist */}
            <div className="space-y-3 bg-slate-900/80 border border-slate-800/80 p-5 sm:p-6 rounded-3xl backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-black text-white flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                O que você vai dominar no curso:
              </h3>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-200 text-left">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Instalações e Manutenções Elétricas Residenciais e Comerciais</strong> completas do zero.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Instalação, conserto e manutenção de Ar-Condicionado e Refrigeração</strong> (Split, Inverter, Câmaras e Balcões).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Super Apostila Técnica com mais de 250 páginas coloridas</strong> e +60 esquemas práticos.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>4 Super Brindes Exclusivos Grátis</strong> para acelerar seus ganhos.</span>
                </div>
              </div>
            </div>

            {/* Price Box with RGB / Neon Highlight */}
            <div className="relative rounded-3xl bg-slate-950 border-2 border-amber-400/80 p-6 text-center shadow-2xl pulse-glow-amber">
              
              <div className="inline-block bg-red-600 text-white font-black text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2 animate-bounce">
                PROMOÇÃO ESPECIAL HOJE
              </div>

              <div>
                <p className="text-xs text-slate-400 line-through font-mono">De R$ 529,90 por apenas:</p>
                <div className="flex items-baseline justify-center gap-1 my-1">
                  <span className="text-2xl font-bold text-amber-400">R$</span>
                  <span className="text-5xl sm:text-6xl font-black text-neon-yellow font-mono tracking-tight">
                    99,97
                  </span>
                </div>
                <p className="text-xs text-emerald-400 font-bold">
                  ou em até 12x no cartão de crédito • PIX com aprovação imediata
                </p>
              </div>

              {/* Big Guru CTA Button */}
              <a
                href="https://pay.hotmart.com/Y102262705B?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-5 py-4 px-6 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg flex items-center justify-center gap-3 btn-shimmer group uppercase tracking-tight"
              >
                <Zap className="w-6 h-6 fill-slate-950 group-hover:scale-110 transition-transform" />
                <span>QUERO ME INSCREVER POR R$ 99,97</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Badges below button */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-400 font-medium pt-3">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Lock className="w-3.5 h-3.5" /> Compra Segura
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Acesso Imediato
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-blue-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> 7 Dias de Garantia
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
