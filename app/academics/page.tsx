'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Laptop,
  Briefcase
} from 'lucide-react';
import { academicProgrammes } from '../../data/academicData';
import { useEnrollment } from '../../components/EnrollmentContext';

export default function AcademicsPage() {
  const { openEnrollment } = useEnrollment();

  return (
    <div className="w-full">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=85"
            alt="EDVANCE Academic Lecture Hall"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Deep Navy/Royal Gradient Scrims for maximum contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-950/80 border border-royal-400/50 text-sky-300 text-xs font-mono tracking-widest uppercase mb-4 backdrop-blur-md">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>ACADEMIC DISCIPLINES // PATHWAYS OVERVIEW</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-md">
              Structured Academic Curricula <br />
              <span className="text-royal-gradient">& Future-Ready Pathways</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-light mb-8 drop-shadow">
              From foundational middle schooling and senior secondary sciences to competitive national entrance coaching and career technology diplomas.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openEnrollment('Academic Curricula Inquiry')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-royal-600 to-royal-500 hover:from-royal-500 hover:to-royal-400 text-white font-heading font-bold text-sm tracking-wider uppercase rounded-xl shadow-glow-royal transition-all cursor-pointer"
              >
                <span>Request Detailed Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-heading font-bold text-sm tracking-wider uppercase rounded-xl backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Explore 12 Courses</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEMONSTRATION ACCREDITATION NOTICE */}
      <section className="bg-amber-50 border-b border-amber-200 py-3.5 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-xs text-amber-900 font-sans font-medium">
          <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            Demonstration Disclaimer: All academic degree paths and integrated diplomas presented below represent realistic educational frameworks developed for this institutional demonstration.
          </span>
        </div>
      </section>

      {/* 3. DETAILED PROGRAMMES CATALOG */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-2">
              CURRICULAR MATRIX
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              Six Specialized Academic Streams
            </h2>
            <div className="w-16 h-1 bg-royal-600 mx-auto mt-4 mb-6 rounded-full" />
            <p className="text-slate-600 font-sans text-base leading-relaxed">
              Designed to meet learners at their exact developmental stage, pairing rigorous classroom discourse with practical lab inquiry.
            </p>
          </div>

          <div className="space-y-12">
            {academicProgrammes.map((prog, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={prog.id}
                  className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 hover:border-royal-300 transition-all shadow-sm hover:shadow-card-hover"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Media Column */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                      <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                        <Image
                          src={prog.image}
                          alt={prog.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-4 text-xs font-mono text-white font-semibold flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>{prog.duration}</span>
                        </span>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 rounded-full bg-royal-100 text-royal-700 text-xs font-mono font-bold uppercase">
                            {prog.category}
                          </span>
                        </div>
                        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-900 tracking-tight leading-snug">
                          {prog.title}
                        </h3>
                      </div>

                      <p className="text-slate-600 text-sm leading-relaxed font-sans">
                        {prog.overview}
                      </p>

                      <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs">
                        <span className="font-bold text-navy-900 uppercase tracking-wider block font-mono text-[11px]">
                          Key Curricular Features:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 font-sans">
                          {prog.coreHighlights.map((hl, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                        <span className="text-slate-500 font-semibold">Typical Progression:</span>
                        {prog.careerPaths.map((cp, cIdx) => (
                          <span key={cIdx} className="px-2.5 py-1 bg-slate-200/80 rounded-md text-slate-700 font-mono text-[11px]">
                            {cp}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <button
                          onClick={() => openEnrollment(prog.title)}
                          className="px-6 py-3 bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-glow-royal transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          <span>Enquire About Admissions</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs text-slate-500 font-mono self-center">
                          Eligibility: {prog.eligibility}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC ADVISORY CALLOUT */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <GraduationCap className="w-10 h-10 text-royal-600 mx-auto" />
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Need Guidance Selecting the Right Programme?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm font-sans leading-relaxed">
            Our academic deans offer complimentary psychometric mapping and stream consultation sessions to help students align their strengths with university goals.
          </p>
          <button
            onClick={() => openEnrollment('Academic Counselling Session')}
            className="px-8 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
          >
            Schedule Academic Counselling
          </button>
        </div>
      </section>
    </div>
  );
}
