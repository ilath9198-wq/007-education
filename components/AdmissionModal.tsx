'use client';

import React, { useState } from 'react';
import { useEnrollment } from './EnrollmentContext';
import { X, CheckCircle2, ShieldCheck, GraduationCap, Send, Phone, Mail, Calendar, Sparkles } from 'lucide-react';

export default function AdmissionModal() {
  const { isModalOpen, closeEnrollment, selectedCourse } = useEnrollment();
  const [submitted, setSubmitted] = useState(false);
  const [ticketCode, setTicketCode] = useState('');

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    programme: selectedCourse,
    qualification: 'Senior Secondary (10+2)',
    learningMode: 'Hybrid (Classroom + Online)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync when selectedCourse updates
  React.useEffect(() => {
    setFormData((prev) => ({ ...prev, programme: selectedCourse }));
  }, [selectedCourse]);

  if (!isModalOpen) return null;

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.studentName.trim()) err.studentName = 'Student name is required.';
    if (!formData.phone.trim() || formData.phone.length < 8) err.phone = 'Valid phone number is required.';
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

  const handleReset = () => {
    setSubmitted(false);
    closeEnrollment();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello EDVANCE Admissions! I have registered online for ${formData.programme}. My Application Reference Ticket is #${ticketCode}. Name: ${formData.studentName}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-unfold">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-floating border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-navy-900 to-navy-800 text-white flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-royal-600/30 border border-royal-400/40 flex items-center justify-center text-sky-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                EDVANCE Admission & Scholarship Desk
              </h3>
              <p className="text-xs text-sky-200 font-sans">
                Academic Year 2026–27 // Fast-Track Application
              </p>
            </div>
          </div>

          <button
            onClick={closeEnrollment}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-royal-600 font-mono font-bold block mb-1">
                  APPLICATION FILED SUCCESSFULLY
                </span>
                <h4 className="font-heading text-2xl font-bold text-navy-900">
                  Welcome to EDVANCE, {formData.studentName}!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                  Your admission enquiry for <strong className="text-navy-900">{formData.programme}</strong> has been logged in our academic registration database.
                </p>
              </div>

              {/* Ticket Card */}
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl max-w-md mx-auto text-left space-y-2">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-xs text-slate-500 font-mono">Application Reference</span>
                  <span className="font-mono font-bold text-royal-700 text-base">{ticketCode}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Learning Mode:</span>
                  <span className="font-semibold">{formData.learningMode}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Candidate Phone:</span>
                  <span className="font-semibold">{formData.phone}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Admissions Contact:</span>
                  <span className="font-semibold text-emerald-700">Within 4 Business Hours</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>Connect with WhatsApp Counselor</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Close & Explore Portal
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-royal-50 border border-royal-200 rounded-xl text-xs text-royal-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-royal-600 shrink-0" />
                <span>
                  <strong>Admissions Open:</strong> Applying for{' '}
                  <span className="underline font-bold">{formData.programme}</span>. Merit scholarship tests available.
                </span>
              </div>

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
                    placeholder="e.g. Aaditya Sharma"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:border-royal-600 focus:bg-white focus:outline-none"
                  />
                  {errors.studentName && <p className="text-xs text-red-600 mt-1">{errors.studentName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Parent / Guardian Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Suresh Sharma"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:border-royal-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:border-royal-600 focus:bg-white focus:outline-none"
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
                    placeholder="e.g. student@edvance.edu"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:border-royal-600 focus:bg-white focus:outline-none"
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Current Qualification
                  </label>
                  <select
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:border-royal-600 focus:bg-white focus:outline-none"
                  >
                    <option value="Middle School (Grade 6–8)">Middle School (Grade 6–8)</option>
                    <option value="Secondary (Grade 9–10)">Secondary (Grade 9–10)</option>
                    <option value="Senior Secondary (10+2)">Senior Secondary (10+2)</option>
                    <option value="Undergraduate Degree">Undergraduate Degree</option>
                    <option value="Graduate / Working Professional">Graduate / Working Professional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Learning Mode
                  </label>
                  <select
                    value={formData.learningMode}
                    onChange={(e) => setFormData({ ...formData, learningMode: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:border-royal-600 focus:bg-white focus:outline-none"
                  >
                    <option value="Hybrid (Classroom + Online)">Hybrid (Classroom + Online)</option>
                    <option value="On-Campus Classroom">On-Campus Classroom</option>
                    <option value="Live Interactive Online">Live Interactive Online</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Learning Objectives or Queries
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention any target entrance exams, batch timing preferences, or hostel requirements..."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:border-royal-600 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 p-2.5 bg-slate-100 rounded-xl text-[11px] text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Confidential admissions process. Demonstration platform only.</span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeEnrollment}
                  className="px-5 py-2.5 text-xs text-slate-600 hover:text-slate-900 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-glow-royal transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
