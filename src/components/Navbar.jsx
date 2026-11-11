import React, { useState } from 'react';
import { Menu, X, Zap, Phone, ShoppingCart } from 'lucide-react';

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', name: 'Início', href: '#inicio' },
    { id: 'laudos', name: 'Laudos Técnicos', href: '#laudos' },
    { id: 'camarafria', name: 'Câmara Fria', href: '#camarafria' },
    { id: 'treinamentos', name: 'Treinamentos', href: '#treinamentos' },
    { id: 'comandos', name: 'Comandos Elétricos', href: '#comandos' },
    { id: 'loja', name: 'Loja', href: '#loja' },
  ];

  const handleItemClick = (e, item) => {
    if (item.id === 'home' || item.id === 'laudos' || item.id === 'camarafria' || item.id === 'treinamentos' || item.id === 'comandos' || item.id === 'loja') {
      e.preventDefault();
      if (onNavigate) {
        onNavigate(item.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const HOTMART_URL = currentPage === 'laudos' 
    ? "https://pay.hotmart.com/J107299949Y?checkoutMode=10&bid=1791380961917"
    : currentPage === 'camarafria'
    ? "https://wa.me/5521973055315?text=Ol%C3%A1%2C%20preciso%20de%20assist%C3%AAncia%20t%C3%A9cnica%20para%20C%C3%A2mara%20Fria"
    : currentPage === 'treinamentos'
    ? "https://pay.hotmart.com/V89605931B?checkoutMode=10&bid=1791379630280"
    : currentPage === 'comandos'
    ? "https://pay.hotmart.com/T107811636X?checkoutMode=10"
    : currentPage === 'loja'
    ? "https://pay.hotmart.com/Y101283231H?checkoutMode=10&bid=1791380961917"
    : "https://pay.hotmart.com/Y102262705B?checkoutMode=10";

  return (
    <header className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800/90 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => handleItemClick(e, { id: 'home' })}
            className="flex items-center gap-3 group"
          >
            <img
              src="/img/logo.png"
              alt="JV Tech Elétrica Logo"
              className="h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]"
            />
          </a>

          {/* Desktop Nav requested by User */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {menuItems.map((item) => {
              const isActive = (currentPage === 'home' && item.id === 'home') || 
                               (currentPage === 'laudos' && item.id === 'laudos') ||
                               (currentPage === 'camarafria' && item.id === 'camarafria') ||
                               (currentPage === 'treinamentos' && item.id === 'treinamentos') ||
                               (currentPage === 'comandos' && item.id === 'comandos') ||
                               (currentPage === 'loja' && item.id === 'loja');

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item)}
                  className={`text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-amber-400 font-bold border-b-2 border-amber-400 pb-1'
                      : 'text-slate-300 hover:text-amber-400'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-black text-slate-950 btn-guru rounded-xl shadow-lg shadow-amber-500/20 hover:scale-[1.03] active:scale-[0.98] transition btn-shimmer uppercase"
            >
              <Zap className="w-4 h-4 mr-1.5 fill-slate-950" />
              Garantir Vaga
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-2xl">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleItemClick(e, item)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-slate-200 hover:bg-slate-900 hover:text-amber-400 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href={HOTMART_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3.5 text-sm font-black text-slate-950 btn-guru rounded-xl shadow-lg uppercase"
            >
              <Zap className="w-4 h-4 mr-2 fill-slate-950" />
              QUERO ME INSCREVER AGORA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
