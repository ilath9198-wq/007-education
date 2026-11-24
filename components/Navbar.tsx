'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEnrollment } from './EnrollmentContext';
import LearningIndexNavigation from './LearningIndexNavigation';
import { 
  GraduationCap, 
  User, 
  ArrowRight, 
  Menu, 
  X, 
  Sparkles,
  Phone,
  BookOpen
} from 'lucide-react';

export default function Navbar() {
  const [indexOpen, setIndexOpen] = useState(false);
  const pathname = usePathname();
  const { openEnrollment, openLoginModal } = useEnrollment();

  // Active section indicator
  const getCurrentSectionTitle = () => {
    switch (pathname) {
      case '/': return 'Home';
      case '/about': return 'About Us';
      case '/academics': return 'Academics';
      case '/courses': return 'Course Catalog';
      case '/admissions': return 'Admissions';
      case '/faculty': return 'Faculty';
      case '/campus': return 'Campus & Facilities';
      case '/student-life': return 'Student Life';
      case '/results': return 'Achievements';
      case '/resources': return 'Learning Resources';
      case '/contact': return 'Contact & Desk';
      default: return 'Portal';
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        {/* Top Announcement Bar (Desktop & Tablet) */}
        <div className="hidden md:flex items-center justify-between px-6 lg:px-12 py-1.5 bg-navy-950 text-white text-[11px] font-mono tracking-wide">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-sky-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACCREDITED EXCELLENCE // SESSIONS 2026–27</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Classroom • Hybrid • Live Interactive</span>
          </div>

          <div className="flex items-center gap-5 text-slate-300">
            <a href="tel:+919876543210" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-sky-400" />
              <span>Admissions Helpline: <strong>+91 98765 43210</strong></span>
            </a>
            <span className="text-slate-600">|</span>
            <button
              onClick={openLoginModal}
              className="hover:text-sky-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <User className="w-3 h-3 text-sky-400" />
              <span>Student Portal Login</span>
            </button>
          </div>
        </div>

        {/* Main Header Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-3">
          {/* Brand Logo & Tagline */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none min-w-0"
            aria-label="EDVANCE – Education & Learning Institute"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-royal-600 to-navy-900 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
              <GraduationCap className="w-6 h-6 text-sky-300" />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-navy-900 tracking-tight uppercase group-hover:text-royal-600 transition-colors leading-none truncate">
                EDVANCE
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-medium text-slate-500 tracking-wider uppercase mt-1 truncate">
                Learn Today. Lead Tomorrow.
              </span>
            </div>
          </Link>

          {/* Center Active Section Indicator (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600">
            <span className="w-2 h-2 rounded-full bg-royal-600" />
            <span className="font-semibold text-navy-900 uppercase">{getCurrentSectionTitle()}</span>
          </div>

          {/* Right Controls: Student Portal, Apply Now, and Floating Learning Index Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            {/* Student Login Shortcut (Hidden on small mobile) */}
            <button
              onClick={openLoginModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-heading font-semibold text-slate-700 hover:text-royal-600 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-royal-600" />
              <span>Student Portal</span>
            </button>

            {/* Prominent "Apply Now" CTA Button */}
            <button
              onClick={() => openEnrollment()}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-royal-600 via-royal-700 to-navy-900 hover:from-royal-700 hover:to-navy-950 text-white font-heading font-bold text-xs sm:text-sm tracking-wide rounded-xl shadow-glow-royal transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
              <span className="whitespace-nowrap">Apply Now</span>
            </button>

            {/* Rounded Floating Academic Navigation Hamburger Control */}
            <button
              onClick={() => setIndexOpen(!indexOpen)}
              className={`flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
                indexOpen
                  ? 'bg-navy-900 text-white border-navy-900 shadow-lg'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-navy-900 border-slate-300/80 hover:border-slate-400 shadow-sm'
              }`}
              aria-label="Toggle Academic Learning Index"
              aria-expanded={indexOpen}
            >
              {indexOpen ? (
                <X className="w-4 h-4 text-sky-300 animate-spin-once" />
              ) : (
                <div className="flex flex-col gap-1 items-center justify-center">
                  <span className="block w-4 h-[2px] bg-navy-900 rounded-full" />
                  <span className="block w-3 h-[2px] bg-royal-600 rounded-full" />
                  <span className="block w-4 h-[2px] bg-navy-900 rounded-full" />
                </div>
              )}
              <span className="font-heading font-bold text-xs uppercase tracking-wider hidden sm:inline-block">
                {indexOpen ? 'Close Index' : 'Index'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* The Interactive Learning Index Unfolding Navigation Panel */}
      <LearningIndexNavigation isOpen={indexOpen} onClose={() => setIndexOpen(false)} />
    </>
  );
}
