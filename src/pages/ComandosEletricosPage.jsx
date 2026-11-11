import React from 'react';
import { 
  Zap, 
  Flame, 
  Award, 
  ShieldCheck, 
  Infinity as InfinityIcon, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Lock, 
  BookOpen, 
  Snowflake, 
  MessageCircle, 
  TrendingUp, 
  Cpu, 
  Settings, 
  Activity, 
  Droplets, 
  Factory, 
  Sliders, 
  Lightbulb, 
  RotateCw, 
  Play, 
  Check, 
  FileText
} from 'lucide-react';

export default function ComandosEletricosPage() {
  const HOTMART_URL = "https://pay.hotmart.com/T107811636X?checkoutMode=10";
  const WHATSAPP_URL = "https://wa.me/message/XOKXI55F57RPB1";

  const courseTopics = [
    {
      num: "01",
      title: "Partida Direta de Motores",
      icon: Play,
      desc: "Montagem, dimensionamento de contatores, relés térmicos, disjuntor-motor e botoeiras com diagramas de comando e força."
    },
    {
      num: "02",
      title: "Partida Direta com Reversão",
      icon: RotateCw,
      desc: "Intertravamento elétrico e mecânico seguro para inversão de giro de motores trifásicos em guinchos, esteiras e portões."
    },
    {
      num: "03",
      title: "Partida Estrela-Triângulo ⭐🔺",
      icon: Activity,
      desc: "Redução de pico de corrente de partida na rede através de temporizadores e contatores principais e auxiliares."
    },
    {
      num: "04",
      title: "Parametrização de Inversores de Frequência",
      icon: Cpu,
      desc: "Instalação, programação de rampas de aceleração/desaceleração, potenciômetro externo e controle de velocidade avançado."
    },
    {
      num: "05",
      title: "Acionamento Manual e Automático de Bombas",
      icon: Droplets,
      desc: "Comandos com boias de nível, pressostatos, relé falta de fase e alternância de bombas para condomínios e indústrias."
    },
    {
      num: "06",
      title: "Sistemas de Iluminação Externa",
      icon: Lightbulb,
      desc: "Automatização de grandes circuitos de iluminação com relés fotoelétricos, contatores de potência e timers digitais."
    },
    {
      num: "07",
      title: "Comandos para Ar-Condicionado Central",
      icon: Sliders,
      desc: "Sistemas de climatização de grande porte, Chillers, Self-Contained, Fan Coils e proteção de compressores trifásicos."
    },
    {
      num: "08",
      title: "Comandos para Câmaras Frias & Refrigeração",
      icon: Snowflake,
      desc: "Controladores digitais de temperatura, ciclos de degelo (elétrico e a gás quente), pressostatos de alta/baixa e válvulas solenoide."
    }
  ];

  const equipmentList = [
    { name: "Motores Elétricos Trifásicos & Monofásicos", icon: Settings, desc: "Controle total de partida, proteção e inversão de giro" },
    { name: "Bombas d'Água & Pressurizadores", icon: Droplets, desc: "Automação predial, recalque e poços artesianos" },
    { name: "Compressores de Refrigeração Comercial", icon: Snowflake, desc: "Proteção térmica, pressostatos e partida assistida" },
    { name: "Equipamentos Industriais & Esteiras", icon: Factory, desc: "Painéis de máquinas, prensas e linhas de montagem" },
    { name: "Sistemas de Ar Central (HVAC-R)", icon: Sliders, desc: "Chillers, Roof Tops e centrais de água gelada" },
    { name: "Câmaras Frigoríficas & Balcões", icon: Snowflake, desc: "Quadros de comando para congelamento e resfriamento" }
  ];

  const galleryImages = [
    { src: "/img/comandos_eletricos/06ad4479-0817-4807-bc6c-0694b4837cd0.jpg", title: "Painéis de Comandos Práticos" },
    { src: "/img/comandos_eletricos/0a0e7f9a-8880-4b68-8cff-5f5c24d72dd0.jpg", title: "Montagem Passo a Passo" },
    { src: "/img/comandos_eletricos/155577de-a720-4b2e-8d76-83afbcdb6c43.jpg", title: "Esquemas Elétricos Simplificados" },
    { src: "/img/comandos_eletricos/15cd5a56-34e9-4b31-ba22-d04b5efd8453.jpg", title: "Instalações no Campo de Batalha" },
    { src: "/img/comandos_eletricos/3b05c1f7-0217-4034-a150-50a5249696f7.jpg", title: "Comandos para Refrigeração" },
    { src: "/img/comandos_eletricos/59a55e9f-8c33-4e4d-abdf-c31a330f5b29.jpg", title: "Parametrização de Inversores" }
  ];

  return (
    <div className="bg-[#07090e] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Urgency Ribbon */}
      <div className="bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 py-2 px-4 text-center font-black text-xs sm:text-sm tracking-wide shadow-lg uppercase flex items-center justify-center gap-2">
        <Flame className="w-4 h-4 fill-slate-950 animate-bounce" />
        <span>CURSO COMPLETO POR APENAS 12X DE R$ 15,51 • MAIS BARATO QUE UM X-BURGUER! 🍔</span>
        <Flame className="w-4 h-4 fill-slate-950 animate-bounce" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
        {/* Glow backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs sm:text-sm font-black text-amber-300 shadow-xl shadow-amber-500/10">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
              <span>DO ABSOLUTO ZERO ÀS TÉCNICAS PROFISSIONAIS</span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              CURSO COMPLETO DE <br />
              <span className="text-neon-yellow underline decoration-amber-500 decoration-wavy decoration-from-font">
                COMANDOS ELÉTRICOS INDUSTRIAIS ⚡
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              Aqui você aprende de <strong>VERDADE</strong> a montar, testar e parametrizar quadros elétricos de motores, bombas, refrigeração comercial e indústrias com foco em serviço que dá dinheiro.
            </p>

            {/* Price Box Callout */}
            <div className="inline-block p-6 rounded-3xl bg-slate-950 border-2 border-amber-400 shadow-2xl pulse-glow-amber max-w-md mx-auto">
              <span className="text-xs sm:text-sm text-slate-300 font-bold block mb-1 uppercase tracking-wider">
                PROMOÇÃO ESPECIAL HOJE
              </span>
              <div className="text-4xl sm:text-5xl font-black text-neon-yellow font-mono tracking-tight my-1">
                12x de R$ 15,51
              </div>
              <span className="text-xs text-emerald-400 font-black block mt-2">
                🍔 Sim, mais barato que um lanche por mês! • Acesso Vitalício
              </span>
            </div>
          </div>

          {/* Featured Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="rgb-card-wrapper shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-3 text-center">
                <img
                  src="/img/comandos_eletricos/06ad4479-0817-4807-bc6c-0694b4837cd0.jpg"
                  alt="Painel de Comandos Elétricos"
                  className="w-full aspect-[4/3] object-cover rounded-xl border border-slate-800"
                />
                <span className="text-xs font-bold text-slate-200 mt-2 block">Aulas Práticas no Painel</span>
              </div>
            </div>

            <div className="rgb-card-wrapper shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-3 text-center">
                <img
                  src="/img/comandos_eletricos/ce0a0f0e-669d-46d5-a241-9537155339cd.jpg"
                  alt="Esquemas e Montagem"
                  className="w-full aspect-[4/3] object-cover rounded-xl border border-slate-800"
                />
                <span className="text-xs font-bold text-slate-200 mt-2 block">Esquemas 100% Simplificados</span>
              </div>
            </div>

            <div className="rgb-card-wrapper shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-3 text-center">
                <img
                  src="/img/comandos_eletricos/eaa6adf3-4904-4e7c-bca8-417e732412f1.jpg"
                  alt="Componentes e Inversores"
                  className="w-full aspect-[4/3] object-cover rounded-xl border border-slate-800"
                />
                <span className="text-xs font-bold text-slate-200 mt-2 block">Inversores & Automação</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center max-w-md mx-auto space-y-4">
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-8 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg flex items-center justify-center gap-3 btn-shimmer group uppercase tracking-tight shadow-2xl"
            >
              <Zap className="w-6 h-6 fill-slate-950 group-hover:scale-110 transition-transform" />
              <span>QUERO GARANTIR MINHA VAGA POR 12X DE R$ 15,51</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Compra Segura Hotmart</span>
              <span className="flex items-center gap-1"><InfinityIcon className="w-4 h-4 text-amber-400" /> Acesso Vitalício</span>
              <span className="flex items-center gap-1"><Award className="w-4 h-4 text-blue-400" /> Certificado Incluso</span>
            </div>
          </div>

        </div>
      </section>

      {/* What You Will Receive */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              PACOTE COMPLETO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              O Que Você Vai <span className="text-neon-yellow">Receber</span>:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <div className="rgb-card-wrapper shadow-xl flex flex-col">
              <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                    <Play className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    +100 Videoaulas Práticas
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Com explicações passo a passo, gravadas direto nos quadros de comando, começando do absoluto ZERO até o nível avançado.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-800 text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-4 h-4" /> 100% Online e Prático
                </div>
              </div>
            </div>

            <div className="rgb-card-wrapper shadow-xl flex flex-col">
              <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Super Apostila 230+ Págs
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Material técnico profissional ricamente colorido e detalhado com explicações teóricas e aplicações industriais.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-800 text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-4 h-4" /> Download em PDF Imediato
                </div>
              </div>
            </div>

            <div className="rgb-card-wrapper shadow-xl flex flex-col">
              <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    +50 Esquemas Elétricos
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Diagramas prontos e simplificados para você imprimir ou levar no celular para consultar na hora do serviço no cliente.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-800 text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-4 h-4" /> Acervo Técnico Exclusivo
                </div>
              </div>
            </div>

            <div className="rgb-card-wrapper shadow-xl flex flex-col">
              <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Certificado de Capacitação
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Certificado oficial válido em todo o Brasil para enriquecer seu currículo e comprovar sua qualificação profissional.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-800 text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <Check className="w-4 h-4" /> Válido Nacionalmente
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8 Course Topics Modules */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              GRADE CURRICULAR COMPLETA
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              O Que Você Vai <span className="text-neon-yellow">Aprender na Prática</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Conteúdo 100% voltado para a realidade das indústrias, comércios e climatização.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {courseTopics.map((topic, index) => {
              const IconComp = topic.icon;
              return (
                <div key={index} className="rgb-card-wrapper shadow-xl flex flex-col">
                  <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                          MÓDULO #{topic.num}
                        </span>
                        <IconComp className="w-5 h-5 text-amber-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {topic.desc}
                      </p>
                    </div>
                    <div className="pt-3 mt-4 border-t border-slate-800 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-4 h-4" /> Módulo Prático
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Control & Actuation Applications */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              CAMPO DE ATUAÇÃO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Aprenda a <span className="text-neon-yellow">Acionar & Controlar</span>:
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Com o domínio dessas tecnologias, você estará apto a atender qualquer tipo de cliente ou empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {equipmentList.map((eq, i) => {
              const IconComp = eq.icon;
              return (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-start gap-4 hover:border-amber-500/40 transition">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{eq.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{eq.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Visual Gallery / Photos of Work in the field */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              FOTOS DO TREINAMENTO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              A Realidade dos Quadros de Comando
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group hover:border-amber-500/50 transition">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final Offer Box */}
      <section id="oferta" className="py-16 md:py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rgb-card-wrapper shadow-2xl">
            <div className="bg-slate-950 rounded-[22px] p-6 sm:p-12 text-center relative overflow-hidden">
              
              <div className="inline-block bg-red-600 text-white font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider mb-4 animate-bounce">
                OFERTA POR TEMPO LIMITADO
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
                CURSO COMPLETO DE COMANDOS ELÉTRICOS INDUSTRIAIS
              </h2>

              <p className="text-sm sm:text-base font-bold text-amber-300 mb-6">
                "Quer se qualificar e alavancar sua carreira como Eletricista Profissional?"
              </p>

              <div className="p-6 rounded-3xl bg-slate-900 border-2 border-amber-400/80 max-w-sm mx-auto mb-8 shadow-2xl">
                <span className="text-xs text-slate-400 block font-medium">Por apenas</span>
                <div className="text-4xl sm:text-5xl font-black text-neon-yellow font-mono my-2">
                  12x de R$ 15,51
                </div>
                <span className="text-xs text-emerald-400 font-bold block">
                  🍔 Mais barato que um lanche por mês!
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Acesso Vitalício • Super Apostila 230+ Págs • 50+ Esquemas
                </span>
              </div>

              <div className="max-w-md mx-auto space-y-3">
                <a
                  href={HOTMART_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 px-8 rounded-2xl btn-guru text-slate-950 font-black text-lg sm:text-xl flex items-center justify-center gap-3 btn-shimmer group uppercase tracking-tight shadow-2xl"
                >
                  <Zap className="w-6 h-6 fill-slate-950 group-hover:scale-110 transition-transform" />
                  <span>QUERO ME INSCREVER AGORA</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 font-bold text-sm flex items-center justify-center gap-2 transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Falar no WhatsApp: (21) 97305-5315 (Não ligue)</span>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 7 Dias de Garantia Incondicional</span>
                <span className="flex items-center gap-1"><Lock className="w-4 h-4 text-amber-400" /> Compra 100% Segura</span>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
