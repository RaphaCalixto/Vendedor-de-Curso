import React, { useState, useEffect } from 'react';
import { Sparkles, Flame, Clock } from 'lucide-react';

export default function TopBanner() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (num) => String(num).padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-semibold py-2 px-3 text-xs md:text-sm sticky top-0 z-50 shadow-lg border-b border-amber-400/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <span className="inline-flex items-center gap-1 bg-slate-950 text-amber-400 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">
            <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Oferta Especial
          </span>
          <span className="hidden sm:inline font-bold">ÚLTIMAS VAGAS DISPONÍVEIS COM 75% DE DESCONTO!</span>
          <span className="sm:hidden font-bold">Últimas vagas com 75% OFF!</span>
        </div>

        <div className="flex items-center gap-3 mx-auto md:mx-0">
          <div className="flex items-center gap-1.5 bg-slate-950/20 px-2.5 py-0.5 rounded-lg border border-slate-950/20">
            <Clock className="w-3.5 h-3.5 text-slate-950" />
            <span className="font-mono font-bold text-slate-950">
              00:{format(timeLeft.minutes)}:{format(timeLeft.seconds)}
            </span>
          </div>
          <a
            href="#oferta"
            className="bg-slate-950 hover:bg-slate-900 text-amber-400 hover:text-amber-300 text-xs px-3 py-1 rounded-md transition font-bold shadow-sm"
          >
            Aproveitar Agora
          </a>
        </div>
      </div>
    </div>
  );
}
