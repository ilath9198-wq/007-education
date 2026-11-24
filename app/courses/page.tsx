'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  X, 
  GraduationCap, 
  Laptop, 
  Award,
  Filter,
  Check
} from 'lucide-react';
import { coursesData, Course } from '../../data/academicData';
import { useEnrollment } from '../../components/EnrollmentContext';

export default function CoursesPage() {
  const { openEnrollment } = useEnrollment();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const categories = [
    { key: 'all', label: 'All Courses (12)' },
    { key: 'cs-it', label: 'Computer Science & IT' },
    { key: 'competitive', label: 'Competitive Entrance' },
    { key: 'math-science', label: 'Mathematics & Science' },
    { key: 'mgmt-commerce', label: 'Commerce & Management' },
    { key: 'languages', label: 'Languages & Communication' },
    { key: 'skill-dev', label: 'Skill Development' },
  ];

  const filteredCourses = useMemo(() => {
    return coursesData.filter((c) => {
      const matchesCategory = activeCategory === 'all' || c.category === activeCategory;
      const matchesSearch = 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full">
      {/* 1. ATMOSPHERIC PHOTOGRAPHIC HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=85"
            alt="EDVANCE Computer Laboratory and Study"
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
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>COURSES CATALOGUE // 12 CERTIFIED PROGRAMMES</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-md">
              Explore Our Comprehensive <br />
              <span className="text-royal-gradient">Course Catalogue</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-light mb-8 drop-shadow">
              Industry-aligned professional diplomas, foundational STEM mastery, language certifications, and national competitive exam masterclasses.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('search-catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-royal-600 to-royal-500 hover:from-royal-500 hover:to-royal-400 text-white font-heading font-bold text-sm tracking-wider uppercase rounded-xl shadow-glow-royal transition-all cursor-pointer"
              >
                <Search className="w-4 h-4 text-amber-300" />
                <span>Search Course Directory</span>
              </button>

              <button
                onClick={() => openEnrollment()}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 font-heading font-bold text-sm tracking-wider uppercase rounded-xl backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Apply for Admissions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COURSE SEARCH & FILTER TOOLBAR */}
      <section id="search-catalog" className="py-12 bg-white border-b border-slate-200 sticky top-18 sm:top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input Box */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, e.g., 'Full-Stack', 'JEE', 'AI'..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:border-royal-600 focus:bg-white focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Count */}
            <div className="text-xs text-slate-500 font-mono self-start md:self-auto">
              Displaying <strong className="text-navy-900">{filteredCourses.length}</strong> of 12 Programmes
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar pt-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-royal-600 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. COURSES GRID */}
      <section className="py-16 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-heading font-bold text-xl text-navy-900">
                No courses match your filter criteria
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching with different keywords or switch to &quot;All Courses&quot; to browse our entire curriculum.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 rounded-xl bg-navy-900 text-white text-xs font-bold uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="edu-card overflow-hidden flex flex-col justify-between group bg-white"
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
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="flex-1 py-2.5 rounded-xl border border-slate-300 hover:border-royal-600 text-navy-900 hover:text-royal-600 text-xs font-bold uppercase tracking-wider text-center transition-colors cursor-pointer"
                    >
                      View Syllabus
                    </button>
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
          )}
        </div>
      </section>

      {/* 4. INTERACTIVE COURSE DETAIL MODAL */}
      {selectedCourse && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-unfold"
          onClick={() => setSelectedCourse(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-floating border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative aspect-[16/7] w-full bg-navy-950 overflow-hidden">
              <Image
                src={selectedCourse.image}
                alt={selectedCourse.title}
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
              
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-royal-600 text-white font-bold inline-block mb-1">
                  {selectedCourse.categoryLabel}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl leading-tight">
                  {selectedCourse.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                <div>
                  <span className="text-slate-500 font-mono block">Duration</span>
                  <span className="font-bold text-navy-900">{selectedCourse.duration}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-mono block">Learning Level</span>
                  <span className="font-bold text-royal-700">{selectedCourse.level}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-mono block">Delivery Mode</span>
                  <span className="font-bold text-navy-900">{selectedCourse.mode}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-mono block">Scholastic Rating</span>
                  <span className="font-bold text-amber-500">★ {selectedCourse.rating} / 5.0</span>
                </div>
              </div>

              <div>
                <h4 className="font-heading font-bold text-base text-navy-900 mb-2">
                  Course Synopsis & Objectives
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {selectedCourse.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-base text-navy-900 mb-3">
                  Core Modular Syllabus (5 Modules)
                </h4>
                <div className="space-y-2">
                  {selectedCourse.curriculum.map((mod, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                      <span className="w-5 h-5 rounded-md bg-royal-100 text-royal-700 font-mono font-bold flex items-center justify-center shrink-0">
                        {mIdx + 1}
                      </span>
                      <span className="font-sans font-medium">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-royal-50/70 border border-royal-200 rounded-xl space-y-1.5 text-xs">
                <span className="font-bold text-royal-900 block font-heading">Certification & Credentials:</span>
                <p className="text-slate-600 font-sans">{selectedCourse.certification}</p>
                <div className="pt-2 text-[11px] text-slate-500 font-mono border-t border-royal-200/50">
                  Eligibility: {selectedCourse.eligibility}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-600">
                {selectedCourse.feeEstimate}
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedCourse.title;
                    setSelectedCourse(null);
                    openEnrollment(title);
                  }}
                  className="flex-1 sm:flex-initial px-6 py-2.5 bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-glow-royal transition-all"
                >
                  Enquire for This Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
