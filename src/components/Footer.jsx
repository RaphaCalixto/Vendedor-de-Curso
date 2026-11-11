import React from 'react';
import { ShieldCheck, Lock, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const HOTMART_URL = "https://pay.hotmart.com/Y102262705B?checkoutMode=10";
  const WHATSAPP_URL = "https://wa.me/5521973055315?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Curso%20de%20Eletricista%20Instalador%20e%20Refrigera%C3%A7%C3%A3o";

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-24 sm:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info (5 cols) with official Navbar logo */}
          <div className="md:col-span-5 space-y-4">
            <a href="#inicio" className="inline-block">
              <img
                src="/img/logo.png"
                alt="JV Tech Elétrica Logo"
                className="h-14 w-auto object-contain drop-shadow-[0_0_12px_rgba(245,158,11,0.35)]"
              />
            </a>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Formação profissional de elite em instalações elétricas e refrigeração. Capacitando profissionais com método 100% prático e focado na realidade das obras.
            </p>

            <div className="flex items-center gap-4 text-slate-500 text-[11px]">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" /> Compra 100% Segura
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> 7 Dias de Garantia
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition">O Que Você Aprende</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-amber-400 transition">Depoimentos dos Alunos</a>
              </li>
              <li>
                <a href="#treinamentos" className="hover:text-amber-400 transition">Super Apostila Técnica</a>
              </li>
              <li>
                <a href="#bonus" className="hover:text-amber-400 transition">4 Super Brindes Grátis</a>
              </li>
              <li>
                <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition font-bold text-amber-400">
                  Garantir Vaga por R$ 99,97
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Support (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Atendimento & Suporte
            </h4>
            <p className="text-xs text-slate-400">
              Precisa de ajuda ou suporte com seu acesso? Fale conosco:
            </p>
            <div className="space-y-2 text-xs">
              <a 
                href="mailto:marceloguerraz@hotmail.com" 
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>marceloguerraz@hotmail.com</span>
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>(21) 97305-5315</span>
              </a>
              <p className="text-slate-500 text-[11px] pt-1">
                Atendimento de Segunda a Sexta das 08h às 18h
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="pt-8 border-t border-slate-900 text-center space-y-4">
          <p className="text-[11px] text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Aviso Legal: Os resultados obtidos podem variar de pessoa para pessoa e dependem exclusivamente da dedicação em aplicar os conhecimentos ensinados. Este site não faz parte do Facebook, Instagram ou Meta Platforms Inc.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-400">
            <span>Termos de Uso</span>
            <span>•</span>
            <span>Políticas de Privacidade</span>
            <span>•</span>
            <span>Direitos Autorais Reservados</span>
          </div>

          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} JV Tech Elétrica. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
