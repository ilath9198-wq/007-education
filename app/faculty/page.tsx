'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  Search,
  Mail,
  Calendar
} from 'lucide-react';
import { facultyData, FacultyMember } from '../../data/academicData';
import { useEnrollment } from '../../components/EnrollmentContext';

export default function FacultyPage() {
  const { openEnrollment } = useEnrollment();
  const [activeDept, setActiveDept] = useState<string>('all');

  const departments = [
    { key: 'all', label: 'All Faculty (6)' },
    { key: 'Computer Science & IT', label: 'Computing & AI' },
    { key: 'Competitive Examinations', label: 'Competitive Exams' },
    { key: 'Science & Engineering', label: 'Physics & Sciences' },
    { key: 'Languages & Communication', label: 'Languages' },
    { key: 'Commerce & Management', label: 'Commerce & Finance' },
    { key: 'Skill Development & Vocations', label: 'Robotics & Skills' },
  ];

  const filteredFaculty = activeDept === 'all'
    ? facultyData
    : facultyData.filter((f) => f.department === activeDept);

  return (
    <div className="w-full">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=85"
            alt="EDVANCE Academic Faculty in Lecture Hall"
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
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span>ACADEMIC FACULTY // RESEARCH MENTORS</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-md">
              Distinguished Faculty <br />
              <span className="text-royal-gradient">& Research Mentors</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-light mb-8 drop-shadow">
              Doctorate holders, published researchers, and seasoned technology practitioners devoted to individualized student mastery.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openEnrollment('Faculty Mentorship Request')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-royal-600 to-royal-500 hover:from-royal-500 hover:to-royal-400 text-white font-heading font-bold text-sm tracking-wider uppercase rounded-xl shadow-glow-royal transition-all cursor-pointer"
              >
                <span>Book Faculty Mentorship Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/academics"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-heading font-bold text-sm tracking-wider uppercase rounded-xl backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Browse Curricular Streams</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DEMONSTRATION NOTICE */}
      <section className="bg-amber-50 border-b border-amber-200 py-3.5 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-xs text-amber-900 font-sans font-medium">
          <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            Demonstration Disclaimer: All faculty profiles, academic achievements, and biographies presented on this page are fictional demonstration representations created to showcase institutional faculty presentation capabilities.
          </span>
        </div>
      </section>

      {/* 3. DEPARTMENT FILTER BAR */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-18 sm:top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
            {departments.map((dept) => {
              const isActive = activeDept === dept.key;
              return (
                <button
                  key={dept.key}
                  onClick={() => setActiveDept(dept.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-royal-600 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {dept.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FACULTY PROFILES GRID */}
      <section className="py-20 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((member) => (
              <div
                key={member.id}
                className="edu-card overflow-hidden bg-white flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-navy-900/90 text-sky-300 border border-royal-500/40 backdrop-blur-md">
                      {member.department}
                    </span>
                    <span className="absolute bottom-3 left-4 text-xs font-mono text-white font-semibold">
                      {member.experience}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-navy-900 group-hover:text-royal-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs text-royal-700 font-semibold font-sans mt-0.5">
                        {member.title}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                      {member.bio}
                    </p>

                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                        Areas of Expertise:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.areasOfExpertise.map((exp, eIdx) => (
                          <span
                            key={eIdx}
                            className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-medium"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => openEnrollment(`Faculty Consultation: ${member.name}`)}
                    className="w-full py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Request Seminar Seat</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GUEST FACULTY & RESEARCH CONCLAVE */}
      <section className="py-20 bg-white border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <Sparkles className="w-8 h-8 text-royal-600 mx-auto" />
          <h2 className="font-heading text-3xl font-extrabold text-navy-900 tracking-tight">
            Visiting Research Fellows & Industry Practitioners
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm font-sans leading-relaxed">
            In addition to our permanent faculty, over 30 adjunct researchers from IITs, AIIMS, and multinational tech firms deliver specialized weekend modules and capstone reviews.
          </p>
          <button
            onClick={() => openEnrollment('Visiting Fellow Conclave Schedule')}
            className="px-8 py-3.5 bg-royal-600 hover:bg-royal-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-glow-royal transition-all cursor-pointer"
          >
            View Visiting Fellow Calendar
          </button>
        </div>
      </section>
    </div>
  );
}
