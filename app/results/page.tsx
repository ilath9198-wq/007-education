'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Award, 
  Trophy, 
  TrendingUp, 
  CheckCircle2, 
  Star, 
  Sparkles, 
  ArrowRight, 
  Download, 
  FileText, 
  ShieldCheck,
  Building,
  GraduationCap,
  Users
} from 'lucide-react';
import { achievementsData } from '../../data/academicData';
import { useEnrollment } from '../../components/EnrollmentContext';

export default function ResultsPage() {
  const { openAdmissionModal } = useEnrollment();
  const [activeTab, setActiveTab] = useState<'all' | 'competitive' | 'placements' | 'olympiads'>('all');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownloadReport = () => {
    setDownloadNotice('Generating EDVANCE Demonstration Annual Academic Compendium (PDF)...');
    setTimeout(() => {
      setDownloadNotice('Compendium ready! In a production deployment, this downloads the official 48-page audited scholastic report.');
      setTimeout(() => setDownloadNotice(null), 4500);
    }, 1200);
  };

  const competitionHighlights = [
    {
      title: 'National Mathematics Olympiad (INMO)',
      category: 'Scholastic Olympiad',
      metric: '3 National Gold Medals',
      description: 'Our advanced mathematics problem-solving cell mentored 14 regional finalists and secured 3 top-tier all-India medals.',
      year: '2025–2026'
    },
    {
      title: 'Inter-Collegiate Cloud Hackathon (AWS Academy)',
      category: 'Technology & IT',
      metric: '1st Place Winner ($10,000 Grand Prize)',
      description: 'EDVANCE Full-Stack students engineered a disaster-resilient decentralized telemedicine mesh router in under 36 hours.',
      year: '2026'
    },
    {
      title: 'All-India Bio-Medical Scholastic Cup',
      category: 'Medical Sciences',
      metric: '18 Top 100 Ranks',
      description: 'Systematic diagnostic case simulations resulted in our highest medical entrance qualification percentage in institute history.',
      year: '2025–2026'
    },
    {
      title: 'Model United Nations & Policy Debating',
      category: 'Humanities & Leadership',
      metric: 'Best Delegation Award',
      description: 'Public administration cohorts successfully represented international socio-economic policy councils across 3 summits.',
      year: '2026'
    }
  ];

  const placementPartners = [
    { name: 'Google Cloud Platform', sector: 'Cloud Engineering' },
    { name: 'Microsoft Azure Services', sector: 'Software Architecture' },
    { name: 'Amazon Web Services', sector: 'Distributed Systems' },
    { name: 'Deloitte Consulting', sector: 'Technology Advisory' },
    { name: 'Goldman Sachs Tech', sector: 'Fintech Systems' },
    { name: 'Apollo HealthTech', sector: 'Bio-Medical Informatics' },
    { name: 'Tata Consultancy Services', sector: 'Enterprise Systems' },
    { name: 'Siemens Healthineers', sector: 'Clinical Diagnostic Tech' }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Editorial Background)
          High-contrast typography, dark gradient scrim, and prominent solid buttons
          ========================================================================= */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        {/* Full-bleed Educational Photographic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85"
            alt="EDVANCE High-Achieving Students Celebrating Success"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Deep Navy/Royal Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            {/* Academic Track Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-amber-400/60 text-amber-300 text-xs font-mono font-medium tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>SCHOLASTIC BENCHMARKS // COHORT 2025–2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md">
              Where Dedication Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200">
                Extraordinary
              </span>{' '}
              Achievement.
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              Explore the verified entrance exam ranks, higher education admissions, competition medals, and premier corporate placements accomplished by our exceptional student cohorts.
            </p>

            {/* Mandatory High-Contrast Solid CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openAdmissionModal()}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-base tracking-wide rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-navy-950 fill-current" />
                <span>Apply for Scholarship Test</span>
              </button>

              <button
                onClick={handleDownloadReport}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-navy-800/90 hover:bg-navy-800 text-white border-2 border-royal-400/60 hover:border-royal-300 font-bold text-base tracking-wide rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-5 h-5 text-amber-300" />
                <span>Download Annual Compendium</span>
              </button>
            </div>

            {/* Interactive Download Feedback Banner */}
            {downloadNotice && (
              <div className="mt-4 p-3.5 rounded-lg bg-navy-900/95 border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-medium flex items-center gap-2 backdrop-blur-md animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{downloadNotice}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          DEMONSTRATION NOTICE BANNER (Transparency & Industry Standards)
          ========================================================================= */}
      <section className="bg-amber-50 border-y border-amber-200/80 py-3.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-amber-900 font-medium">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Demonstration Website:</strong> The scholastic ranks, student narratives, and placement statistics below illustrate an enterprise education platform and represent simulated performance benchmarks.
          </span>
        </div>
      </section>

      {/* =========================================================================
          KEY SCHOLASTIC METRICS (4-Pillar Impact Overview)
          ========================================================================= */}
      <section className="py-16 -mt-8 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-lg transition-all text-center">
            <span className="text-4xl sm:text-5xl font-black text-navy-900 block mb-2">98.4%</span>
            <span className="text-xs sm:text-sm font-bold text-royal-600 uppercase tracking-wider block mb-1">Pass Ratio</span>
            <p className="text-xs text-slate-500">First-division academic distinction rate across all registered disciplines.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-lg transition-all text-center">
            <span className="text-4xl sm:text-5xl font-black text-royal-600 block mb-2">AIR 24</span>
            <span className="text-xs sm:text-sm font-bold text-royal-600 uppercase tracking-wider block mb-1">Top Competitive Rank</span>
            <p className="text-xs text-slate-500">All-India top ranking achieved in national engineering entrance examinations.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-lg transition-all text-center">
            <span className="text-4xl sm:text-5xl font-black text-amber-500 block mb-2">140+</span>
            <span className="text-xs sm:text-sm font-bold text-royal-600 uppercase tracking-wider block mb-1">Tier-1 Selections</span>
            <p className="text-xs text-slate-500">Admissions secured in premier national universities, IITs, AIIMS, and IIMs.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-lg transition-all text-center">
            <span className="text-4xl sm:text-5xl font-black text-emerald-600 block mb-2">$42,000</span>
            <span className="text-xs sm:text-sm font-bold text-royal-600 uppercase tracking-wider block mb-1">Top Tech Package</span>
            <p className="text-xs text-slate-500">Annual compensation offered to graduate cloud software engineers in 2026.</p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STUDENT ACHIEVERS SHOWCASE (Rankers & Success Stories)
          ========================================================= */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-royal-100 text-royal-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-royal-600" />
              <span>Student Laurels & Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mb-4">
              Real Dedication. Demonstrable Mastery.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Hear directly from the students whose hard work and strategic mentorship paved their pathways to premier universities and high-growth careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievementsData.map((item) => (
              <div 
                key={item.id} 
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 hover:border-royal-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 border-2 border-royal-500 shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.studentName}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 64px, 80px"
                      />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-royal-100 text-royal-800 text-[11px] font-bold tracking-wide uppercase mb-1">
                        {item.rankOrScore}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-navy-950">{item.studentName}</h3>
                      <p className="text-xs sm:text-sm text-slate-500">{item.programme} • {item.year}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed">
                      {item.quote}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified Institution Record
                  </span>
                  <span>{item.achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTER-INSTITUTE OLYMPIADS & RESEARCH COMPETITIONS
          ========================================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>National & Regional Accolades</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mb-4">
              Competitions, Hackathons & Olympiads
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Beyond standard examinations, EDVANCE encourages our learners to compete on the highest regional, national, and international stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitionHighlights.map((comp, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-royal-600 uppercase tracking-wider">{comp.category}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">{comp.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 mb-2">{comp.title}</h3>
                  <div className="inline-block px-3 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 font-bold text-sm mb-3">
                    {comp.metric}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {comp.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-royal-600">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Demonstrated Institutional Excellence</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAREER PLACEMENTS & CORPORATE RECRUITERS
          ========================================================================= */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <Building className="w-3.5 h-3.5 text-emerald-600" />
                <span>Industry Collaborations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mb-4 leading-tight">
                Empowering Career Mobility with Leading Employers.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Our curriculum development council coordinates closely with corporate partners to ensure skill readiness across cloud computing, machine learning, clinical data analysis, and enterprise software engineering.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated Career Development & Resume Advisory Cell</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mock Technical Architecture & Algorithmic Whiteboarding Rounds</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Exclusive Campus Hiring Drives with Partnering Tech Firms</span>
                </div>
              </div>

              <button
                onClick={() => openAdmissionModal()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-royal-600 hover:bg-royal-500 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Register for Placements Track</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {placementPartners.map((partner, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-royal-300 hover:shadow-md transition-all text-center flex flex-col justify-center items-center min-h-[110px]"
                  >
                    <span className="font-bold text-sm text-navy-950 block mb-1">{partner.name}</span>
                    <span className="text-[11px] text-slate-500 block">{partner.sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ADMISSION & SCHOLARSHIP CALL TO ACTION
          ========================================================================= */}
      <section className="py-20 bg-navy-950 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-900 border border-royal-500/40 text-royal-300 text-xs font-mono font-medium tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ANNUAL SCHOLARSHIP TEST • UP TO 100% MERIT FELLOWSHIP</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Be Part of Our Next Record-Setting Achievers Cohort.
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Early admissions for the 2026–2027 academic session are now open. Register online to take the diagnostic scholarship assessment and secure tuition fee concessions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openAdmissionModal()}
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-base tracking-wide rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Start Admission Application
            </button>
            <Link
              href="/courses"
              className="w-full sm:w-auto px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white border border-slate-700 font-bold text-base tracking-wide rounded-xl transition-all"
            >
              Explore All 12 Programmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
