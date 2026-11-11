import React, { useState } from 'react';
import { X, Lock, CheckCircle2, QrCode, CreditCard, ShieldCheck, Zap, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { courseData } from '../data/courseData';

export default function PurchaseModal({ isOpen, onClose }) {
  const [step, setStep] = useState('form');
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.5 }
    });
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-amber-500/50 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-amber-400 fill-amber-400" />
              </div>
              <h3 className="text-2xl font-black text-white">
                Finalizar Inscrição Promocional
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Preencha seus dados para receber o acesso imediato
              </p>
            </div>

            {/* Order Summary Box */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-semibold">Formação Eletricista + Refrigeração e Ar-Condicionado</span>
                <span className="font-mono text-slate-400 line-through">R$ {courseData.pricing.originalPrice}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-emerald-400">
                <span>+ 4 Super Brindes Exclusivos</span>
                <span className="font-bold">GRÁTIS</span>
              </div>
              <div className="flex justify-between items-center text-xs text-emerald-400">
                <span>+ Super Apostila Técnica (+250 páginas)</span>
                <span className="font-bold">INCLUSA</span>
              </div>
              <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                <span className="text-sm font-bold text-white">Total a pagar:</span>
                <span className="text-xl font-black text-amber-400 font-mono">
                  R$ {courseData.pricing.promotionalPrice}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Seu Melhor E-mail (Onde você receberá o acesso)
                </label>
                <input
                  type="email"
                  required
                  placeholder="Ex: seuemail@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Payment Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Forma de Pagamento
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition ${
                      paymentMethod === 'pix'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-400'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <QrCode className="w-4 h-4" />
                    PIX (Acesso Imediato)
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition ${
                      paymentMethod === 'card'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-400'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    Cartão em até 12x
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-4 rounded-xl btn-guru text-slate-950 font-black text-base shadow-xl hover:scale-[1.01] active:scale-[0.99] transition flex items-center justify-center gap-2 uppercase tracking-tight"
              >
                <Lock className="w-4 h-4 text-slate-950" />
                <span>CONFIRMAR INSCRIÇÃO POR R$ 99,97</span>
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 mt-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantia de 7 dias • Ambiente Seguro SSL</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            </div>

            <h3 className="text-2xl font-black text-white">
              Parabéns pela sua Decisão!
            </h3>

            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              Sua vaga promocional foi reservada com sucesso! Enviamos as instruções de login e download das apostilas para o e-mail:
            </p>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-amber-400 font-bold text-sm">
              {formData.email || 'seuemail@gmail.com'}
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl btn-guru text-slate-950 font-bold text-sm transition shadow-lg uppercase"
              >
                Acessar Plataforma de Aulas
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
