import React, { useState, useEffect } from 'react';
import { Play, Pause, Star, Volume2, CheckCircle2, Mic, Flame, Zap } from 'lucide-react';
import { courseData } from '../data/courseData';

export default function AudioTestimonials() {
  const [playingId, setPlayingId] = useState(null);
  const [progress, setProgress] = useState(0);

  const togglePlay = (id) => {
    if (playingId === id) {
      setPlayingId(null);
      setProgress(0);
    } else {
      setPlayingId(id);
      setProgress(0);
    }
  };

  useEffect(() => {
    let interval;
    if (playingId !== null) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setPlayingId(null);
            return 0;
          }
          return prev + 3;
        });
      }, 250);
    }
    return () => clearInterval(interval);
  }, [playingId]);

  return (
    <section id="depoimentos" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-400">
            <Mic className="w-4 h-4 text-red-500 animate-pulse" />
            <span>MENSAGENS DE VOZ DOS NOSSOS ALUNOS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Veja Quem Já Está <span className="text-neon-yellow">Faturando Alto</span> no Mercado
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Dê o play e ouça diretamente a experiência real de quem começou do zero e hoje é referência na sua região.
          </p>
        </div>

        {/* Audio Visual Slice Preview */}
        <div className="mb-10 max-w-md mx-auto rounded-2xl overflow-hidden border border-amber-500/40 shadow-xl bg-slate-950 p-2">
          <img
            src="/images/slice_audios.png"
            alt="Depoimentos em Áudio"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Interactive Audio Voice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseData.testimonials.map((testimonial) => {
            const isPlaying = playingId === testimonial.id;

            return (
              <div
                key={testimonial.id}
                className={`rgb-card-wrapper shadow-xl transition-all duration-300 ${
                  isPlaying ? 'scale-[1.02] ring-2 ring-amber-400' : ''
                }`}
              >
                <div className="bg-slate-950 rounded-[22px] p-5 sm:p-6 h-full flex flex-col justify-between">
                  <div>
                    {/* Header with Avatar & Name */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400"
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white leading-tight">
                            {testimonial.name}
                          </h3>
                          <p className="text-xs text-slate-400">
                            {testimonial.city}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-0.5">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Interactive Voice Player */}
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 mb-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => togglePlay(testimonial.id)}
                          className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all active:scale-95 shadow-lg ${
                            isPlaying
                              ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/30'
                              : 'bg-amber-500/20 text-amber-400 hover:bg-amber-400 hover:text-slate-950'
                          }`}
                          aria-label={isPlaying ? 'Pausar áudio' : 'Ouvir áudio'}
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5 fill-current" />
                          ) : (
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          )}
                        </button>

                        <div className="flex-1 space-y-1.5">
                          {/* Animated Waveform */}
                          <div className="flex items-center gap-0.5 h-8">
                            {testimonial.audioWave.map((height, i) => {
                              const barPercent = (i / testimonial.audioWave.length) * 100;
                              const isPassed = isPlaying && barPercent <= progress;

                              return (
                                <div
                                  key={i}
                                  className={`flex-1 rounded-full transition-all duration-150 ${
                                    isPassed
                                      ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]'
                                      : isPlaying
                                      ? 'bg-amber-500/70 animate-pulse'
                                      : 'bg-slate-700'
                                  }`}
                                  style={{
                                    height: `${isPlaying ? Math.max(20, (height * (Math.sin(Date.now()/150 + i) + 1.8)) / 2.5) : height}%`,
                                  }}
                                />
                              );
                            })}
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                            <span className="text-amber-400 font-bold flex items-center gap-1">
                              {isPlaying ? (
                                <>
                                  <Volume2 className="w-3.5 h-3.5 animate-pulse" /> Tocando Áudio
                                </>
                              ) : (
                                <span>▶ Clique para ouvir</span>
                              )}
                            </span>
                            <span>{testimonial.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Transcript */}
                    <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Aluno Formado
                    </span>
                    <span className="text-amber-400/90 font-mono">100% Verificado</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#oferta"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl btn-guru text-slate-950 font-black text-base sm:text-lg shadow-2xl btn-shimmer group uppercase"
          >
            <Zap className="w-5 h-5 fill-slate-950" />
            <span>QUERO TER ESSES MESMOS RESULTADOS</span>
          </a>
        </div>

      </div>
    </section>
  );
}
