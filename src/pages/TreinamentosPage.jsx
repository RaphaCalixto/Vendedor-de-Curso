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
  BookOpen, 
  Snowflake, 
  MessageCircle, 
  TrendingUp, 
  UserCheck, 
  HelpCircle,
  Clock,
  DollarSign
} from 'lucide-react';

export default function TreinamentosPage() {
  const HOTMART_URL = "https://pay.hotmart.com/V89605931B?checkoutMode=10&bid=1791379630280";
  const WHATSAPP_URL = "https://wa.me/5521973055315?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Curso%20de%20C%C3%A2maras%20Frigor%C3%ADficas";

  const targetAudiences = [
    { num: "01", title: "Iniciantes do Zero", desc: "Quem quer entrar na área de refrigeração comercial e ar-condicionado mesmo sem nenhuma experiência prévia." },
    { num: "02", title: "Profissionais da Refrigeração", desc: "Técnicos de geladeiras ou ar Split que querem se aperfeiçoar e faturar alto em câmaras frigoríficas sem concorrência." },
    { num: "03", title: "Donos de Câmaras Frias", desc: "Comerciantes, açougues e padarias que querem dominar a manutenção e economizar milhares de reais consertando pequenos defeitos." },
    { num: "04", title: "Quem Deseja Mudar de Vida", desc: "Qualquer pessoa que queira aprender uma profissão independente com renda de R$ 5.000 a mais de R$ 12.000 por mês." },
  ];

  const advantages = [
    "São mais de 250 vídeo-aulas práticas ensinando o passo a passo de como consertar câmaras frias no campo de batalha",
    "Super Apostila técnica com mais de 190 páginas coloridas explicando tudo sobre sistemas frigoríficos e componentes",
    "Material de apoio completo ensinando rotinas de manutenção preventiva, testes elétricos e recarga de gás",
    "Soluções práticas para os defeitos mais comuns encontrados em câmaras de resfriamento e congelamento",
    "Suporte técnico via WhatsApp direto com o professor online para tirar dúvidas em tempo real",
    "Acesso 100% Vitalício: para sempre o treinamento e todas as atualizações serão seus",
    "Certificado de Conclusão Profissional válido em todo o território nacional (Lei nº 9.394/96)",
    "Bônus Exclusivo: Comandos Elétricos de Ar Split Piso Teto, Centrais Self/Splitão/Fan Coil e Balcões Frigoríficos"
  ];

  const testimonials = [
    {
      name: "Doriedsom Callegario",
      role: "Eletricista & Técnico de Campo",
      quote: "Custo-Benefício: curso muito bom e muito barato. Aprendi tanto que agora sou um dos poucos eletricistas que atende as câmaras frigoríficas aqui da empresa que trabalho. Obrigado pela oportunidade em aprender com vocês!"
    },
    {
      name: "Otávio Andrade",
      role: "Instalador Comercial",
      quote: "Já no primeiro atendimento faturei o dobro do que paguei pelo curso! Agradeço ao Mestre por ter me orientado com suas dicas e ensinamentos. Gratidão total!"
    },
    {
      name: "Jucinei Carvalho",
      role: "Dono de Comércio",
      quote: "Venho aqui agradecer ao mestre! Tenho em meu estabelecimento 1 câmara de resfriamento e outra de congelamento e comprei o curso para eu mesmo consertar pequenos defeitos. Tenho aprendido muito com as aulas!"
    },
    {
      name: "Marcos Barbosa",
      role: "Técnico Autônomo",
      quote: "Cara, o conteúdo do curso de câmaras frias é excelente! O instrutor ensina de uma forma que fica fácil entender e as aulas práticas ensinando o passo a passo foram fundamentais. Agradeço demais!"
    },
    {
      name: "Jardel Amilton",
      role: "Refrigerista",
      quote: "Fala sério! Curso muito Bom e Barato; um monte de curso CARO na internet que não ensina como esse curso de câmara frigorífica ensina. Muita Gratidão!"
    },
    {
      name: "Marcelo Menezes",
      role: "Profissional de Manutenção",
      quote: "Finalmente encontrei um curso de conserto de câmaras frias que realmente entrega o que promete! Estou muito satisfeito com todo o aprendizado adquirido. Recomendo a todos!"
    },
    {
      name: "Ricardo Silva",
      role: "Técnico em Climatização",
      quote: "Curso BBB: Bom, Bacana e Barato! Trabalho com ar condicionado e pensava que câmara fria era coisa de outro planeta. Fazendo o curso vi que não é tão difícil quanto parece. Agregou demais profissionalmente!"
    },
    {
      name: "Roberto Nascimento",
      role: "Aluno Formado",
      quote: "Muito bom o curso, didática excelente e direto ao ponto. Recomendo a todos que querem faturar na refrigeração comercial!"
    },
    {
      name: "Michelle Cardozo Silva",
      role: "Esposa de Aluno",
      quote: "Gratidão! Comprei o curso para o meu marido que estava desempregado e agora sai todos os dias para trabalhar com câmaras frigoríficas e ar condicionado. Foi o melhor investimento que poderia ter feito na minha família!"
    }
  ];

  return (
    <div className="bg-[#07090e] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
        {/* Glow backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/20 via-amber-500/15 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs sm:text-sm font-black text-amber-300 shadow-xl shadow-amber-500/10">
              <Flame className="w-4 h-4 text-red-500 fill-red-500 animate-bounce" />
              <span>ALTA DEMANDA • ÁREA COM POUCOS CONCORRENTES</span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              APRENDA COMO FATURAR DE <br />
              <span className="text-neon-yellow underline decoration-amber-500 decoration-wavy decoration-from-font">
                R$ 500,00 A R$ 1.500,00
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400">
                A CADA SERVIÇO DE REPARO DE CÂMARA FRIA!
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              Essa é a área da Refrigeração onde você <strong>quase não tem concorrentes!</strong> Aprenda o conserto rápido de câmaras frigoríficas do zero para iniciantes com foco em serviços que dão dinheiro.
            </p>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm text-slate-300">
                Curso completo de Reparo Rápido de Câmaras Frigoríficas em até <strong className="text-amber-400 text-base font-black">12x de R$ 19,84</strong>
              </p>
            </div>
          </div>

          {/* YouTube Video 1: Shorts */}
          <div className="max-w-md mx-auto mb-10">
            <div className="rgb-card-wrapper shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-4 text-center">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                  <span className="text-xs font-bold text-slate-200 uppercase">AULA EM CAMPO</span>
                  <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">AO VIVO</span>
                </div>
                <div className="relative w-full aspect-[9/16] max-h-[500px] rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 shadow-2xl mx-auto">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/ukwiZZH8aKc"
                    title="Vídeo Demonstração Reparo de Câmara Fria"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center max-w-md mx-auto space-y-3">
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-8 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg flex items-center justify-center gap-3 btn-shimmer group uppercase tracking-tight shadow-2xl"
            >
              <Zap className="w-6 h-6 fill-slate-950 group-hover:scale-110 transition-transform" />
              <span>QUERO COMPRAR POR ATÉ 12X DE R$ 19,84</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-[11px] text-slate-400">
              Acesso Vitalício • 7 Dias de Garantia Incondicional
            </p>
          </div>

        </div>
      </section>

      {/* Practical Video Lessons Grid: Videos 2 and 3 */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              MÉTODO 100% PRÁTICO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Mais de <span className="text-neon-yellow">300 Videoaulas</span> Gravadas no Campo de Batalha
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Chega de ficar só na teoria! Assista aos nossos vídeos e aprenda com quem vive a realidade das obras comerciais todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Video 2 */}
            <div className="rgb-card-wrapper shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-4 sm:p-6 text-center">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="text-xs font-bold text-slate-200">AULA PRÁTICA 1 — Diagnóstico de Falhas</span>
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full">CAMPO</span>
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 shadow-xl">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/3D4lwZUueds"
                    title="Aula Prática de Câmara Fria 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </div>

            {/* Video 3 */}
            <div className="rgb-card-wrapper shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-4 sm:p-6 text-center">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="text-xs font-bold text-slate-200">AULA PRÁTICA 2 — Comandos e Manutenção</span>
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full">CAMPO</span>
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 shadow-xl">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/_qWik3gsBF4"
                    title="Aula Prática de Câmara Fria 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Attention Box */}
          <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900 border-2 border-amber-400/60 p-6 sm:p-8 text-center shadow-2xl pulse-glow-amber">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              ⚠️ Use Apenas Ferramentas Básicas de Refrigeração!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
              Vou te ensinar a faturar de <strong>R$ 500,00 a R$ 1.500,00</strong> em cada atendimento sem precisar investir fortunas em maquinário. Aprenda hoje e comece a ganhar dinheiro amanhã!
            </p>
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg shadow-2xl uppercase"
            >
              <Zap className="w-5 h-5 fill-slate-950" />
              <span>QUERO APRENDER A FATURAR ATÉ R$ 1.500 POR SERVIÇO</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              PÚBLICO ALVO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Para Quem é Este Treinamento?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((item, idx) => (
              <div key={idx} className="rgb-card-wrapper shadow-xl flex flex-col">
                <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20 mb-3 inline-block">
                      PERFIL #{item.num}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-800 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" /> 100% Indicado
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Real Testimonials Grid (9 Student Reviews) + Video 4 */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              PROVA SOCIAL REAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Olha o Que Estão Falando do <span className="text-neon-yellow">Curso de Câmaras Frigoríficas</span>
            </h2>
          </div>

          {/* Video 4: Student video review */}
          <div className="max-w-4xl mx-auto mb-14">
            <div className="rgb-card-wrapper shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-4 sm:p-6 text-center">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="text-xs font-bold text-slate-200">DEPOIMENTO EM VÍDEO DO ALUNO</span>
                  <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full">VERIFICADO</span>
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 shadow-xl">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/D48dfDRcwD8"
                    title="Depoimento em Vídeo do Aluno"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 9 Text Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test, index) => (
              <div key={index} className="rgb-card-wrapper shadow-xl flex flex-col">
                <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="text-sm font-bold text-white leading-tight">{test.name}</h4>
                        <p className="text-[11px] text-slate-400">{test.role}</p>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      "{test.quote}"
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-800 text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Aluno Formado e Aprovado
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3 Super Bônus Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30">
              100% GRÁTIS HOJE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              3 SUPER BÔNUS <span className="text-neon-yellow">EXCLUSIVOS</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Ao se inscrever hoje no Curso de Reparo Rápido de Câmaras Frigoríficas, você recebe todos estes bônus e <strong>NÃO PAGA NADA A MAIS POR ISSO!</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Bonus 1 */}
            <div className="rgb-card-wrapper shadow-xl flex flex-col">
              <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="relative rounded-xl overflow-hidden border border-amber-500/30 mb-4 bg-slate-900 aspect-[3/4] flex items-center justify-center">
                    <img
                      src="/img/treinamento/1-curso-de-camaras-frias-a-realidade-do-campo-2-576x1024.png"
                      alt="Bônus 1 - A Realidade do Campo"
                      className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-emerald-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                      GRÁTIS
                    </div>
                  </div>
                  <span className="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md inline-block mb-2">
                    SUPER BÔNUS #1
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    A Realidade do Campo de Batalha
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Guia prático com os macetes e rotinas de manutenção que nenhum curso tradicional ensina, focado na resolução rápida de falhas.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 line-through">De R$ 147,00</span>
                  <span className="text-emerald-400 font-black">HOJE: R$ 0,00</span>
                </div>
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="rgb-card-wrapper shadow-xl flex flex-col">
              <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="relative rounded-xl overflow-hidden border border-amber-500/30 mb-4 bg-slate-900 aspect-[3/4] flex items-center justify-center">
                    <img
                      src="/img/treinamento/1-apostila-tecnica-profissional-refrigeracao-comercial-2-683x1024.png"
                      alt="Bônus 2 - Super Apostila Técnica"
                      className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-emerald-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                      GRÁTIS
                    </div>
                  </div>
                  <span className="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md inline-block mb-2">
                    SUPER BÔNUS #2
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Super Apostila Técnica 190+ Págs
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Apostila colorida completa com esquemas elétricos, diagramas de comando e parâmetros de temperatura e pressão.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 line-through">De R$ 197,00</span>
                  <span className="text-emerald-400 font-black">HOJE: R$ 0,00</span>
                </div>
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="rgb-card-wrapper shadow-xl flex flex-col">
              <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="relative rounded-xl overflow-hidden border border-amber-500/30 mb-4 bg-slate-900 aspect-[3/4] flex items-center justify-center">
                    <img
                      src="/img/treinamento/ChatGPT-Image-22-de-set.-de-2026-15_19_59-768x1024.png"
                      alt="Bônus 3 - Comandos Elétricos e Balcões"
                      className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-emerald-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                      GRÁTIS
                    </div>
                  </div>
                  <span className="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md inline-block mb-2">
                    SUPER BÔNUS #3
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    Comandos de Ar Central & Balcões
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Módulos extras sobre comandos de Split Piso Teto, Chillers, Self Contained e Balcões Frigoríficos comerciais.
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 line-through">De R$ 167,00</span>
                  <span className="text-emerald-400 font-black">HOJE: R$ 0,00</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8 Advantages Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              VANTAGENS DO CURSO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Tudo O Que Você Leva Neste Pacote
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 mb-12">
            {advantages.map((adv, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-start gap-4">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-mono font-black text-amber-400 shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                  {adv}
                </p>
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
                PROMOÇÃO VÁLIDA POR TEMPO LIMITADO
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-2">
                CURSO DE REPARO RÁPIDO DE CÂMARAS FRIGORÍFICAS
              </h2>

              <p className="text-sm sm:text-base font-bold text-amber-300 mb-6">
                "Já no primeiro serviço de Reparo Rápido de CÂMARAS FRIAS você paga esse curso 2 Vezes!"
              </p>

              <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/40 max-w-sm mx-auto mb-8">
                <span className="text-xs text-slate-400 block font-medium">Por apenas</span>
                <div className="text-3xl sm:text-4xl font-black text-neon-yellow font-mono my-1">
                  12x de R$ 19,84
                </div>
                <span className="text-xs text-emerald-400 font-bold block">
                  Acesso Vitalício + Super Apostila + Bônus
                </span>
              </div>

              <a
                href={HOTMART_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md mx-auto py-5 px-8 rounded-2xl btn-guru text-slate-950 font-black text-lg sm:text-xl flex items-center justify-center gap-3 btn-shimmer group uppercase tracking-tight shadow-2xl"
              >
                <Zap className="w-6 h-6 fill-slate-950 group-hover:scale-110 transition-transform" />
                <span>QUERO GARANTIR MINHA VAGA AGORA</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="mt-8 pt-6 border-t border-slate-800 text-center space-y-2">
                <p className="text-xs text-slate-400">
                  Tem alguma dúvida sobre o conteúdo do curso?
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-bold transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar com o Professor no WhatsApp: (21) 97305-5315</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
