import React from 'react';
import { PlaySquare, BookOpen, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import { courseData } from '../data/courseData';

export default function StatsCounter() {
  const iconMap = {
    PlaySquare: PlaySquare,
    BookOpen: BookOpen,
    Zap: Zap,
    TrendingUp: TrendingUp,
  };

  return (
    <section className="relative z-10 py-10 border-y border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {courseData.stats.map((item, index) => {
            const IconComponent = iconMap[item.icon] || CheckCircle;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {item.number}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
