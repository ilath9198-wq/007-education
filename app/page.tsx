'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  GraduationCap, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Award, 
  Compass, 
  Calendar, 
  ShieldCheck,
  Star,
  Zap,
  Clock,
  Laptop
} from 'lucide-react';
import { coursesData, academicProgrammes, facultyData, campusFacilities, achievementsData } from '../data/academicData';
import { useEnrollment } from '../components/EnrollmentContext';

export default function HomePage() {
  const { openEnrollment } = useEnrollment();
  const featuredCourses = coursesData.slice(0, 6);
  const featuredFaculty = facultyData.slice(0, 4);
  const featuredFacilities = campusFacilities.slice(0, 3);
  const featuredAchievements = achievementsData.slice(0, 3);

  const testimonials = [
    {
      id: 'test-1',
      name: 'Pooja Deshmukh (Fictional Demonstration)',
      role: 'Class of 2026 • B.Tech Computer Science',
      quote: '“EDVANCE transformed how I approach complex problem solving. The 24/7 cloud sandbox and direct mentorship from industry fellows gave me the exact skills needed to crack competitive tech placements.”',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=85'
    },
    {
      id: 'test-2',
      name: 'Karan Singhal (Fictional Demonstration)',
      role: 'IIT-JEE Advanced Ranker Cohort',
      quote: '“The faculty never relied on mechanical memorization. Every calculus theorem and electrodynamics law was derived from first principles. The diagnostic mock test series eliminated all exam fear.”',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85'
    },
    {
      id: 'test-3',
      name: 'Meenakshi Iyer (Parent – Fictional Demonstration)',
      role: 'Parent of Senior Secondary Science Student',
      quote: '“The integrated coaching curriculum within school hours spared my daughter from the exhausting cycle of evening tuition centres. Her mentors provided genuine emotional and academic guidance.”',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85'
    }
  ];

  const announcements = [
    {
      date: 'Dec 15, 2026',
      tag: 'Admissions',
      title: 'EDVANCE National Scholastic Aptitude Test (ENSAT 2027) Registrations Open',
      desc: 'Merit scholarship tests for Grade 11 & 12 Science/Commerce batches and IT diplomas.'
    },
    {
      date: 'Jan 08, 2027',
      tag: 'Hackathon',
      title: 'Annual Inter-Campus HackEDVANCE 2027 AI Innovation Showcase Announced',
      desc: '48-hour live building competition with industry judges and seed funding grants.'
    },
    {
      date: 'Feb 02, 2027',
      tag: 'Lecture Series',
      title: 'Distinguished Public Lecture: Quantum Computing Architectures & Future Tech',
      desc: 'Special guest address by senior visiting researchers at the Ramanujan Auditorium.'
    }
  ];

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Academic Editorial Background)
          ========================================================================= */}
      <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        {/* Full-bleed Luxury Photographic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=85"
            alt="EDVANCE Modern Educational Campus"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Deep Navy/Royal Gradient Scrims for maximum readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            {/* Delicate Academic Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-950/80 border border-royal-400/50 text-sky-300 text-xs font-mono font-medium tracking-widest uppercase mb-6 backdrop-blur-md shadow-glow-royal">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>ACCREDITED EXCELLENCE // SESSIONS 2026–27</span>
            </div>

            {/* Mandatory Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md">
              Your Future Begins With the{' '}
              <span className="text-royal-gradient">
                Right Learning
              </span>{' '}
              Environment.
            </h1>

            {/* Mandatory Supporting Statement */}
            <p className="font-sans text-lg sm:text-2xl text-slate-200 leading-relaxed mb-10 max-w-2xl font-light drop-shadow">
              Empowering ambitious minds through concept-first pedagogy, world-class research laboratories, and personalized mentorship across schooling, competitive entrance exams, and cutting-edge technology.
            </p>

            {/* High-Contrast Unmissable CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-royal-600 via-royal-500 to-royal-600 hover:from-royal-500 hover:to-royal-600 text-white font-heading font-bold text-base sm:text-lg tracking-wider uppercase rounded-xl shadow-glow-royal border border-royal-300 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-amber-300" />
                <span>Explore Courses</span>
              </Link>

              <button
                onClick={() => openEnrollment()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-navy-950 border-2 border-amber-300 font-heading font-bold text-base sm:text-lg tracking-wider uppercase rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Apply Now (2026)</span>
                <ArrowRight className="w-5 h-5 text-navy-950 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-700/60 text-left">
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white block">24,000+</span>
                <span className="text-xs text-sky-200 font-mono tracking-wide uppercase">Alumni Worldwide</span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-amber-400 block">98.4%</span>
                <span className="text-xs text-slate-300 font-mono tracking-wide uppercase">Success Benchmark</span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white block">1 : 15</span>
                <span className="text-xs text-sky-200 font-mono tracking-wide uppercase">Faculty Mentorship</span>
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-sky-400 block">120+</span>
                <span className="text-xs text-slate-300 font-mono tracking-wide uppercase">Placement Partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE EDVANCE – 4 PILLARS
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-2">
              THE EDVANCE ADVANTAGE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              Built Upon Academic Integrity & Real-World Velocity
            </h2>
            <div className="w-16 h-1 bg-royal-600 mx-auto mt-4 mb-6 rounded-full" />
            <p className="text-slate-600 font-sans text-base leading-relaxed">
              We replace rote classroom drills with conceptual clarity, cognitive problem-solving, and state-of-the-art infrastructural sandboxes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal-400 transition-all hover:shadow-card-hover group">
              <div className="w-12 h-12 rounded-xl bg-royal-600/10 text-royal-600 flex items-center justify-center mb-6 group-hover:bg-royal-600 group-hover:text-white transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy-900 mb-2">
                Concept-First Pedagogy
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Every topic begins with intuitive visual proofs and underlying first principles, banishing mindless formula cramming forever.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal-400 transition-all hover:shadow-card-hover group">
              <div className="w-12 h-12 rounded-xl bg-royal-600/10 text-royal-600 flex items-center justify-center mb-6 group-hover:bg-royal-600 group-hover:text-white transition-colors">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy-900 mb-2">
                24/7 Cloud Lab Sandboxes
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Each student receives individual cloud terminals, GPU clusters, and simulated CBT examination engines accessible from any device.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal-400 transition-all hover:shadow-card-hover group">
              <div className="w-12 h-12 rounded-xl bg-royal-600/10 text-royal-600 flex items-center justify-center mb-6 group-hover:bg-royal-600 group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy-900 mb-2">
                Individual Doubt Pods
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Daily scheduled 1-on-1 doubt elimination hours where students discuss bottlenecks directly with dedicated senior mentors.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal-400 transition-all hover:shadow-card-hover group">
              <div className="w-12 h-12 rounded-xl bg-royal-600/10 text-royal-600 flex items-center justify-center mb-6 group-hover:bg-royal-600 group-hover:text-white transition-colors">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy-900 mb-2">
                Proven Track Record
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Consistent top percentiles across national competitive examinations, international hackathons, and corporate engineering roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          POPULAR COURSES SHOWCASE
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-2">
                FEATURED PROGRAMMES
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
                Popular Courses & Specialized Cohorts
              </h2>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors self-start md:self-auto shrink-0"
            >
              <span>View All 12 Courses</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="edu-card overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-navy-900/90 text-sky-300 border border-royal-500/40 backdrop-blur-md">
                      {course.categoryLabel}
                    </span>
                    <span className="absolute bottom-3 left-4 text-xs font-mono text-white flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{course.duration}</span>
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-royal-700">{course.level} Level</span>
                      <span className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{course.rating}</span>
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-navy-900 group-hover:text-royal-600 transition-colors leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-2">
                      {course.shortDesc}
                    </p>

                    <div className="pt-3 border-t border-slate-100 space-y-1.5">
                      {course.curriculum.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-3">
                  <Link
                    href={`/courses?focus=${course.id}`}
                    className="flex-1 py-2.5 rounded-xl border border-slate-300 hover:border-royal-600 text-navy-900 hover:text-royal-600 text-xs font-bold uppercase tracking-wider text-center transition-colors"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => openEnrollment(course.title)}
                    className="px-4 py-2.5 rounded-xl bg-royal-600 hover:bg-royal-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAMPUS & INFRASTRUCTURE PREVIEW
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-2">
              WORLD-CLASS INFRASTRUCTURE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              Environments Designed for Deep Cognitive Focus
            </h2>
            <div className="w-16 h-1 bg-royal-600 mx-auto mt-4 mb-6 rounded-full" />
            <p className="text-slate-600 font-sans text-base leading-relaxed">
              From our silent three-tier research library to GPU computing clusters and robotics maker benches, our facilities fuel curiosity and academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredFacilities.map((fac) => (
              <div key={fac.id} className="edu-card overflow-hidden group">
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={fac.image}
                    alt={fac.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-mono text-white font-semibold">
                    {fac.capacity}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-royal-600 font-bold block mb-1">
                    {fac.category}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-navy-900 mb-2">
                    {fac.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {fac.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/campus"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              <span>Explore All Campus Labs & Infrastructure</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STUDENT TESTIMONIALS (CLEARLY LABELLED FICTIONAL DEMONSTRATION CONTENT)
          ========================================================================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-2">
              VOICES OF SUCCESS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
              Reflections from Scholars & Families
            </h2>
            <div className="w-16 h-1 bg-royal-600 mx-auto mt-4 mb-4 rounded-full" />
            <p className="text-[11px] font-mono text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full inline-block">
              Notice: The following testimonials are fictional demonstration content for this educational template.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div key={test.id} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 italic font-sans leading-relaxed mb-6">
                    {test.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-200 shrink-0">
                    <Image
                      src={test.avatar}
                      alt={test.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-navy-900">
                      {test.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-sans">
                      {test.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LATEST ANNOUNCEMENTS & EVENTS
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-royal-600 uppercase block mb-1">
                INSTITUTIONAL NOTICE BOARD
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-navy-900 tracking-tight">
                Latest Announcements & Academic Circulars
              </h2>
            </div>
            <Link
              href="/resources"
              className="text-xs font-bold text-royal-600 hover:text-royal-800 uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>Academic Circular Vault</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements.map((ann, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-royal-300 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-royal-100 text-royal-700 font-semibold text-[10px] uppercase">
                    {ann.tag}
                  </span>
                  <span>{ann.date}</span>
                </div>
                <h4 className="font-heading font-bold text-base text-navy-900 mb-2 leading-snug">
                  {ann.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {ann.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ADMISSION ENQUIRY CTA BANNER
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-navy-950 via-navy-900 to-royal-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-500/20 border border-royal-400/40 text-sky-300 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ADMISSIONS OPEN FOR ACADEMIC YEAR 2026–27</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Take the Decisive Step Towards <br />
            <span className="text-royal-gradient">Your Academic Breakthrough</span>
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Connect with our faculty academic counselors to discuss syllabus pacing, merit scholarships, campus hostel arrangements, and batch timings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => openEnrollment()}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-royal-600 to-royal-500 hover:from-royal-500 hover:to-royal-400 text-white font-heading font-bold text-sm tracking-wider uppercase rounded-xl shadow-glow-royal transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Start Admission Application
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-heading font-bold text-sm tracking-wider uppercase rounded-xl backdrop-blur-md transition-all cursor-pointer"
            >
              Visit Admissions Helpdesk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
