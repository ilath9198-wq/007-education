'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  Users, 
  Award, 
  Calendar, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap,
  Trophy,
  Coffee,
  Globe
} from 'lucide-react';
import { useEnrollment } from '../../components/EnrollmentContext';

export default function StudentLifePage() {
  const { openEnrollment } = useEnrollment();

  const clubs = [
    {
      name: 'CodeCraft Hackathon & Open-Source Guild',
      category: 'Technology & Engineering',
      desc: 'Hosts bi-monthly 36-hour hackathons, open-source contributor sprints, and competitive coding leagues.',
      members: '280 Active Members',
      icon: '💻'
    },
    {
      name: 'Model United Nations & Parliamentary Debate Union',
      category: 'Policy, Law & Oratory',
      desc: 'Regularly represents the institution at premier national collegiate debate and geopolitical simulation conclaves.',
      members: '160 Active Members',
      icon: '🎙️'
    },
    {
      name: 'Tesla Robotics & Autonomous Drone Club',
      category: 'Hardware & Maker Culture',
      desc: 'Designs custom telemetry drones, rover bots, and line-follower robots for all-India university robotics cups.',
      members: '140 Active Members',
      icon: '🤖'
    },
    {
      name: 'Spandan Performing Arts & Music Council',
      category: 'Culture & Creative Expression',
      desc: 'Fosters classical Indian music, contemporary theatrical productions, choreography, and campus jam sessions.',
      members: '210 Active Members',
      icon: '🎭'
    },
    {
      name: 'Varsity Athletics & Badminton Association',
      category: 'Sports & Physical Conditioning',
      desc: 'Comprehensive training across badminton, football, basketball, cricket, and Olympic-standard table tennis.',
      members: '320 Active Members',
      icon: '🏆'
    },
    {
      name: 'Eco-Vanguard Social Outreach Society',
      category: 'Community & Sustainable Impact',
      desc: 'Underprivileged school weekend tutoring, tree-plantation drives, solar campus audits, and e-waste recycling.',
      members: '190 Active Members',
      icon: '🌱'
    }
  ];

  const annualEvents = [
    {
      month: 'OCTOBER',
      title: 'Technovation Global Hackathon',
      desc: '36-hour continuous build challenge with seed grants and corporate venture judging.'
    },
    {
      month: 'DECEMBER',
      title: 'Spandan Annual Cultural Gala',
      desc: 'Three-day celebration featuring theatre, acoustic musical concerts, and literary debates.'
    },
    {
      month: 'FEBRUARY',
      title: 'National Inter-Campus Sports Meet',
      desc: 'Over 20 participating institutions competing across 12 indoor and outdoor athletic disciplines.'
    },
    {
      month: 'APRIL',
      title: 'Distinguished TEDxEDVANCE Conclave',
      desc: 'Student and guest intellectual talks centered around transformative technological and civic themes.'
    }
  ];

  return (
    <div className="w-full">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=85"
            alt="EDVANCE Student Collaborative Life"
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
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>CAMPUS CULTURE // BEYOND THE CLASSROOM</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-md">
              Vibrant Student Life <br />
              <span className="text-royal-gradient">& Campus Community</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-light mb-8 drop-shadow">
              Where rigorous academic curiosity meets artistic expression, national hackathons, competitive athletics, and lifelong camaraderie.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('student-clubs');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-royal-600 to-royal-500 hover:from-royal-500 hover:to-royal-400 text-white font-heading font-bold text-sm tracking-wider uppercase rounded-xl shadow-glow-royal transition-all cursor-pointer"
              >
                <span>Explore Student Societies</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => openEnrollment()}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-heading font-bold text-sm tracking-wider uppercase rounded-xl backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Apply for Admissions</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STUDENT CLUBS & SOCIETIES */}
      <section id="student-clubs" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-2">
              CLUBS & STUDENT COUNCILS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              Ignite Your Passions Outside Lecture Hours
            </h2>
            <div className="w-16 h-1 bg-royal-600 mx-auto mt-4 mb-6 rounded-full" />
            <p className="text-slate-600 font-sans text-base leading-relaxed">
              Run autonomously by elected student officers under the mentorship of faculty advisors, our clubs provide valuable leadership and organizational experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal-400 transition-all hover:shadow-card-hover group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{club.icon}</span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-royal-700 bg-royal-100 px-2.5 py-1 rounded-full font-bold">
                      {club.members}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    {club.category}
                  </span>

                  <h3 className="font-heading font-bold text-xl text-navy-900 group-hover:text-royal-600 transition-colors mb-2">
                    {club.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {club.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/60 mt-6 flex items-center justify-between text-xs text-royal-700 font-bold">
                  <span>Student Guild Activity</span>
                  <span className="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ANNUAL SIGNATURE EVENTS CALENDAR */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-2">
              CAMPUS FESTIVALS & CONCLAVES
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              Major Annual Milestone Events
            </h2>
            <div className="w-16 h-1 bg-royal-600 mx-auto mt-4 mb-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {annualEvents.map((evt, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <span className="px-3 py-1 rounded-md bg-navy-900 text-sky-300 font-mono font-bold text-xs inline-block">
                  {evt.month}
                </span>
                <h4 className="font-heading font-bold text-lg text-navy-900">
                  {evt.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {evt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STUDENT SUPPORT & MENTAL WELLNESS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <HeartHandshake className="w-10 h-10 text-royal-600 mx-auto" />
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Comprehensive Student Wellness & Psychological Support
          </h2>
          <p className="text-slate-600 text-sm font-sans max-w-2xl mx-auto leading-relaxed">
            High academic aspirations require high emotional resilience. EDVANCE provides confidential on-campus student counseling, peer mentorship pods, and stress-reduction workshops to safeguard mental health.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openEnrollment('Student Wellness Cell Information')}
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-900 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Learn About Student Support Systems
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
