'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Compass, 
  Laptop, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Zap,
  Wifi,
  Wind
} from 'lucide-react';
import { campusFacilities } from '../../data/academicData';
import { useEnrollment } from '../../components/EnrollmentContext';

export default function CampusPage() {
  const { openEnrollment } = useEnrollment();

  const safetyFeatures = [
    {
      title: 'HEPA Clean Air & Climate Control',
      desc: 'Central HVAC with dual-stage MERV 14 / HEPA filtration guaranteeing optimal indoor air quality and cognitive vigilance.',
      icon: Wind
    },
    {
      title: 'High-Density Optical Gigabit Wi-Fi',
      desc: 'Campus-wide redundant fiber-optic intranet supporting over 5,000 concurrent devices with low-latency access.',
      icon: Wifi
    },
    {
      title: '24/7 Monitored RFID Campus Perimeter',
      desc: 'Smart card turnstiles, CCTV security grid, and biometric hostel entry protecting student safety around the clock.',
      icon: ShieldCheck
    },
    {
      title: 'Universal Universal Accessibility',
      desc: 'Step-free tactile pathways, Braille elevator controls, and wheelchair ramps across every academic building.',
      icon: CheckCircle2
    }
  ];

  return (
    <div className="w-full">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85"
            alt="EDVANCE Main Campus Architecture"
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
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>CAMPUS INFRASTRUCTURE // SECTOR 62 NCR</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-md">
              Campus Infrastructure <br />
              <span className="text-royal-gradient">& Modern Research Facilities</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-light mb-8 drop-shadow">
              Purpose-built architectural spaces engineered for deep scientific inquiry, computing horsepower, and student wellness.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openEnrollment('Campus Infrastructure Tour')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-royal-600 to-royal-500 hover:from-royal-500 hover:to-royal-400 text-white font-heading font-bold text-sm tracking-wider uppercase rounded-xl shadow-glow-royal transition-all cursor-pointer"
              >
                <span>Schedule In-Person Campus Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('facilities-grid');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-heading font-bold text-sm tracking-wider uppercase rounded-xl backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Browse Key Facilities</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAMPUS FACILITIES SHOWCASE */}
      <section id="facilities-grid" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-2">
              LEARNING ARCHITECTURE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              Six Pillars of Campus Excellence
            </h2>
            <div className="w-16 h-1 bg-royal-600 mx-auto mt-4 mb-6 rounded-full" />
            <p className="text-slate-600 font-sans text-base leading-relaxed">
              Every square foot of EDVANCE is purposefully arranged to minimize distraction and maximize collaborative creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusFacilities.map((fac) => (
              <div
                key={fac.id}
                className="edu-card overflow-hidden bg-white flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={fac.image}
                      alt={fac.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-xs font-mono text-white font-semibold">
                      {fac.capacity}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-royal-600 font-bold block">
                      {fac.category}
                    </span>

                    <h3 className="font-heading font-bold text-xl text-navy-900 group-hover:text-royal-600 transition-colors">
                      {fac.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {fac.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                        Facility Highlights:
                      </span>
                      {fac.keyFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-700 font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => openEnrollment(`Facility Tour Inquiry: ${fac.name}`)}
                    className="w-full py-2.5 rounded-xl border border-slate-300 hover:border-royal-600 text-navy-900 hover:text-royal-600 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Tour This Facility
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SAFETY, HEALTH & ACCESSIBILITY SPECIFICATIONS */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-2">
              CAMPUS SAFETY & WELL-BEING
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              An Uncompromising Environment of Safety
            </h2>
            <div className="w-16 h-1 bg-royal-600 mx-auto mt-4 mb-6 rounded-full" />
            <p className="text-slate-600 font-sans text-base leading-relaxed">
              We maintain rigorous physical and environmental protocols to guarantee student peace of mind and complete institutional accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-navy-900">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="py-20 bg-gradient-to-r from-navy-950 to-royal-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight">
            Experience Our Laboratories First-Hand
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm font-light leading-relaxed">
            Campus walkthroughs are hosted every Tuesday, Thursday, and Saturday with prior registration. Parents and students are warmly welcomed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openEnrollment('Campus Tour Request')}
              className="px-8 py-3.5 bg-gradient-to-r from-royal-600 to-royal-500 hover:from-royal-500 hover:to-royal-400 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-glow-royal transition-all cursor-pointer"
            >
              Book In-Person Campus Walkthrough
            </button>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-heading font-bold text-xs uppercase tracking-wider rounded-xl backdrop-blur-md transition-all cursor-pointer"
            >
              Contact Campus Helpdesk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
