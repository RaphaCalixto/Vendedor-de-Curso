import React, { useState, useEffect } from 'react';
import { Zap, MessageCircle, X, ArrowRight } from 'lucide-react';
import { courseData } from '../data/courseData';

export default function FloatingCta() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(true);

  const HOTMART_URL = "https://pay.hotmart.com/Y102262705B?checkoutMode=10";
  const WHATSAPP_URL = "https://wa.me/5521973055315?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Curso%20de%20Eletricista%20Instalador%20e%20Refrigera%C3%A7%C3%A3o";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Floating Button with Popup */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
        {showChatPopup && (
          <div className="bg-slate-900 border border-emerald-500/40 p-3 rounded-2xl shadow-2xl max-w-xs text-xs relative animate-bounce text-left hidden sm:block">
            <button
              onClick={() => setShowChatPopup(false)}
              className="absolute -top-2 -right-2 bg-slate-800 rounded-full p-0.5 text-slate-400 hover:text-white border border-slate-700"
              aria-label="Fechar mensagem"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="font-bold text-emerald-400 flex items-center gap-1 mb-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Suporte Online (21) 97305-5315
            </p>
            <p className="text-slate-300">
              Tem alguma dúvida sobre o curso? Clique aqui para falar direto no WhatsApp!
            </p>
          </div>
        )}

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-200 group"
          aria-label="Falar no WhatsApp (21) 97305-5315"
        >
          <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950" />
        </a>
      </div>

      {/* Sticky Bottom Bar on Scroll */}
      {showStickyBar && (
        <div className="fixed bottom-0 inset-x-0 bg-slate-950/98 border-t border-amber-500/40 p-3 sm:py-3.5 z-40 backdrop-blur-2xl shadow-2xl animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
            
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-white leading-tight">
                  Eletricista Instalador + Refrigeração e Ar-Condicionado
                </p>
                <p className="text-[11px] text-amber-400 font-semibold">
                  +350 Videoaulas + Super Apostila + 4 Brindes Grátis
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full sm:w-auto gap-4">
              <div className="text-left sm:text-right">
                <span className="text-[10px] text-slate-400 line-through block leading-none font-mono">
                  De R$ {courseData.pricing.originalPrice}
                </span>
                <span className="text-lg sm:text-xl font-black text-amber-400 font-mono leading-tight">
                  R$ {courseData.pricing.promotionalPrice}
                </span>
                <span className="text-[10px] text-emerald-400 font-bold block sm:inline sm:ml-1">
                  (80% OFF)
                </span>
              </div>

              <a
                href={HOTMART_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl btn-guru text-slate-950 font-black text-xs sm:text-sm shadow-lg hover:scale-105 active:scale-95 transition uppercase tracking-tight"
              >
                <span>QUERO MINHA VAGA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
