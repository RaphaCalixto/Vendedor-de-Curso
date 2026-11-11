import React from 'react';
import { 
  Zap, 
  Check, 
  ShieldCheck, 
  Lock, 
  CreditCard, 
  QrCode, 
  CheckCircle2, 
  Star, 
  Flame,
  ArrowRight,
  Sparkles,
  Infinity as InfinityIcon,
  PlaySquare,
  BookOpen
} from 'lucide-react';
import { courseData } from '../data/courseData';

export default function PricingSection() {
  const HOTMART_URL = "https://pay.hotmart.com/Y102262705B?checkoutMode=10";

  return (
    <section id="oferta" className="py-16 md:py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-800">
      
      {/* Background glow spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-amber-500/20 via-orange-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600/30 to-amber-500/30 border border-amber-500/40 text-xs sm:text-sm font-black text-amber-300">
            <Flame className="w-4 h-4 text-red-500 fill-red-500 animate-bounce" />
            <span>PROMOÇÃO ESPECIAL LIBERADA HOJE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            CURSO DE ELETRICISTA INSTALADOR E REPARADOR <br />
            <span className="text-neon-yellow">COM REFRIGERAÇÃO E AR-CONDICIONADO</span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Acesso vitalício imediato a mais de 350 videoaulas práticas, Super Apostila Técnica com mais de 250 páginas e aos 4 Super Brindes exclusivos.
          </p>
        </div>

        {/* Big Featured Pricing Box with RGB Glowing Border */}
        <div className="max-w-4xl mx-auto">
          <div className="rgb-card-wrapper shadow-2xl">
            <div className="bg-slate-950 rounded-[22px] p-6 sm:p-10 relative overflow-hidden">
              
              {/* Top Banner Tag */}
              <div className="w-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 font-black text-xs sm:text-sm py-2 px-4 rounded-xl text-center uppercase tracking-wider mb-8 shadow-lg animate-pulse">
                🔥 VALOR PROMOCIONAL COM MAIS DE 80% DE DESCONTO LIBERADO
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: What's included (7 cols) */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                      FORMAÇÃO COMPLETA 2 EM 1
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 leading-snug">
                      Eletricista Instalador & Refrigerista
                    </h3>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Mais de 350 Videoaulas Práticas</strong> gravadas direto do campo</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Super Apostila Técnica (+250 páginas coloridas)</strong></span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>+60 Esquemas Elétricos Prontos</strong> e Simplificados</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Certificado Reconhecido</strong> incluso sem taxas extras</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Acesso Vitalício:</strong> Estude no seu próprio ritmo</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-amber-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong>4 Super Brindes Exclusivos</strong> 100% Grátis</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                    <p className="text-xs text-slate-300">
                      <strong className="text-white">Garantia Incondicional de 7 Dias:</strong> Teste sem nenhum risco. Devolvemos 100% se não gostar.
                    </p>
                  </div>
                </div>

                {/* Right: Price & CTA (5 cols) */}
                <div className="lg:col-span-5 rounded-2xl bg-slate-900 border-2 border-amber-400/60 p-6 sm:p-8 text-center flex flex-col justify-between space-y-6 shadow-2xl pulse-glow-amber">
                  
                  {/* Real Image of Combo Mockup */}
                  <div className="rounded-xl overflow-hidden border border-amber-500/40 bg-slate-950 p-2">
                    <img
                      src="/img/4-Super-Apostilas-o-manual-do-eletricista-3-768x1152.png"
                      alt="Combo Super Apostilas e Formação"
                      className="w-full h-44 object-contain mx-auto"
                    />
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 line-through block font-mono">
                      DE R$ 529,90
                    </span>
                    <span className="text-xs text-slate-300 font-bold uppercase tracking-wider">
                      POR APENAS:
                    </span>
                    <div className="flex items-baseline justify-center gap-1 my-1">
                      <span className="text-2xl font-bold text-amber-400">R$</span>
                      <span className="text-5xl sm:text-6xl font-black text-neon-yellow font-mono tracking-tight">
                        99,97
                      </span>
                    </div>
                    <span className="text-xs text-emerald-400 font-bold block">
                      ou em até 12x no cartão • PIX com aprovação imediata
                    </span>
                  </div>

                  {/* Mega Button Direct to Hotmart */}
                  <a
                    href={HOTMART_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg flex items-center justify-center gap-2 btn-shimmer group uppercase tracking-tight shadow-2xl"
                  >
                    <Zap className="w-6 h-6 fill-slate-950 group-hover:scale-110 transition-transform" />
                    <span>QUERO MINHA VAGA POR R$ 99,97</span>
                  </a>

                  <div className="space-y-1.5 text-[11px] text-slate-400">
                    <div className="flex items-center justify-center gap-2 text-emerald-400 font-semibold">
                      <Lock className="w-3.5 h-3.5" /> Pagamento 100% Criptografado & Seguro
                    </div>
                    <p className="text-slate-400">Liberação imediata no seu e-mail e WhatsApp</p>
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
