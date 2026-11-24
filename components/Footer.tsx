'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useEnrollment } from './EnrollmentContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { openEnrollment } = useEnrollment();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      {/* Top Value Banner */}
      <div className="bg-navy-900 border-b border-navy-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-royal-600/20 border border-royal-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white">
                Learn Today. Lead Tomorrow.
              </h4>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Empowering next-generation innovators, researchers, and civil leaders.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-slate-300">
            <div>
              <span className="font-heading font-bold text-xl text-white block">24,000+</span>
              <span className="text-[11px] text-slate-400 font-mono">Alumni Worldwide</span>
            </div>
            <div className="w-px h-8 bg-navy-700" />
            <div>
              <span className="font-heading font-bold text-xl text-sky-400 block">98.4%</span>
              <span className="text-[11px] text-slate-400 font-mono">Graduation Success</span>
            </div>
            <div className="w-px h-8 bg-navy-700" />
            <div>
              <span className="font-heading font-bold text-xl text-amber-400 block">45+</span>
              <span className="text-[11px] text-slate-400 font-mono">Industry Patrons</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <button
              onClick={() => openEnrollment()}
              className="px-6 py-3 bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-glow-royal transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Apply for 2026 Admissions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-royal-600 text-white flex items-center justify-center font-bold shadow-md">
                <GraduationCap className="w-5 h-5 text-sky-200" />
              </div>
              <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                EDVANCE
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed font-sans pr-6">
              EDVANCE is an industry-benchmark educational institution providing comprehensive academic coaching, foundational schooling, higher secondary streams, competitive examination prep, and vocational technology training.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>EDVANCE Main Campus, Knowledge Park Corridor, Sector 62, New Delhi NCR – 201309</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Admissions: +91 98765 43210 / Support: +91 98765 43211</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>admissions@edvance.edu.in / info@edvance.edu.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Monday – Saturday: 8:00 AM – 7:00 PM (IST)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Academic Portals */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Academic Hubs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home Portal</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us & Heritage</Link></li>
              <li><Link href="/academics" className="hover:text-white transition-colors">Academic Programmes</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">12-Course Catalogue</Link></li>
              <li><Link href="/faculty" className="hover:text-white transition-colors">Faculty & Research Mentors</Link></li>
              <li><Link href="/campus" className="hover:text-white transition-colors">Campus & Modern Labs</Link></li>
            </ul>
          </div>

          {/* Col 3: Student & Admissions */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Admissions & Student
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/admissions" className="hover:text-white transition-colors">Admission Overview</Link></li>
              <li><Link href="/student-life" className="hover:text-white transition-colors">Student Life & Societies</Link></li>
              <li><Link href="/results" className="hover:text-white transition-colors">Results & Rankings (Demo)</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Study Vault & Sample Papers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Admissions Helpdesk</Link></li>
              <li><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">WhatsApp Counselor</a></li>
            </ul>
          </div>

          {/* Col 4: Academic Circulars & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Stay Informed
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe for official examination circulars, scholarship test deadlines, and campus news.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! You are subscribed to EDVANCE circulars.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-3.5 py-2.5 bg-navy-900 border border-navy-700 rounded-xl text-xs text-white placeholder-slate-500 focus:border-royal-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-royal-600 hover:bg-royal-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-royal-400 shrink-0" />
            <span>
              Demonstration Platform Notice: EDVANCE is an industry-specific digital demonstration for schools, coaching, and skill institutions. All achievements, rankings, and student profiles are fictional demonstration content.
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span>© 2026 EDVANCE Institute. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
