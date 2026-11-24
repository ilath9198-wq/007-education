'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { academicNavigation } from '../data/academicData';
import { useEnrollment } from './EnrollmentContext';
import { 
  Home, 
  ShieldCheck, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Users, 
  Compass, 
  Sparkles, 
  Award, 
  Download, 
  Phone,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  X
} from 'lucide-react';

interface LearningIndexProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LearningIndexNavigation({ isOpen, onClose }: LearningIndexProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const { openEnrollment, openLoginModal } = useEnrollment();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Icon mapping helper
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-4 h-4" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4" />;
      case 'FileText': return <FileText className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Compass': return <Compass className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Award': return <Award className="w-4 h-4" />;
      case 'Download': return <Download className="w-4 h-4" />;
      case 'Phone': return <Phone className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed inset-0 z-40 bg-navy-950/40 backdrop-blur-sm transition-opacity">
      {/* Dropdown Container: Centered on mobile, floating aligned below header on desktop */}
      <div 
        ref={menuRef}
        className="absolute top-20 sm:top-24 right-4 sm:right-8 md:right-12 w-[calc(100vw-2rem)] sm:w-[480px] md:w-[560px] max-h-[82vh] bg-white rounded-2xl shadow-floating border border-slate-200/90 overflow-hidden flex flex-col animate-unfold"
        role="dialog"
        aria-label="Interactive Learning Index"
      >
        {/* Index Header Banner */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-800 text-white flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-royal-600/30 border border-royal-400/40 flex items-center justify-center text-sky-300">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-sm tracking-wide text-white">
                  ACADEMIC LEARNING INDEX
                </span>
                <span className="px-2 py-0.5 rounded-full bg-royal-500/20 text-sky-300 text-[10px] font-mono border border-royal-400/30">
                  11 SECTIONS
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-sans">
                Curriculum, Institutional Governance & Portals
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close Learning Index"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Highlighted Admissions Open Ribbon */}
        <div className="px-4 sm:px-5 py-2.5 bg-royal-50 border-b border-royal-100 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-royal-900 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Admissions Open (2026–27 Academic Session)</span>
          </div>

          <button
            onClick={() => {
              onClose();
              openEnrollment();
            }}
            className="text-[11px] font-bold uppercase tracking-wider text-royal-700 hover:text-royal-900 underline flex items-center gap-1"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Scrollable Numbered Academic Sections List */}
        <div className="p-3 sm:p-4 overflow-y-auto flex-1 divide-y divide-slate-100 space-y-1">
          {academicNavigation.map((sec) => {
            const isActive = pathname === sec.path;

            return (
              <Link
                key={sec.num}
                href={sec.path}
                onClick={onClose}
                className={`group flex items-center gap-3.5 p-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-royal-50 text-royal-900 border border-royal-200 shadow-sm font-semibold'
                    : 'hover:bg-slate-50 text-slate-700 hover:text-navy-950'
                }`}
              >
                {/* Number & Code Badge */}
                <div className={`w-10 h-10 rounded-xl flex flex-col items-center justify-center shrink-0 border transition-colors ${
                  isActive
                    ? 'bg-royal-600 text-white border-royal-500'
                    : 'bg-slate-100 group-hover:bg-royal-100 text-slate-600 group-hover:text-royal-800 border-slate-200 group-hover:border-royal-300'
                }`}>
                  <span className="font-mono font-bold text-xs leading-none">{sec.num}</span>
                  <span className="text-[8px] font-mono opacity-80">{sec.code.replace('SEC-', '')}</span>
                </div>

                {/* Title & Description */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-royal-600 group-hover:scale-110 transition-transform">
                      {renderIcon(sec.icon)}
                    </span>
                    <span className={`text-sm font-heading font-bold tracking-tight truncate ${
                      isActive ? 'text-royal-900' : 'text-navy-900 group-hover:text-royal-700'
                    }`}>
                      {sec.title}
                    </span>
                    {isActive && (
                      <span className="ml-auto px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-royal-200/60 text-royal-800 font-bold">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5 font-sans">
                    {sec.desc}
                  </p>
                </div>

                {!isActive && (
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-royal-600 group-hover:translate-x-1 transition-all shrink-0 ml-1" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Index Footer Shortcuts: Student Login & Fast Enquiry */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2 text-xs">
          <button
            onClick={() => {
              onClose();
              openLoginModal();
            }}
            className="flex items-center gap-1.5 px-3 py-2 text-slate-700 hover:text-navy-950 font-medium hover:bg-slate-200/60 rounded-lg transition-colors"
          >
            <Lock className="w-3.5 h-3.5 text-royal-600" />
            <span>Student Portal Login</span>
          </button>

          <button
            onClick={() => {
              onClose();
              openEnrollment('General Admission Fast-Track');
            }}
            className="px-4 py-2 bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all"
          >
            Quick Enquiry
          </button>
        </div>
      </div>
    </div>
  );
}
