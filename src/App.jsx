import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsCounter from './components/StatsCounter';
import TargetAudience from './components/TargetAudience';
import VideoTestimonials from './components/VideoTestimonials';
import ManualSection from './components/ManualSection';
import ExclusiveBonuses from './components/ExclusiveBonuses';
import CertificateSection from './components/CertificateSection';
import PricingSection from './components/PricingSection';
import GuaranteeSection from './components/GuaranteeSection';
import InstructorSection from './components/InstructorSection';
import FaqSection from './components/FaqSection';
import FloatingCta from './components/FloatingCta';
import Footer from './components/Footer';
import PurchaseModal from './components/PurchaseModal';
import LaudosTecnicosPage from './pages/LaudosTecnicosPage';
import CamaraFriaPage from './pages/CamaraFriaPage';
import TreinamentosPage from './pages/TreinamentosPage';
import LojaPage from './pages/LojaPage';
import ComandosEletricosPage from './pages/ComandosEletricosPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'laudos' | 'camarafria' | 'treinamentos' | 'comandos' | 'loja'
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check URL hash on load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#laudos' || hash === '#laudostecnicos') {
        setCurrentPage('laudos');
      } else if (hash === '#camarafria' || hash === '#camara-fria') {
        setCurrentPage('camarafria');
      } else if (hash === '#treinamentos' || hash === '#treinamento') {
        setCurrentPage('treinamentos');
      } else if (hash === '#comandos' || hash === '#comandos-eletricos' || hash === '#comandoseletricos') {
        setCurrentPage('comandos');
      } else if (hash === '#loja' || hash === '#apostilas' || hash === '#oferta') {
        setCurrentPage('loja');
      } else if (hash === '#inicio' || hash === '#home' || hash === '') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'laudos' ? '#laudos' : page === 'camarafria' ? '#camarafria' : page === 'treinamentos' ? '#treinamentos' : page === 'comandos' ? '#comandos' : page === 'loja' ? '#loja' : '#inicio';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCheckout = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-amber-400 selection:text-slate-950">
      
      {/* Main Navbar */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />

      <main className="flex-grow">
        {currentPage === 'laudos' ? (
          <LaudosTecnicosPage />
        ) : currentPage === 'camarafria' ? (
          <CamaraFriaPage />
        ) : currentPage === 'treinamentos' ? (
          <TreinamentosPage />
        ) : currentPage === 'comandos' ? (
          <ComandosEletricosPage />
        ) : currentPage === 'loja' ? (
          <LojaPage />
        ) : (
          <>
            {/* High Conversion Guru Hero with New Copy + RGB Borders + Real Images */}
            <Hero onOpenCheckout={handleOpenCheckout} />

            {/* Live Counters & Metrics */}
            <StatsCounter />

            {/* Target Audience & Dual High Income Skills (Elétrica + Refrigeração) */}
            <TargetAudience />

            {/* Real YouTube Video Testimonials Requested by User */}
            <VideoTestimonials />

            {/* The Technical Manual & 250+ Pages Super Apostila Section */}
            <ManualSection />

            {/* 4 Super Brindes Grátis with Exact Copy & User Images */}
            <ExclusiveBonuses />

            {/* 60h Certificate Section with Real Certificate Image */}
            <CertificateSection />

            {/* Featured Price Box with R$ 99,97 + RGB Glow */}
            <PricingSection onOpenCheckout={handleOpenCheckout} />

            {/* 7 Days Unconditional Guarantee */}
            <GuaranteeSection />

            {/* Instructor Authority with quem eu sou.jpg */}
            <InstructorSection />

            {/* FAQ Objection Buster */}
            <FaqSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA / Sticky Bottom Bar on Scroll */}
      <FloatingCta onOpenCheckout={handleOpenCheckout} />

      {/* Fast Checkout Lead Modal with Confetti */}
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
