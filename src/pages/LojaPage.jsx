import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Zap, 
  Flame, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Gift, 
  Clock, 
  Download, 
  Smartphone, 
  Monitor, 
  Layers, 
  Eye, 
  MessageCircle,
  HelpCircle,
  Lock,
  BookmarkCheck,
  TrendingUp
} from 'lucide-react';

export default function LojaPage() {
  const HOTMART_URL = "https://pay.hotmart.com/Y101283231H?checkoutMode=10&bid=1791380961917";
  const WHATSAPP_URL = "https://wa.me/5521973055315?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20as%20Apostilas%20T%C3%A9cnicas";

  const apostilasCatalog = [
    {
      id: 1,
      title: "O Manual do Eletricista Instalador & Reparador",
      subtitle: "Bíblia da Elétrica Predial e Residencial",
      tag: "MAIS VENDIDO",
      pages: "250+ páginas",
      rating: 5.0,
      reviews: 148,
      image: "/img/4-Apostila-O-manual-do-Eletricista-Instalador-Preco-R69-768x1365.png",
      oldPrice: "R$ 199,97",
      price: "R$ 69,97",
      desc: "Guia definitivo passo a passo de instalações elétricas, dimensionamento de cabos, disjuntores, QDC, aterramento e diagramas unifilares conforme a NBR 5410."
    },
    {
      id: 2,
      title: "Super Apostila de Refrigeração Comercial & Câmaras Frias",
      subtitle: "Do Básico aos Comandos Frigoríficos",
      tag: "ALTA DEMANDA",
      pages: "190+ páginas",
      rating: 4.9,
      reviews: 96,
      image: "/img/treinamento/1-apostila-tecnica-profissional-refrigeracao-comercial-2-683x1024.png",
      oldPrice: "R$ 199,97",
      price: "R$ 69,97",
      desc: "Domine sistemas de frio alimentar, balcões, compressores, evaporadores, válvulas de expansão e controle eletrônico de temperatura e degelo."
    },
    {
      id: 3,
      title: "Reparo de Placas Eletrônicas Inverter & Ar Split",
      subtitle: "Eletrônica Aplicada para Refrigeristas",
      tag: "SUPER LUCRO",
      pages: "180+ páginas",
      rating: 5.0,
      reviews: 84,
      image: "/img/4-Super-Apostilas-o-manual-do-eletricista-3-768x1152.png",
      oldPrice: "R$ 199,97",
      price: "R$ 69,97",
      desc: "Aprenda a testar IGBTs, fontes chaveadas, microcontroladores e identificar códigos de erro sem precisar terceirizar o conserto da placa."
    },
    {
      id: 4,
      title: "Comandos Elétricos Industriais & Motores",
      subtitle: "Diagramas de Força e Comando na Prática",
      tag: "DESTAQUE",
      pages: "210+ páginas",
      rating: 4.9,
      reviews: 112,
      image: "/img/4-apostila-do-eletricista-instalador-4-1024x1536.png",
      oldPrice: "R$ 199,97",
      price: "R$ 69,97",
      desc: "Partida direta, estrela-triângulo, compensadora, soft-starter e inversores de frequência com esquemas completos e simbologia técnica."
    },
    {
      id: 5,
      title: "Manutenção & Operação de Chillers e Ar Central",
      subtitle: "Climatização de Grande Porte HVAC",
      tag: "ESPECIALISTA",
      pages: "175+ páginas",
      rating: 4.8,
      reviews: 67,
      image: "/img/camara_fria/Manutencao-e-operacao-de-Chiller-.jpg",
      oldPrice: "R$ 199,97",
      price: "R$ 69,97",
      desc: "Fluxogramas hidráulicos, compressores parafuso/scroll, trocadores de calor, torres de resfriamento e rotinas de operação segura."
    },
    {
      id: 6,
      title: "A Jornada do Aluno Rumo ao Sucesso Profissional",
      subtitle: "Guia de Carreira, Vendas e Precificação",
      tag: "BRINDE EXCLUSIVO",
      pages: "120+ páginas",
      rating: 5.0,
      reviews: 130,
      image: "/img/ChatGPT-Image-25-de-jul.-de-2026-05_26_36-576x1024.png",
      oldPrice: "R$ 149,97",
      price: "GRÁTIS",
      desc: "Aprenda a fechar orçamentos de alto valor, formalizar sua empresa, atrair clientes todos os dias e criar uma esteira de serviços lucrativa."
    }
  ];

  return (
    <div className="bg-[#07090e] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Top Notification Banner */}
      <div className="bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-slate-950 py-2.5 px-4 text-center font-black text-xs sm:text-sm tracking-wide shadow-lg uppercase flex items-center justify-center gap-2">
        <Flame className="w-4 h-4 fill-slate-950 animate-bounce" />
        <span>OFERTA RELÂMPAGO: COMPRE 1 APOSTILA E GANHE OUTRA 100% GRÁTIS!</span>
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
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>SUPER APOSTILAS TÉCNICAS PROFISSIONAIS</span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              CONHECIMENTO PRÁTICO QUE PODE <br />
              <span className="text-neon-yellow underline decoration-amber-500 decoration-wavy decoration-from-font">
                ECONOMIZAR MESES DE ESTUDO!
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
              Materiais de estudo e leitura rápida que explicam de forma <strong>simples e objetiva</strong> conceitos e procedimentos nas áreas de Refrigeração Comercial, Residencial, Placas Inverter, Comandos Elétricos e Elétrica Predial.
            </p>

            {/* Price Highlight Banner */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 px-6 rounded-2xl bg-slate-900/90 border-2 border-amber-400/80 shadow-2xl pulse-glow-amber">
              <span className="text-xs sm:text-sm text-slate-400">Oferta Especial Hoje:</span>
              <div className="flex items-center gap-3">
                <span className="text-sm sm:text-base text-slate-400 line-through">De R$ 199,97</span>
                <span className="text-2xl sm:text-3xl font-black text-neon-yellow font-mono">
                  Por apenas R$ 69,97
                </span>
              </div>
            </div>
          </div>

          {/* YouTube Video Presentation */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="rgb-card-wrapper shadow-2xl">
              <div className="bg-slate-950 rounded-[22px] p-4 sm:p-6 text-center">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-slate-200">APRESENTAÇÃO DAS APOSTILAS TÉCNICAS</span>
                  </div>
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase">
                    VÍDEO OFICIAL
                  </span>
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-amber-500/40 bg-slate-900 shadow-2xl">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/brOQZgY8WSM"
                    title="Apresentação das Apostilas Técnicas"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buy 1 Get 1 Free Promo Card */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/20 via-slate-900 to-emerald-500/10 border-2 border-amber-400 shadow-2xl text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase">
                <Gift className="w-4 h-4" /> BÔNUS DE COMPRA DUPLA
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Na compra de QUALQUER apostila técnica, você recebe outra <span className="text-emerald-400">100% GRÁTIS!</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                Não deixe essa oportunidade passar! Garanta agora sua apostila técnica e acelere o seu aprendizado no campo de batalha.
              </p>
              <div className="pt-2">
                <a
                  href={HOTMART_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg uppercase tracking-tight shadow-2xl"
                >
                  <Zap className="w-5 h-5 fill-slate-950" />
                  <span>COMPRAR AGORA NA HOTMART POR R$ 69,97</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Apostilas Catalog Grid */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30">
              CATÁLOGO COMPLETO
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Escolha a Sua <span className="text-neon-yellow">Apostila Técnica</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Ideal para iniciantes, estudantes, técnicos e profissionais que querem acelerar seu aprendizado e faturar mais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apostilasCatalog.map((item) => (
              <div key={item.id} className="rgb-card-wrapper shadow-2xl flex flex-col group">
                <div className="bg-slate-950 rounded-[22px] p-6 flex-1 flex flex-col justify-between">
                  
                  <div>
                    {/* Cover Image Container */}
                    <div className="relative aspect-[3/4] max-h-72 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800 mb-5 flex items-center justify-center group-hover:border-amber-500/60 transition-colors">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase shadow-md">
                        {item.tag}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-slate-950/90 border border-slate-700 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-md">
                        {item.pages}
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-lg font-black text-white leading-snug mb-1 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-400 mb-3">
                      {item.subtitle}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-slate-300">
                        {item.rating} ({item.reviews} avaliações)
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 line-through block">{item.oldPrice}</span>
                        <span className="text-xl font-black text-neon-yellow font-mono">{item.price}</span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        Envio Imediato
                      </span>
                    </div>

                    <a
                      href={HOTMART_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl btn-guru text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 uppercase tracking-tight shadow-lg"
                    >
                      <Zap className="w-4 h-4 fill-slate-950" />
                      <span>COMPRAR AGORA</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* The Power of Daily Reading Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rgb-card-wrapper shadow-2xl">
            <div className="bg-slate-950 rounded-[22px] p-6 sm:p-12">
              
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:w-1/3 shrink-0 flex justify-center">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-2xl bg-slate-900 p-2 max-w-[260px]">
                    <img
                      src="/img/4-Super-Apostilas-o-manual-do-eletricista-3-768x1152.png"
                      alt="O Poder da Leitura Diária"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/3 space-y-4">
                  <span className="text-xs font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 inline-block">
                    HÁBITO QUE TRANSFORMA CARREIRAS
                  </span>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    O Poder da Leitura Diária na Vida do Profissional
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    A leitura diária é um verdadeiro exercício para a mente, capaz de expandir o vocabulário, estimular a criatividade e melhorar a concentração e o raciocínio técnico.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Reservar apenas <strong>15 minutos por dia</strong> para ler fortalece o conhecimento, evita prejuízos na obra e amplia a sua visão de mercado. Nesse cenário, os e-books e apostilas digitais se destacam como uma opção moderna e prática: podem ser acessados de qualquer lugar diretamente pelo seu celular, tablet ou computador.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <Smartphone className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                      <span className="text-[11px] font-bold text-slate-200 block">Acesse no Celular</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                      <Download className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                      <span className="text-[11px] font-bold text-slate-200 block">Download Imediato</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center col-span-2 sm:col-span-1">
                      <BookmarkCheck className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                      <span className="text-[11px] font-bold text-slate-200 block">Acesso Vitalício</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Black Books - Livros Digitais (Em Breve) */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-xs sm:text-sm font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-4">
            NOVIDADES EXCLUSIVAS
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            BLACK BOOKS • LIVROS DIGITAIS
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Nossa linha de livros avançados e manuais aprofundados para especialistas e engenheiros de campo. Em breve disponíveis na plataforma!
          </p>

          {/* Em Breve Box with dashed border */}
          <div className="max-w-md mx-auto p-12 rounded-3xl border-2 border-dashed border-slate-700 bg-slate-900/50 backdrop-blur-md flex flex-col items-center justify-center space-y-3">
            <Lock className="w-10 h-10 text-amber-400 animate-pulse" />
            <span className="text-2xl font-black tracking-widest text-slate-300 font-mono">
              [ EM BREVE ]
            </span>
            <p className="text-xs text-slate-400">
              Novos títulos em desenvolvimento com lançamento previsto para este ano.
            </p>
          </div>

        </div>
      </section>

      {/* Safe Checkout & Guarantees */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-slate-950/90 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-black bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/30">
            <ShieldCheck className="w-5 h-5" /> COMPRA 100% SEGURA VIA HOTMART
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-white">
            Receba suas Apostilas Imediatamente no seu E-mail
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Assim que seu pagamento for confirmado pela Hotmart, os links de download e acesso chegam automaticamente na sua caixa de entrada.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl btn-guru text-slate-950 font-black text-base uppercase tracking-tight shadow-2xl"
            >
              <Zap className="w-5 h-5 fill-slate-950 inline mr-2" />
              QUERO COMPRAR POR R$ 69,97 (LEVE 2)
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 font-bold text-sm flex items-center justify-center gap-2 transition"
            >
              <MessageCircle className="w-5 h-5" />
              Dúvidas no WhatsApp: (21) 97305-5315
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
