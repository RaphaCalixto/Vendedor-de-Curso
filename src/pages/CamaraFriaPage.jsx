import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Snowflake, 
  Wrench, 
  Award, 
  Building, 
  FileText, 
  TrendingDown, 
  Flame, 
  AlertTriangle, 
  MapPin, 
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';

export default function CamaraFriaPage() {
  const WHATSAPP_URL = "https://wa.me/5521973055315?text=Ol%C3%A1%2C%20preciso%20de%20assist%C3%AAncia%20t%C3%A9cnica%20emergencial%20para%20C%C3%A2mara%20Fria%20%2F%20Refrigera%C3%A7%C3%A3o";
  const PHONE_DISPLAY = "(21) 97305-5315";

  const regions = [
    "Barra da Tijuca",
    "Recreio dos Bandeirantes",
    "Jacarepaguá",
    "Zona Sul",
    "Centro do Rio",
    "Benfica",
    "Méier",
    "Madureira / Irajá",
    "Realengo / Bangu",
    "Penha Circular",
    "Grajaú / Andaraí"
  ];

  const servicesList = [
    { title: "Câmaras Frigoríficas & Frias", desc: "Resfriados e congelados, troca de compressores, carga de gás, degelo e comandos." },
    { title: "Chillers & Ar Condicionado Central", desc: "Manutenção preventiva e corretiva, fluxo de água gelada e automação." },
    { title: "Balcões Frigoríficos & Vitrines", desc: "Regulagem de temperatura, troca de motores e eliminação de vazamentos." },
    { title: "Ilhas de Congelados & Máquinas de Gelo", desc: "Conserto rápido para não perder mercadorias e alimentos perecíveis." },
  ];

  return (
    <div className="bg-[#07090e] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 24h Emergency Banner Bar */}
      <div className="bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 font-black py-2.5 px-4 text-xs sm:text-sm text-center shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-slate-950 animate-ping" />
          <AlertTriangle className="w-4 h-4 text-slate-950" />
          <span>PLANTÃO EMERGENCIAL 24 HORAS NO RIO DE JANEIRO — ATENDIMENTO IMEDIATO: {PHONE_DISPLAY}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
        {/* Glow ambient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/20 via-amber-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs sm:text-sm font-black text-amber-300 shadow-xl shadow-amber-500/10">
              <Clock className="w-4 h-4 text-red-500 animate-spin" />
              <span>ASSISTÊNCIA TÉCNICA ESPECIALIZADA 24 HORAS POR DIA</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Problemas com sua <span className="text-neon-yellow">Câmara Fria</span>, Chillers ou Ar Condicionado Central?
            </h1>

            <p className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400">
              Não se preocupe! Nossa equipe técnica está pronta para resolver qualquer EMERGÊNCIA!
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              Oferecemos serviços de conserto imediato para Ar Condicionado, Câmaras Frias e Equipamentos da Refrigeração comercial e industrial. Equipe disponível <strong>24 horas por dia, 7 dias por semana</strong>, para que suas operações não sejam interrompidas por falhas elétricas ou mecânicas!
            </p>
          </div>

          {/* Trust Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto mb-10">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
              <p className="text-xs font-bold text-white">Empresa Legalizada</p>
              <p className="text-[10px] text-slate-400">Total Segurança</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
              <Building className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <p className="text-xs font-bold text-white">CNPJ Ativo</p>
              <p className="text-[10px] font-mono text-slate-400">40.447.953/0001-17</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
              <MapPin className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <p className="text-xs font-bold text-white">Endereço Comercial</p>
              <p className="text-[10px] text-slate-400">Sede Própria no RJ</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
              <FileText className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
              <p className="text-xs font-bold text-white">Nota Fiscal (NFe)</p>
              <p className="text-[10px] text-slate-400">Garantia Formal</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center col-span-2 sm:col-span-1">
              <Award className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <p className="text-xs font-bold text-white">Registro CRT-RJ</p>
              <p className="text-[10px] text-slate-400">Técnicos Credenciados</p>
            </div>
          </div>

          {/* YouTube Video Section */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="rgb-card-wrapper shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-4 sm:p-6 text-center">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      ASSISTA O VÍDEO — VEJA NOSSA EQUIPE EM AÇÃO NO CAMPO
                    </span>
                  </div>
                  <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                    PLANTÃO 24H
                  </span>
                </div>

                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 shadow-2xl">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/eY6qoITy4Ko"
                    title="Vídeo Atendimento Técnico Câmara Fria"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Fast Emergency CTA Button */}
          <div className="text-center max-w-md mx-auto space-y-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-8 rounded-2xl btn-green-guru text-slate-950 font-black text-base sm:text-lg flex items-center justify-center gap-3 btn-shimmer group uppercase tracking-tight shadow-2xl"
            >
              <MessageCircle className="w-6 h-6 fill-slate-950 group-hover:scale-110 transition-transform" />
              <span>SOLICITAR ATENDIMENTO 24H NO WHATSAPP</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs text-slate-400 font-semibold">
              Orçamento 100% Grátis • Ligação ou WhatsApp: <span className="text-emerald-400 font-bold">{PHONE_DISPLAY}</span>
            </p>
          </div>

        </div>
      </section>

      {/* Services Grid with Real Images */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              REFRIGERAÇÃO COMERCIAL & INDUSTRIAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Especialistas em <span className="text-neon-yellow">Frio Alimentar & Climatização</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Atendemos supermercados, açougues, restaurantes, padarias, indústrias, hotéis e comércios em geral.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {servicesList.map((srv, idx) => (
              <div key={idx} className="rgb-card-wrapper shadow-xl flex flex-col">
                <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-4">
                      <Snowflake className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" /> Atendimento Imediato
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Real Work Gallery from camara fria folder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900 p-2 shadow-xl">
              <img
                src="/img/camara_fria/IMG-20240904-WA0011-768x578.jpg"
                alt="Manutenção de Equipamentos Frigoríficos"
                className="w-full h-56 object-cover rounded-xl"
              />
              <p className="text-xs text-slate-300 font-bold text-center mt-2">Manutenção e Montagem Técnica</p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900 p-2 shadow-xl">
              <img
                src="/img/camara_fria/Manutencao-e-operacao-de-Chiller-.jpg"
                alt="Manutenção e Operação de Chiller"
                className="w-full h-56 object-cover rounded-xl"
              />
              <p className="text-xs text-slate-300 font-bold text-center mt-2">Operação & Reparo de Chillers</p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900 p-2 shadow-xl">
              <img
                src="/img/camara_fria/IMG-20251212-WA0012-1152x1536.jpg"
                alt="Serviço Especializado de Campo"
                className="w-full h-56 object-cover rounded-xl"
              />
              <p className="text-xs text-slate-300 font-bold text-center mt-2">Equipe Técnica Credenciada CRT-RJ</p>
            </div>
          </div>

        </div>
      </section>

      {/* Energy Economy & Vigilância Sanitária */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                <TrendingDown className="w-4 h-4" />
                <span>REDUÇÃO DE CUSTOS E PROTEÇÃO LEGAL</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Economia de Energia de <span className="text-emerald-400">Até 33%</span> em Sua Câmara Fria
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                A manutenção preventiva de câmara fria garante que o equipamento trabalhe dentro da temperatura exata de armazenamento, evitando sobrecarga no compressor e alto consumo elétrico.
              </p>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left space-y-2">
                <p className="text-sm font-bold text-amber-400 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  Evite Notificações, Multas e Interdições da Vigilância Sanitária
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pagando muito POUCO em manutenção preventiva regular, você garante total conformidade com as normas sanitárias e evita prejuízos incalculáveis com perda de alimentos.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg shadow-2xl btn-shimmer group uppercase"
                >
                  <Zap className="w-5 h-5 fill-slate-950" />
                  <span>SOLICITAR ANÁLISE DE EFICIÊNCIA ENERGÉTICA</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Card: Super Bônus - Revisão Elétrica Grátis */}
            <div className="lg:col-span-5">
              <div className="rgb-card-wrapper shadow-2xl">
                <div className="bg-slate-950 rounded-[22px] p-6 sm:p-8 text-center relative overflow-hidden">
                  
                  <div className="inline-block bg-gradient-to-r from-red-600 to-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4 animate-pulse">
                    SUPER BRINDE EXCLUSIVO
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                    Revisão Elétrica <span className="text-neon-yellow">100% GRÁTIS</span>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    Contratando um plano de manutenção preventiva para <strong>CÂMARA FRIGORÍFICA</strong>, você leva inteiramente grátis uma revisão elétrica predial completa do seu estabelecimento.
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-amber-300 font-semibold mb-6">
                    ⚠️ "Não deixe seu patrimônio virar cinzas, nem o seu dinheiro virar fumaça!"
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-xl btn-green-guru text-slate-950 font-black text-sm uppercase flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 fill-slate-950" />
                    <span>AGENDAR REVISÃO NO WHATSAPP</span>
                  </a>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Regiões Atendidas no Rio de Janeiro */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              COBERTURA REGIONAL NO RJ
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Regiões Atendidas com <span className="text-neon-yellow">Plantão 24 Horas</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Nossos técnicos chegam rapidamente ao seu estabelecimento em qualquer uma das regiões abaixo:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {regions.map((reg, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3 hover:border-amber-500/40 transition">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white">{reg}</span>
              </div>
            ))}
          </div>

          {/* Guarantee Banner */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900 border-2 border-amber-400/60 p-6 sm:p-10 text-center shadow-2xl pulse-glow-amber">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Até <span className="text-neon-yellow">12 Meses de Garantia</span> nos Serviços
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
              Trabalhamos para garantir que seu sistema de refrigeração e ar condicionado estejam sempre em perfeitas condições de operação sem riscos de paradas inesperadas.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-green-guru text-slate-950 font-black text-base sm:text-lg shadow-2xl uppercase"
            >
              <MessageCircle className="w-6 h-6 fill-slate-950" />
              <span>FALAR COM TÉCNICO DE PLANTÃO: (21) 97305-5315</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
