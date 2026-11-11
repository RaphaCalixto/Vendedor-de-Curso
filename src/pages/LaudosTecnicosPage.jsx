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
  Play,
  PlaySquare,
  BookOpen,
  FileCheck,
  FileText,
  Building2,
  BadgePercent,
  ClipboardList,
  Layers,
  MessageCircle,
  HelpCircle,
  Clock,
  Briefcase
} from 'lucide-react';

export default function LaudosTecnicosPage() {
  const HOTMART_URL = "https://pay.hotmart.com/J107299949Y?checkoutMode=10&bid=1791378104759";
  const WHATSAPP_URL = "https://wa.me/5521973055315?text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20o%20Curso%20PMOC%20TOTAL%20HVAC";

  const businessTopics = [
    { title: "Apresentação Comercial da sua empresa", desc: "Modelos profissionais prontos para impressionar clientes corporativos." },
    { title: "A formalização do seu negócio", desc: "Passo a passo prático para sair da informalidade e emitir notas." },
    { title: "Elaboração de laudos técnicos e certificados HVAC", desc: "Documentação completa nos padrões da Vigilância Sanitária e ANVISA." },
    { title: "Abertura de empresa & Alvará de funcionamento", desc: "Tudo o que você precisa saber sobre registro e alvarás municipais." },
    { title: "Inscrição municipal, estadual e CNPJ MEI", desc: "Estruturação contábil simples para pagar menos impostos." },
    { title: "Abertura de contas PJ e Bancos digitais", desc: "Gestão financeira moderna e recebimentos ágeis." },
    { title: "Emissão de notas fiscais de serviços", desc: "Como emitir notas fiscais eletrônicas de forma descomplicada." },
    { title: "Planilhas de controles e orçamentos", desc: "Cálculos exatos de custos, materiais e margens de lucro." },
    { title: "Identidade empresarial e apresentação profissional", desc: "Construa uma marca de autoridade que cobra até 3x mais." },
  ];

  const deliverables = [
    {
      num: "01",
      title: "Kit Laudos + Certificados Conforme Normativa",
      desc: "Mais de 20 modelos editáveis prontos para fechar contratos de manutenção todos os meses.",
      tag: "20+ Modelos Editáveis"
    },
    {
      num: "02",
      title: "Kit PMOC PRONTO (Lei Federal 13.589/2018)",
      desc: "Documentação completa onde técnicos e/ou engenheiros só carimbam e assinam o parecer técnico.",
      tag: "Lei 13.589/2018"
    },
    {
      num: "03",
      title: "Modelos de Contratos de Manutenção",
      desc: "Contratos jurídicos para sistemas frigoríficos (câmaras frias), ar-condicionado e elétrica predial.",
      tag: "Contratos Blindados"
    },
    {
      num: "04",
      title: "Planos de Manutenção Completos",
      desc: "Cronogramas e rotinas completas para ar-condicionado, elétrica, câmaras frias e sistemas frigoríficos.",
      tag: "Planos de Ação"
    },
    {
      num: "05",
      title: "Modelo de Apresentação Comercial Matadora",
      desc: "Apresentação em slides e PDF que aumenta drasticamente as chances de fechar contratos mensais.",
      tag: "Fechamento Rápido"
    },
    {
      num: "06",
      title: "Relatórios de Atendimento e Fotográficos + O.S.",
      desc: "Ordens de serviço editáveis, relatórios de atendimento e modelos fotográficos para comprovar a execução.",
      tag: "Ordens de Serviço"
    },
    {
      num: "07",
      title: "Certificado de Higienização HVAC",
      desc: "Em conformidade com a Portaria 3.523/1998 Ministério da Saúde e Resolução RE Nº 09/2003 da ANVISA.",
      tag: "Padrão ANVISA"
    },
    {
      num: "08",
      title: "Checklists para Equipamentos Diversos",
      desc: "Split, Split Inverter, Ar de Janela, Self, Fan & Coil, Splitão, VRF, Chiller e Câmaras Frigoríficas.",
      tag: "Checklists Completos"
    },
  ];

  const advantages = [
    "Dezenas de vídeo-aulas ensinando o passo a passo de como Preparar, Elaborar, Assinar e Implantar o PMOC HVAC",
    "Super Apostila com mais de 330 páginas coloridas explicando tudo sobre Refrigeração e Ar-Condicionado",
    "Mais de 30 Modelos de Documentos Editáveis para baixar, editar, imprimir e utilizar hoje mesmo",
    "Dicas e orientação de gestão, Marketing e vendas para fechar contratos de manutenção todos os meses",
    "Material de apoio completo ensinando a elaborar laudos, certificados de limpeza HVAC, relatórios e O.S.",
    "Suporte técnico via WhatsApp direto com o professor online para tirar todas as dúvidas",
    "Acesso Vitalício: o curso e todos os modelos de documentos serão seus para sempre",
    "Certificado de Qualificação Profissional válido em todo o território nacional (Lei nº 9.394/96)"
  ];

  return (
    <div className="bg-[#07090e] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
        {/* Glow ambient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Urgency Pill */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs sm:text-sm font-black text-amber-300 shadow-xl shadow-amber-500/10">
              <Flame className="w-4 h-4 text-red-500 fill-red-500 animate-bounce" />
              <span>CURSO PMOC TOTAL HVAC — CONTRATOS RECORRENTES</span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              CURSO PMOC TOTAL É A SOLUÇÃO COMPLETA PARA VOCÊ <br />
              <span className="text-neon-yellow underline decoration-amber-500 decoration-wavy decoration-from-font">
                FECHAR CONTRATOS DE MANUTENÇÃO
              </span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400">
                TODOS OS MESES!
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              O programa de treinamento completo desenvolvido para quem deseja dominar todo o processo de como <strong>Planejar, Preparar, Elaborar, Assinar e Implantar o PMOC Total HVAC!</strong>
            </p>

            {/* Hook: Não precisa de engenheiro */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 max-w-2xl mx-auto">
              <p className="text-sm sm:text-base font-bold text-amber-300">
                💡 Você sabia que não precisa de um engenheiro para assinar o seu PMOC?
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Vem comigo que eu te explico na prática todo o embasamento técnico e legal!
              </p>
            </div>
          </div>

          {/* Video 1: Explicação do PMOC TOTAL */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="rgb-card-wrapper shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-4 sm:p-6 text-center">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      VÍDEO EXPLICATIVO — VEJA COMO TUDO FUNCIONA
                    </span>
                  </div>
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full">
                    AULA GRATUITA
                  </span>
                </div>

                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 shadow-2xl">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/9USVYYRrxjk"
                    title="Vídeo Explicativo Curso PMOC Total"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="text-center max-w-md mx-auto space-y-3">
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-8 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg flex items-center justify-center gap-3 btn-shimmer group uppercase tracking-tight shadow-2xl"
            >
              <Zap className="w-6 h-6 fill-slate-950 group-hover:scale-110 transition-transform" />
              <span>QUERO COMPRAR AGORA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-[11px] text-slate-400">
              Acesso imediato e vitalício • Garantia de 7 dias
            </p>
          </div>

        </div>
      </section>

      {/* Section: Além da Instalação - Estruturação Empresarial */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              ESTRUTURAÇÃO EMPRESARIAL
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Muito Além da Manutenção: <span className="text-neon-yellow">Uma Empresa de Sucesso</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Aqui você recebe todo o material técnico, jurídico e comercial para sair da informalidade e fechar contratos recorrentes de alto valor todos os meses.
            </p>
          </div>

          {/* Business Topics Grid with RGB cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTopics.map((item, index) => (
              <div key={index} className="rgb-card-wrapper shadow-xl flex flex-col">
                <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="text-base font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-12">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Acervo Arsenal Callout */}
          <div className="mt-14 max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-500/20 border-2 border-amber-400/60 p-6 sm:p-10 text-center shadow-2xl pulse-glow-amber">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Um Verdadeiro <span className="text-neon-yellow">Arsenal Técnico Exclusivo</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
              A proposta principal deste curso é fornecer um acervo técnico único para fazer você subir de nível nas áreas da <strong>refrigeração, do ar condicionado e da elétrica predial</strong>, dando as condições necessárias para fechar contratos de manutenção todos os meses.
            </p>
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg shadow-2xl btn-shimmer group uppercase"
            >
              <Zap className="w-5 h-5 fill-slate-950" />
              <span>QUERO ESSE ACERVO TÉCNICO AGORA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* Section: PMOC Sem Mensalidade & Kit PMOC Pronto */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image from Laudo Técnico folder (6 cols) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="rgb-card-wrapper w-full max-w-lg shadow-2xl">
                <div className="bg-slate-950 rounded-[22px] p-5 sm:p-7 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                      KIT LAUDOS & CERTIFICADOS
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      EDITÁVEL
                    </span>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 p-2 shadow-xl">
                    <img
                      src="/img/laudo_tecnico/laudis-tecnicos-hvac-768x537.png"
                      alt="Laudos Técnicos HVAC"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy: PMOC sem Mensalidade & Kit PMOC Pronto (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
                <FileCheck className="w-4 h-4" />
                <span>MODELO INOVADOR DE CONTRATAÇÃO</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                PMOC Sem Mensalidade & Kit PMOC Pronto
              </h2>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left space-y-2">
                <h4 className="text-base font-bold text-amber-400">O que é o PMOC Sem Mensalidade?</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Uma modalidade de prestação de serviço em que o profissional realiza a manutenção, limpeza e higienização dos equipamentos de climatização, entregando ao cliente a documentação técnica correspondente à execução dos serviços. <strong>Excelente alternativa para clientes que não desejam pagar mensalidades fixas!</strong>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-left space-y-2">
                <h4 className="text-base font-bold text-blue-400">O que é o Kit PMOC Pronto?</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Um pacote completo de documentos (laudos e certificados) entregue aos clientes após as manutenções e limpezas, atendendo às exigências da vigilância sanitária e órgãos competentes.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={HOTMART_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg shadow-2xl btn-shimmer group uppercase"
                >
                  <Zap className="w-5 h-5 fill-slate-950" />
                  <span>QUERO O KIT PMOC PRONTO</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section: Super Apostila Técnica com mais de 330 Páginas + Vídeo 2 */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              MATERIAL DIDÁTICO PREMIUM
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Super Apostila Técnica com <span className="text-neon-yellow">Mais de 330 Páginas</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Assista ao vídeo abaixo e veja por dentro cada detalhe da apostila e dos materiais que aceleram seu aprendizado!
            </p>
          </div>

          {/* Video 2: Por Dentro da Apostila */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="rgb-card-wrapper shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-4 sm:p-6 text-center">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      TOUR POR DENTRO DA SUPER APOSTILA TÉCNICA
                    </span>
                  </div>
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full">
                    +330 PÁGINAS
                  </span>
                </div>

                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 shadow-2xl">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/gc9-aLXQwVw"
                    title="Vídeo Tour Apostila Técnica PMOC Total"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section: O Que Entregamos (8 Entregáveis) */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              CONTEÚDO COMPLETO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              O Que Você Recebe ao Entrar Hoje
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Todos os documentos, laudos, contratos e checklists prontos para download imediato.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <div key={index} className="rgb-card-wrapper shadow-xl flex flex-col">
                <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                        ITEM #{item.num}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section: 8 Vantagens Deste Curso */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              DIFERENCIAIS EXCLUSIVOS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              8 Vantagens Imbatíveis Deste Treinamento
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {advantages.map((adv, index) => (
              <div key={index} className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-start gap-4">
                <span className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-mono font-black text-amber-400 shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                  {adv}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section: Certificado de Qualificação Profissional & Carteirinha */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
                <Award className="w-4 h-4 text-amber-400" />
                <span>CERTIFICADO OFICIAL RECONHECIDO</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Certificado de Qualificação Profissional + Carteirinha
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                O aluno receberá o <strong>certificado reconhecido em todo território nacional</strong> de acordo com o <strong>Art. 42 da Lei nº 9.394/96</strong> (Diretrizes e Bases da Educação Nacional).
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                Comprova sua participação e capacitação técnica completa, enriquecendo seu currículo e ampliando suas oportunidades de fechar contratos com empresas, condomínios e indústrias.
              </p>

              <div className="pt-2">
                <a
                  href={HOTMART_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg shadow-2xl btn-shimmer group uppercase"
                >
                  <Zap className="w-5 h-5 fill-slate-950" />
                  <span>GARANTIR MEU CERTIFICADO + CURSO</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Images of Certificate and Carteirinha */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rgb-card-wrapper shadow-2xl">
                <div className="bg-slate-950 rounded-[22px] p-4 sm:p-6 text-center">
                  <div className="rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 p-2 shadow-xl mb-4">
                    <img
                      src="/img/laudo_tecnico/Certificados-hvac-2-768x568.png"
                      alt="Certificado Oficial de Qualificação"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/90 p-2">
                    <img
                      src="/img/laudo_tecnico/Carteirinha-oficial-sem-registro-768x498.png"
                      alt="Carteirinha Oficial de Técnico"
                      className="w-full max-w-xs mx-auto h-auto object-contain rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Section: Final Price Offer Box */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rgb-card-wrapper shadow-2xl">
            <div className="bg-slate-950 rounded-[22px] p-6 sm:p-12 text-center relative overflow-hidden">
              
              <div className="inline-block bg-red-600 text-white font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider mb-4 animate-bounce">
                QUALIDADE DE ENSINO • MELHOR PREÇO GARANTIDO
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
                CURSO PMOC TOTAL HVAC-R
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                As técnicas mais avançadas para você fechar contratos de manutenção todos os meses. Com <strong>Garantia Incondicional de 7 Dias</strong> ou seu dinheiro de volta!
              </p>

              <a
                href={HOTMART_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md mx-auto py-5 px-8 rounded-2xl btn-guru text-slate-950 font-black text-lg sm:text-xl flex items-center justify-center gap-3 btn-shimmer group uppercase tracking-tight shadow-2xl"
              >
                <Zap className="w-6 h-6 fill-slate-950 group-hover:scale-110 transition-transform" />
                <span>QUERO COMPRAR AGORA</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* WhatsApp Support Callout */}
              <div className="mt-8 pt-6 border-t border-slate-800 text-center space-y-2">
                <p className="text-xs text-slate-400">
                  Ainda tem dúvida se o curso PMOC TOTAL é pra você?
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-bold transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Fale comigo agora pelo WhatsApp: (21) 97305-5315</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
