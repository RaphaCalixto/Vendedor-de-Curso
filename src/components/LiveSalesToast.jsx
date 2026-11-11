import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle2, Shield } from 'lucide-react';

const salesHistory = [
  { name: 'Ricardo S.', city: 'São Paulo - SP', time: 'há 2 minutos', plan: 'Curso Completo + 4 Bônus' },
  { name: 'Carlos M.', city: 'Belo Horizonte - MG', time: 'há 4 minutos', plan: 'Acesso Vitalício' },
  { name: 'Fernando P.', city: 'Curitiba - PR', time: 'há 1 minuto', plan: 'Inscrição Promocional' },
  { name: 'Eduardo G.', city: 'Salvador - BA', time: 'há 6 minutos', plan: 'Curso + Certificado 60h' },
  { name: 'Marcio T.', city: 'Goiânia - GO', time: 'há 3 minutos', plan: 'Combo Master' },
  { name: 'José Lucas', city: 'Campinas - SP', time: 'há 5 minutos', plan: 'Curso de Eletricista' },
];

export default function LiveSalesToast() {
  const [currentSale, setCurrentSale] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSale = salesHistory[Math.floor(Math.random() * salesHistory.length)];
      setCurrentSale(randomSale);
      setVisible(true);

      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 4500);

      return () => clearTimeout(hideTimer);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  if (!visible || !currentSale) return null;

  return (
    <div className="fixed bottom-24 sm:bottom-6 left-4 z-50 animate-toast max-w-xs sm:max-w-sm pointer-events-none">
      <div className="rounded-2xl bg-slate-950/95 border border-amber-500/50 p-3.5 shadow-2xl shadow-black/80 backdrop-blur-xl flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 p-0.5 shrink-0 flex items-center justify-center shadow-lg shadow-amber-500/30">
          <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
            <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
          </div>
        </div>

        <div className="flex-1 text-left">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold text-white leading-tight">
              {currentSale.name} <span className="text-[10px] text-slate-400 font-normal">({currentSale.city})</span>
            </p>
            <span className="text-[9px] text-emerald-400 font-mono font-bold flex items-center gap-0.5">
              <CheckCircle2 className="w-2.5 h-2.5" /> Compra Aprovada
            </span>
          </div>
          <p className="text-[11px] text-amber-300 font-medium leading-tight mt-0.5">
            Acabou de adquirir o {currentSale.plan}
          </p>
          <span className="text-[9px] text-slate-500 font-mono">
            {currentSale.time}
          </span>
        </div>
      </div>
    </div>
  );
}
