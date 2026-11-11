import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Download, Sparkles, QrCode } from 'lucide-react';

export default function CertificateSection() {
  return (
    <section id="certificado" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
              <Award className="w-4 h-4 text-amber-400" />
              <span>COMPROVAÇÃO PROFISSIONAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Certificado Oficial de <br />
              <span className="text-neon-yellow">60 Horas de Capacitação</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Ao concluir o curso, você gera e baixa na hora seu certificado devidamente registrado, com respaldo legal em todo o Brasil (Lei nº 9.394/96). Ideal para apresentar em obras, condomínios e clientes exigentes.
            </p>

            <div className="space-y-3 pt-2 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200"><strong>Validade Nacional:</strong> Válido para atuar como eletricista autônomo ou em empresas.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200"><strong>Sem Custo de Emissão:</strong> Já incluso gratuitamente no valor promocional.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200"><strong>Carteirinha + Certificado:</strong> Comprovação profissional para fechar contratos com segurança.</span>
              </div>
            </div>
          </div>

          {/* Right: Real Certificate Image from user */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div className="rgb-card-wrapper w-full max-w-lg shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-4 sm:p-6 text-center">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="text-xs font-black text-amber-400 font-mono">DIPLOMA OFICIAL RECONHECIDO</span>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    LEI FEDERAL Nº 9.394/96
                  </span>
                </div>

                {/* Real Certificate Image from src/img/Laudo técnico */}
                <div className="rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 mb-4 p-2 group shadow-xl">
                  <img
                    src="/img/laudo_tecnico/Certificados-hvac-2-768x568.png"
                    alt="Certificado Oficial de Capacitação Profissional"
                    className="w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Carteirinha companion preview */}
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/90 p-2 flex items-center gap-3">
                  <img
                    src="/img/laudo_tecnico/Carteirinha-oficial-sem-registro-768x498.png"
                    alt="Carteirinha Profissional"
                    className="w-28 h-auto object-contain rounded"
                  />
                  <div className="text-left">
                    <p className="text-xs font-bold text-white leading-tight">Carteirinha de Qualificação</p>
                    <p className="text-[10px] text-slate-400">Pronta para impressão e uso em atendimentos</p>
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
