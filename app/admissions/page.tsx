'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FileText, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  Send, 
  Sparkles, 
  Download, 
  GraduationCap,
  ChevronDown,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { useEnrollment } from '../../components/EnrollmentContext';

export default function AdmissionsPage() {
  const { openEnrollment } = useEnrollment();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    programme: 'Senior Secondary Science (IIT-JEE / NEET Integrated)',
    qualification: 'Grade 10 Completed',
    learningMode: 'On-Campus Classroom',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [ticketCode, setTicketCode] = useState('');

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.studentName.trim()) err.studentName = 'Candidate name is required.';
    if (!formData.phone.trim() || formData.phone.length < 8) err.phone = 'Valid telephone is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) err.email = 'Valid email is required.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const code = `EDV-ADM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketCode(code);
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'What is the cutoff score for the EDVANCE National Scholastic Aptitude Test (ENSAT)?',
      a: 'ENSAT is an adaptive diagnostic evaluation rather than a rigid filter. Scores above 85% qualify for our Ramanujan & Curie Merit Fellowships (up to 40% fee concession). Scores between 60% and 85% qualify for direct admission into regular and integrated batches.'
    },
    {
      q: 'Can students switch between On-Campus and Hybrid learning modes?',
      a: 'Yes. All classroom lectures are automatically captured by our 4K lecture cameras and uploaded to the student portal within 2 hours. Students can transition between classroom and hybrid participation with prior academic dean approval.'
    },
    {
      q: 'What documents are required during physical enrollment verification?',
      a: 'Candidates must present original and self-attested photocopies of their prior examination marksheets, government identity card (Aadhaar/Passport), four recent passport photographs, and a transfer/migration certificate from their previous institution.'
    },
    {
      q: 'Are hostel and transport facilities provided for outstation students?',
      a: 'Yes. Our monitored campus residences provide separate boys and girls wings, climate-controlled study rooms, high-speed Wi-Fi, 24/7 security, and wholesome balanced dining halls. Air-conditioned bus routes cover 18 zones across Delhi NCR.'
    }
  ];

  return (
    <div className="w-full">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85"
            alt="EDVANCE Student Enrollment Desk"
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
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>ADMISSIONS PORTAL // SESSIONS 2026–27</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-md">
              Admissions & Enrollment <br />
              <span className="text-royal-gradient">Guidelines & Process</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-light mb-8 drop-shadow">
              A transparent, merit-driven admission pathway ensuring prospective scholars find the exact academic cohort matching their intellectual goals.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('admission-form-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-royal-600 to-royal-500 hover:from-royal-500 hover:to-royal-400 text-white font-heading font-bold text-sm tracking-wider uppercase rounded-xl shadow-glow-royal transition-all cursor-pointer"
              >
                <span>Fill Admission Form</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-heading font-bold text-sm tracking-wider uppercase rounded-xl backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Download Prospectus</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ADMISSION ROADMAP – 4 PHASES */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-2">
              APPLICATION PROTOCOL
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              Four Steps to Enrolling at EDVANCE
            </h2>
            <div className="w-16 h-1 bg-royal-600 mx-auto mt-4 mb-6 rounded-full" />
            <p className="text-slate-600 font-sans text-base leading-relaxed">
              Our admissions cell evaluates students holistically, recognizing academic potential, extracurricular drive, and personal character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative group hover:border-royal-400 transition-all">
              <span className="w-10 h-10 rounded-xl bg-royal-600 text-white font-mono font-bold text-sm flex items-center justify-center">
                01
              </span>
              <h4 className="font-heading font-bold text-lg text-navy-900">
                Online Registration
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Submit candidate credentials and preferred academic stream via our digital registration portal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative group hover:border-royal-400 transition-all">
              <span className="w-10 h-10 rounded-xl bg-royal-600 text-white font-mono font-bold text-sm flex items-center justify-center">
                02
              </span>
              <h4 className="font-heading font-bold text-lg text-navy-900">
                Aptitude Evaluation
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Complete the ENSAT diagnostic test or schedule a stream portfolio review with faculty mentors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative group hover:border-royal-400 transition-all">
              <span className="w-10 h-10 rounded-xl bg-royal-600 text-white font-mono font-bold text-sm flex items-center justify-center">
                03
              </span>
              <h4 className="font-heading font-bold text-lg text-navy-900">
                Academic Counseling
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                In-person or virtual interview with our department head to review batch pacing and scholarship eligibility.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative group hover:border-royal-400 transition-all">
              <span className="w-10 h-10 rounded-xl bg-royal-600 text-white font-mono font-bold text-sm flex items-center justify-center">
                04
              </span>
              <h4 className="font-heading font-bold text-lg text-navy-900">
                Seat Confirmation
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Receive official offer of admission, select batch timings, collect starter kits, and access LMS credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DATES & CRITICAL TIMELINES */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-1">
              ACADEMIC CALENDAR
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-navy-900 tracking-tight">
              Important Admission Deadlines (2026–27)
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100/80 text-navy-900 font-heading font-bold border-b border-slate-200">
                  <th className="p-4 sm:p-5">Admission Cycle</th>
                  <th className="p-4 sm:p-5">Application Period</th>
                  <th className="p-4 sm:p-5">Aptitude Test Window</th>
                  <th className="p-4 sm:p-5">Scholarship Bracket</th>
                  <th className="p-4 sm:p-5">Current Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-navy-900">Early Decision Round</td>
                  <td className="p-4 sm:p-5">Nov 01 – Dec 30, 2026</td>
                  <td className="p-4 sm:p-5">Every Saturday</td>
                  <td className="p-4 sm:p-5 text-emerald-700 font-semibold">Up to 40% Merit Concession</td>
                  <td className="p-4 sm:p-5">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase">
                      OPEN NOW
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-navy-900">Regular Cycle Round 1</td>
                  <td className="p-4 sm:p-5">Jan 05 – Feb 28, 2027</td>
                  <td className="p-4 sm:p-5">Weekly Batches</td>
                  <td className="p-4 sm:p-5 text-emerald-700 font-semibold">Up to 25% Merit Concession</td>
                  <td className="p-4 sm:p-5">
                    <span className="px-2.5 py-1 rounded-full bg-royal-100 text-royal-800 text-xs font-mono font-bold uppercase">
                      UPCOMING
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-navy-900">Late & Transfer Window</td>
                  <td className="p-4 sm:p-5">March 01 – April 15, 2027</td>
                  <td className="p-4 sm:p-5">By Individual Appointment</td>
                  <td className="p-4 sm:p-5 text-slate-600">Standard Tier</td>
                  <td className="p-4 sm:p-5">
                    <span className="px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-mono font-bold uppercase">
                      SCHEDULED
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. ON-PAGE ADMISSION ENQUIRY FORM */}
      <section id="admission-form-section" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-1">
              DIRECT APPLICATION DESK
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Begin Your Admission Registration
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mt-2">
              Complete the candidate profile below. Our admissions director will issue an application registration pass within four business hours.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-md">
            {submitted ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading text-2xl font-bold text-navy-900">
                  Application Logged Successfully!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Reference Code <strong className="text-royal-700">{ticketCode}</strong> generated for candidate <strong>{formData.studentName}</strong>. Our counselors will reach you at <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-navy-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Priyanshu Sharma"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:border-royal-600 focus:outline-none"
                    />
                    {errors.studentName && <p className="text-xs text-red-600 mt-1">{errors.studentName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Parent / Guardian Name
                    </label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:border-royal-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:border-royal-600 focus:outline-none"
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. candidate@edvance.edu"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:border-royal-600 focus:outline-none"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Desired Programme
                    </label>
                    <select
                      value={formData.programme}
                      onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:border-royal-600 focus:outline-none"
                    >
                      <option value="Senior Secondary Science (IIT-JEE / NEET Integrated)">Senior Secondary Science (IIT-JEE/NEET Integrated)</option>
                      <option value="Foundational Middle Schooling (Grades 6–10)">Foundational Middle Schooling (Grades 6–10)</option>
                      <option value="Full-Stack Software Engineering Diploma">Full-Stack Software Engineering Diploma</option>
                      <option value="Artificial Intelligence & Machine Learning">Artificial Intelligence & Machine Learning</option>
                      <option value="UPSC Civil Services Foundation Fellowship">UPSC Civil Services Foundation Fellowship</option>
                      <option value="Commerce & Corporate Accountancy (CA Foundation)">Commerce & Corporate Accountancy (CA Foundation)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Mode
                    </label>
                    <select
                      value={formData.learningMode}
                      onChange={(e) => setFormData({ ...formData, learningMode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:border-royal-600 focus:outline-none"
                    >
                      <option value="On-Campus Classroom">On-Campus Classroom</option>
                      <option value="Hybrid (Classroom + Online)">Hybrid (Classroom + Online)</option>
                      <option value="Live Interactive Online">Live Interactive Online</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Special Academic Notes / Hostel Requirements
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Enter any previous entrance percentiles, scholarship requests, or bus stop preferences..."
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-sm focus:border-royal-600 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    * Required fields for priority processing
                  </span>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-glow-royal transition-all cursor-pointer flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Admission Dossier</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-1">
              ADMISSION FAQ
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-navy-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-royal-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-heading text-base sm:text-lg text-navy-900 font-bold pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-royal-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 text-xs sm:text-sm font-sans leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
