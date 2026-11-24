'use client';

import React, { useState } from 'react';
import { useEnrollment } from './EnrollmentContext';
import { X, Lock, User, ShieldAlert, Sparkles, BookOpen, KeyRound } from 'lucide-react';

export default function StudentLoginModal() {
  const { isLoginModalOpen, closeLoginModal } = useEnrollment();
  const [studentId, setStudentId] = useState('EDV-STU-2026-8812');
  const [password, setPassword] = useState('••••••••••');
  const [isDemoLoggedIn, setIsDemoLoggedIn] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleDemoLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDemoLoggedIn(true);
  };

  const handleReset = () => {
    setIsDemoLoggedIn(false);
    closeLoginModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-unfold">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-floating border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-navy-900 text-white flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-royal-600/30 border border-royal-400/40 flex items-center justify-center text-sky-300">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">
                Student & Scholar Portal
              </h3>
              <p className="text-xs text-sky-200 font-sans">
                EDVANCE Learning Management System
              </p>
            </div>
          </div>

          <button
            onClick={closeLoginModal}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close login modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isDemoLoggedIn ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <Sparkles className="w-7 h-7" />
              </div>
              <h4 className="font-heading text-xl font-bold text-navy-900">
                LMS Session Simulated
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                Logged in as <strong>Aaditya Sharma (ID: EDV-STU-2026-8812)</strong>. In a live deployment, this connects to your Canvas / Moodle / custom LMS API.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Active Course:</span>
                  <span className="font-semibold text-navy-900">Full-Stack Cloud Engineering</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Attendance:</span>
                  <span className="font-semibold text-emerald-600">96.4% Satisfactory</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Next Lecture:</span>
                  <span className="font-semibold text-royal-700">Tomorrow, 10:00 AM (Lab 4)</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
              >
                Log Out of Demo
              </button>
            </div>
          ) : (
            <form onSubmit={handleDemoLogin} className="space-y-4">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Demonstration Notice:</strong> Production authentication connects to institutional LDAP/SSO. Pre-filled with demonstration credentials.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Student Enrollment ID
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono focus:border-royal-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Portal Password
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:border-royal-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded text-royal-600 focus:ring-0" />
                  <span>Remember Session</span>
                </label>
                <a href="#reset" onClick={(e) => { e.preventDefault(); alert('Password reset demonstration link: In live deployment, sends OTP to student email.'); }} className="text-royal-600 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-glow-royal transition-all flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>Sign In to Student Dashboard</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
