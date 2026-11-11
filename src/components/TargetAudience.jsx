import React from 'react';
import { UserCheck, Wrench, TrendingUp, Snowflake, CheckCircle2, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export default function TargetAudience() {
  const points = [
    {
      icon: Zap,
      title: "Instalações Elétricas Prediais & Residenciais",
      description: "Aprenda a fazer do zero quadros de distribuição, ligação de disjuntores, DR, DPS, tomadas, iluminação simples e intermediária, e sistemas de aterramento seguros.",
      color: "from-amber-500/20 to-amber-500/5",
      borderColor: "border-amber-500/30",
      accent: "text-amber-400"
    },
    {
      icon: Snowflake,
      title: "Refrigeração e Ar-Condicionado",
      description: "Instale, conserte e faça manutenção preventiva e corretiva em sistemas Split, Inverter, refrigeradores comerciais, balcões e câmaras frias.",
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "border-blue-500/30",
      accent: "text-blue-400"
    },
    {
      icon: TrendingUp,
      title: "Profissão com Faturamento Garantido",
      description: "Eletricistas e refrigeristas estão entre os 10 profissionais mais bem pagos do Brasil, com serviços que pagam de R$ 250 a mais de R$ 1.500 por dia.",
      color: "from-emerald-500/20 to-emerald-500/5",
      borderColor: "border-emerald-500/30",
      accent: "text-emerald-400"
    },
    {
      icon: UserCheck,
      title: "Zero Experiência Necessária",
      description: "Não importa sua idade ou profissão atual. O treinamento começa do básico absoluto, com método visual e passo a passo claro e direto.",
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "border-purple-500/30",
      accent: "text-purple-400"
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 space-y-3">
          <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
            MERCADO EM ALTA
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            O Que Você Vai Aprender Neste Curso?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Este é um curso prático, direto ao ponto e totalmente voltado à realidade do mercado. Aprenda a instalar, consertar e faturar alto!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`rgb-card-wrapper shadow-xl flex flex-col`}
              >
                <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${item.accent}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>100% Prático e Aplicável</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real Image of Refrigeração Commercial from user */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-amber-500/40 bg-slate-900/90 p-4 sm:p-6 shadow-2xl flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-950 p-1 shrink-0">
            <img
              src="/img/1-Venha-ser-um-eletricista-da-reffrigeracao-comercial-576x1024.png"
              alt="Eletricista da Refrigeração Comercial"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
              REFRIGERAÇÃO COMERCIAL & RESIDENCIAL
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              A Combinação Mais Lucrativa do Mercado da Construção
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Quando você domina tanto a parte elétrica quanto os sistemas de refrigeração e ar-condicionado, você se torna o profissional mais disputado pelos clientes, podendo cobrar valores muito superiores por cada atendimento.
            </p>
            <div className="pt-2">
              <a
                href="https://pay.hotmart.com/Y102262705B?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-guru text-slate-950 font-black text-sm shadow-lg uppercase"
              >
                <span>Garantir Formação Completa por R$ 99,97</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
