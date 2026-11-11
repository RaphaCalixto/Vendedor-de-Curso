import React from 'react';
import { BookOpen, Zap, CheckCircle2, Download, Layers, Sparkles, ArrowRight } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            MATERIAL COMPLETO E EXCLUSIVO
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Mais de <span className="text-neon-yellow">600 Páginas de Puro Conteúdo</span> Prático
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Nada de teorias chatas que você nunca vai usar em uma obra. Aqui você aprende exatamente o que o mercado precisa.
          </p>
        </div>

        {/* 3 Columns Product Grid with RGB card borders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Apostila 3D Principal */}
          <div className="rgb-card-wrapper shadow-2xl flex flex-col">
            <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-full rounded-xl overflow-hidden border border-amber-500/40 mb-4 bg-slate-900">
                  <img
                    src="/images/slice_apostila_3d.png"
                    alt="Apostila Eletricista Predial e Residencial 3D"
                    className="w-full h-56 sm:h-64 object-contain mx-auto p-2"
                  />
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  GUIA MESTRE
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">
                  Apostila Digital Ilustrada
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Passo a passo com fotos reais de conexões, diagramas de circuitos, dimensionamento de fiação e tabelas da NBR 5410.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Download Imediato em PDF
              </div>
            </div>
          </div>

          {/* Card 2: 600 Páginas Banner & Módulos */}
          <div className="rgb-card-wrapper shadow-2xl flex flex-col">
            <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-full rounded-xl overflow-hidden border border-amber-500/40 mb-4 bg-slate-900">
                  <img
                    src="/images/slice_600paginas.png"
                    alt="600 Páginas de Conteúdo Elétrico"
                    className="w-full h-56 sm:h-64 object-contain mx-auto p-2"
                  />
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  VÍDEO AULAS
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">
                  Aulas Práticas em Vídeo
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Assista na tela do celular ou computador como montar cada tipo de circuito, ligar quadros de disjuntores e testar com multímetro.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Acesso Vitalício 24 Horas
              </div>
            </div>
          </div>

          {/* Card 3: Cartaz Oficial & Certificação */}
          <div className="rgb-card-wrapper shadow-2xl flex flex-col">
            <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-full rounded-xl overflow-hidden border border-amber-500/40 mb-4 bg-slate-900">
                  <img
                    src="/images/slice_poster.png"
                    alt="Eletricista Instalador Cartaz"
                    className="w-full h-56 sm:h-64 object-contain mx-auto p-2"
                  />
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  CERTIFICAÇÃO OFICIAL
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">
                  Certificado de 60 Horas
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Reconhecido em todo o território nacional, ideal para apresentar em construtoras, empresas ou para clientes residenciais.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Sem taxas extras de emissão
              </div>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#oferta"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg shadow-2xl btn-shimmer group uppercase"
          >
            <Zap className="w-5 h-5 fill-slate-950" />
            <span>QUERO TER ACESSO A TODO ESSE MATERIAL</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
