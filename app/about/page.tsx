'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Users, 
  Award, 
  GraduationCap, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';
import { useEnrollment } from '../../components/EnrollmentContext';

export default function AboutPage() {
  const { openEnrollment } = useEnrollment();

  const coreValues = [
    {
      title: 'Pedagogical Integrity',
      desc: 'We prioritize conceptual foundations over superficial shortcuts. Students learn the origins, mathematical proofs, and real-world implications of every concept.',
      icon: ShieldCheck
    },
    {
      title: 'Intellectual Inclusivity',
      desc: 'Every student has a distinct cognitive rhythm. Our small teacher-to-student ratios and individual doubt sessions ensure no aspiring mind is left behind.',
      icon: Users
    },
    {
      title: 'Experimental Immersion',
      desc: 'Knowledge solidifies when theory meets practical execution. Over 40% of our curriculum takes place inside laboratories, maker studios, and computational clusters.',
      icon: Compass
    },
    {
      title: 'Ethical Leadership',
      desc: 'We cultivate scholars who understand societal responsibility, scientific ethics, and character governance, preparing them to lead with empathy and moral courage.',
      icon: HeartHandshake
    }
  ];

  return (
    <div className="w-full">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85"
            alt="EDVANCE University Campus Students"
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
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>INSTITUTIONAL OVERVIEW // FOUNDED 2012</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-md">
              Our Academic Heritage <br />
              <span className="text-royal-gradient">& Institutional Purpose</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-light mb-8 drop-shadow">
              Fostering intellectual courage, scientific rigor, and disciplined character across generations of learners, thinkers, and visionary community leaders.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openEnrollment('Institutional Information Request')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-royal-600 to-royal-500 hover:from-royal-500 hover:to-royal-400 text-white font-heading font-bold text-sm tracking-wider uppercase rounded-xl shadow-glow-royal transition-all cursor-pointer"
              >
                <span>Request Institution Prospectus</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/academics"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-heading font-bold text-sm tracking-wider uppercase rounded-xl backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Explore Curricular Streams</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL STORY & FOUNDING NARRATIVE */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block">
                THE FOUNDING STORY
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                From a Rigorous Mentorship Circle to a Multidisciplinary Academy
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-sans">
                Founded in 2012 by a collective of university professors and former researchers, **EDVANCE – Education & Learning Institute** was established to address a chronic defect in conventional coaching: the excessive reliance on rote formula memorization at the expense of authentic scientific understanding.
              </p>
              <p className="text-slate-600 text-base leading-relaxed font-sans">
                Over the past fourteen years, EDVANCE has grown into a comprehensive campus spanning secondary foundational education, integrated junior college sciences, competitive national entrance divisions, and professional computer science bootcamps. Our pedagogy is rooted in empirical problem-solving, cognitive scaffolding, and compassionate academic guidance.
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-royal-100 text-royal-700 flex items-center justify-center font-bold">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-navy-900">Institutional Vision</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    To be the foremost center of academic transformation, where rigorous pedagogy and human character unite to produce global pioneers.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-royal-100 text-royal-700 flex items-center justify-center font-bold">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-navy-900">Institutional Mission</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Equipping learners with enduring cognitive frameworks, state-of-the-art laboratory access, and personalized mentorship to achieve excellence without burnout.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Side Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200 shadow-card-hover bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85"
                  alt="Faculty teaching in lecture hall"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="text-[10px] font-mono tracking-widest text-sky-300 uppercase block mb-1">
                    EXPERIENTIAL CLASSROOM DISCOURSE
                  </span>
                  <p className="font-heading font-bold text-lg">
                    Small Pod Seminars Led by Master Educators
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE INSTITUTIONAL VALUES */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-2">
              ACADEMIC FOUNDATIONS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              Our Core Institutional Values
            </h2>
            <div className="w-16 h-1 bg-royal-600 mx-auto mt-4 mb-6 rounded-full" />
            <p className="text-slate-600 font-sans text-base leading-relaxed">
              These four unyielding principles govern our faculty recruitment, curriculum development, and student evaluations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-royal-400 transition-all hover:shadow-card-hover group">
                  <div className="w-12 h-12 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center mb-6 group-hover:bg-royal-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TEACHING METHODOLOGY SYSTEM */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-2">
              THE EDVANCE PEDAGOGY
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              The 4-Stage Cognitive Mastery Model
            </h2>
            <p className="text-slate-600 font-sans text-base mt-4 leading-relaxed">
              Every course unit is systematically deployed across four pedagogical milestones to guarantee deep comprehension and long-term retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-navy-900 text-sky-300 font-mono font-bold text-sm flex items-center justify-center">
                01
              </span>
              <h4 className="font-heading font-bold text-lg text-navy-900">
                Intuitive Exposition
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Concepts are introduced through historical context, physical real-world analogies, and visual simulations before mathematical formalism.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-navy-900 text-sky-300 font-mono font-bold text-sm flex items-center justify-center">
                02
              </span>
              <h4 className="font-heading font-bold text-lg text-navy-900">
                Guided Scaffolding
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Students solve escalating problem sheets in small cohorts alongside teaching assistants, exposing flawed assumptions early.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-navy-900 text-sky-300 font-mono font-bold text-sm flex items-center justify-center">
                03
              </span>
              <h4 className="font-heading font-bold text-lg text-navy-900">
                Laboratory Practical
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Knowledge is verified in high-tech laboratories, software sandboxes, or clinical diagram exercises, transforming theory into muscle memory.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-navy-900 text-sky-300 font-mono font-bold text-sm flex items-center justify-center">
                04
              </span>
              <h4 className="font-heading font-bold text-lg text-navy-900">
                Diagnostic Mastery
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Timed computerized benchmarks provide detailed topic-level analytics, directing individual attention directly to weak cognitive links.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="py-20 bg-gradient-to-r from-navy-950 to-royal-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight">
            Meet Our Leadership & Faculty in Person
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base font-light leading-relaxed">
            We welcome parents, prospective scholars, and working professionals to tour our laboratories, audit a sample seminar, and consult our academic directors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openEnrollment('Campus Tour & Counseling')}
              className="px-8 py-3.5 bg-gradient-to-r from-royal-600 to-royal-500 hover:from-royal-500 hover:to-royal-400 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-glow-royal transition-all cursor-pointer"
            >
              Book Personal Campus Tour
            </button>
            <Link
              href="/faculty"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-heading font-bold text-xs uppercase tracking-wider rounded-xl backdrop-blur-md transition-all cursor-pointer"
            >
              View Faculty Credentials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
