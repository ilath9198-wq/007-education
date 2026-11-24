'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Send, 
  ArrowRight,
  ShieldCheck,
  Building,
  Navigation,
  Compass
} from 'lucide-react';
import { useEnrollment } from '../../components/EnrollmentContext';

export default function ContactPage() {
  const { openAdmissionModal } = useEnrollment();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: 'Competitive Examinations (IIT-JEE / NEET)',
    mode: 'Hybrid (Classroom + Online)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      const generatedTicket = `EDV-ENQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedTicket);
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interest: 'Competitive Examinations (IIT-JEE / NEET)',
      mode: 'Hybrid (Classroom + Online)',
      message: ''
    });
    setSubmitted(false);
    setTicketId('');
  };

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
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=85"
            alt="EDVANCE Central Administration & Campus Welcome Center"
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-900/80 border border-royal-400/50 text-royal-200 text-xs font-mono font-medium tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>CAMPUS ADMISSIONS & COUNSELING DESK</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md">
              Connect with the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200">
                EDVANCE
              </span>{' '}
              Academic Community.
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              Whether you are evaluating diploma curricula, booking an in-person campus laboratory tour, or seeking admission counseling, our academic advisors are ready to assist you.
            </p>

            {/* Mandatory High-Contrast Solid CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#enquiry-form"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-base tracking-wide rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Send className="w-5 h-5 text-navy-950" />
                <span>Submit Admission Enquiry</span>
              </a>

              <a
                href="https://wa.me/919876543210?text=Hello%20EDVANCE%20Admissions%20Team%2C%20I%20would%20like%20to%20enquire%20about%202026%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base tracking-wide rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>WhatsApp Counselor Desk</span>
              </a>
            </div>
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
            <strong>Demonstration Website:</strong> EDVANCE is an industry-specific demonstration institute. The contact phone numbers and email addresses below are simulated for demonstration purposes.
          </span>
        </div>
      </section>

      {/* =========================================================================
          KEY CONTACT CHANNELS (4 Institutional Cards)
          ========================================================================= */}
      <section className="py-16 -mt-8 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-navy-950 mb-1">Campus Location</h3>
            <p className="text-xs text-slate-500 mb-3">Institutional Knowledge Hub</p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Edvance Knowledge Park, Sector 62, Institutional Area, Electronic City Phase 1, Bangalore – 560100
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-navy-950 mb-1">Direct Helplines</h3>
            <p className="text-xs text-slate-500 mb-3">Toll-Free & Direct Desk</p>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium">
              <p>Admissions: <span className="font-bold text-royal-600">+91 80 4912 8800</span></p>
              <p>Academic Desk: <span className="font-bold text-navy-900">+91 80 4912 8810</span></p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-navy-950 mb-1">Official Email</h3>
            <p className="text-xs text-slate-500 mb-3">Response within 24 Hours</p>
            <div className="space-y-1 text-xs sm:text-sm text-slate-700 font-medium">
              <p className="truncate">admissions@edvance-institute.edu.in</p>
              <p className="truncate">academic.office@edvance-institute.edu.in</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-navy-950 mb-1">Counseling Hours</h3>
            <p className="text-xs text-slate-500 mb-3">In-Person & Virtual Appointments</p>
            <div className="space-y-1 text-xs sm:text-sm text-slate-700">
              <p><strong>Mon – Sat:</strong> 8:30 AM – 6:30 PM</p>
              <p><strong>Sunday:</strong> 10:00 AM – 2:00 PM (By Prior Booking)</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE ENQUIRY FORM & CAMPUS TOUR BOOKING
          ========================================================================= */}
      <section id="enquiry-form" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column (Span 7) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-royal-100 text-royal-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <Send className="w-3.5 h-3.5 text-royal-600" />
                <span>Direct Inquiry Channel</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mb-3">
                Send an Admission or Course Inquiry
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Complete the form below to receive a personalized curriculum syllabus, fee schedule, and scholarship eligibility review from our academic counselors.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 animate-fadeIn">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Inquiry Successfully Registered!</h3>
                      <p className="text-xs text-emerald-700">Reference Ticket ID: <strong className="font-mono text-emerald-900">{ticketId}</strong></p>
                    </div>
                  </div>
                  <p className="text-sm text-emerald-800 leading-relaxed mb-6">
                    Thank you, <strong>{formData.fullName}</strong>. Your inquiry regarding <em>{formData.interest}</em> has been logged in the EDVANCE admissions system. Our academic advising desk will reach out to <strong>{formData.email}</strong> within 1 business day.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={`https://wa.me/919876543210?text=Hello%20EDVANCE%2C%20I%20have%20submitted%20inquiry%20ticket%20${ticketId}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs transition-all"
                    >
                      Track on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Student / Applicant Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Priyanshu Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-royal-500 text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. priyanshu@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-royal-500 text-sm text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Contact Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-royal-500 text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Preferred Learning Mode
                      </label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-royal-500 text-sm text-slate-800 bg-white"
                      >
                        <option value="Hybrid (Classroom + Online)">Hybrid (Classroom + Online)</option>
                        <option value="On-Campus Classroom">On-Campus Classroom</option>
                        <option value="Live Interactive Online">Live Interactive Online</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Academic Programme / Discipline of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-royal-500 text-sm text-slate-800 bg-white"
                    >
                      <option value="Competitive Examinations (IIT-JEE / NEET)">Competitive Examinations (IIT-JEE / NEET)</option>
                      <option value="Full-Stack Software Engineering & Cloud">Full-Stack Software Engineering & Cloud</option>
                      <option value="Artificial Intelligence & Data Engineering">Artificial Intelligence & Data Engineering</option>
                      <option value="Corporate Finance & Executive MBA">Corporate Finance & Executive MBA</option>
                      <option value="Biotechnology & Clinical Sciences">Biotechnology & Clinical Sciences</option>
                      <option value="Global Language Mastery (IELTS / German)">Global Language Mastery (IELTS / German)</option>
                      <option value="Foundation & Secondary Schooling">Foundation & Secondary Schooling</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Specific Questions or Educational Goals (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention your current qualification, target examination year, or any specific scholarship questions..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-royal-500 text-sm text-slate-800"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-royal-600 hover:bg-royal-500 text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <Send className="w-5 h-5" />
                    <span>{loading ? 'Submitting Inquiry...' : 'Submit Admission Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Campus Walking Tour & Visit Column (Span 5) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>Personalized Campus Visits</span>
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-2">
                  Experience Our High-Tech Campus Firsthand
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  We invite prospective students and parents for guided 45-minute walkthroughs covering our IoT computer laboratories, chemistry research pods, and digital lecture amphitheatres.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0" />
                    <span>One-on-one consultation with department chairs</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0" />
                    <span>Live lab demonstration & learning tech trials</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0" />
                    <span>Instant on-spot document verification & review</span>
                  </div>
                </div>

                <button
                  onClick={() => openAdmissionModal()}
                  className="w-full py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider shadow transition-all cursor-pointer"
                >
                  Schedule Guided Campus Tour
                </button>
              </div>

              {/* Transit & Accessibility Box */}
              <div className="p-6 rounded-2xl bg-royal-50/60 border border-royal-200/80">
                <div className="flex items-center gap-2 mb-2 text-royal-900 font-bold text-sm">
                  <Navigation className="w-4 h-4 text-royal-600" />
                  <span>Transit & Location Directions</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Located right on the main Institutional Boulevard. <strong>Metro Blue Line:</strong> Knowledge Park Station (Exit 2, 400m walk). <strong>Direct Airport Shuttle:</strong> Operates hourly from Terminal 1 & 2.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS LOCATION MAP & SATELLITE OVERVIEW
          ========================================================================= */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-royal-600 uppercase tracking-widest block mb-2">CAMPUS GEO-LOCATION</span>
                  <h3 className="text-2xl font-bold text-navy-950 mb-4">Finding Your Way to EDVANCE</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Our campus is built in the central institutional tech cluster, ensuring safe, green, well-lit surroundings with 24-hour campus security and automated visitor registration.
                  </p>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                    <p><strong>GPS Coordinates:</strong> 12.8452° N, 77.6602° E</p>
                    <p><strong>Visitor Parking:</strong> North Gate Multi-Level Facility</p>
                    <p><strong>Campus Security Desk:</strong> Gate 1 & Gate 3</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 mt-6">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-royal-600 hover:text-royal-500 uppercase tracking-wider"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-8 relative min-h-[360px] sm:min-h-[420px] bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=85"
                  alt="EDVANCE Main Campus Grounds Aerial View"
                  fill
                  className="object-cover opacity-85"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                  <div className="bg-navy-900/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-700 max-w-md text-white">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase mb-1">
                      <Building className="w-4 h-4" />
                      <span>Main Academic Quadrangle</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Administrative Block, Lecture Complexes A & B, High-Performance Computing Laboratory, and Central Reading Commons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
