'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Download, 
  FileText, 
  BookOpen, 
  Search, 
  Filter, 
  CheckCircle2, 
  Sparkles, 
  Bookmark, 
  Calendar, 
  FileSpreadsheet, 
  Code, 
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Layers
} from 'lucide-react';
import { downloadableResources, ResourceItem } from '../../data/academicData';
import { useEnrollment } from '../../components/EnrollmentContext';

export default function ResourcesPage() {
  const { openStudentLogin, openAdmissionModal } = useEnrollment();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Category filters
  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'notes', label: 'Study Notes & Formulas' },
    { id: 'papers', label: 'Sample Papers' },
    { id: 'guides', label: 'Guides & Handbooks' },
    { id: 'calendar', label: 'Academic Calendars' },
  ];

  // Filtered resources
  const filteredResources = useMemo(() => {
    return downloadableResources.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.semester.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleDownload = (resource: ResourceItem) => {
    setDownloadingId(resource.id);
    setToastMessage(`Initiating secure download: ${resource.title}...`);

    setTimeout(() => {
      setDownloadingId(null);
      setToastMessage(`Demonstration download complete! In production, this delivers the verified ${resource.fileSize} official file (${resource.type}).`);
      setTimeout(() => setToastMessage(null), 4500);
    }, 1200);
  };

  const getFormatIcon = (type: string) => {
    if (type.includes('Excel') || type.includes('Template')) {
      return <FileSpreadsheet className="w-5 h-5 text-emerald-600" />;
    }
    if (type.includes('Notebook') || type.includes('Code')) {
      return <Code className="w-5 h-5 text-indigo-600" />;
    }
    return <FileText className="w-5 h-5 text-royal-600" />;
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
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=85"
            alt="EDVANCE Central Library Knowledge Archives"
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
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>ACADEMIC KNOWLEDGE REPOSITORY // OPEN ACCESS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md">
              Curated Study Notes,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200">
                Model Papers
              </span>{' '}
              & Toolkits.
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              Empowering self-directed learning with faculty-authored derivation cheat-sheets, solved competitive examination papers, laboratory handbooks, and official academic circulars.
            </p>

            {/* Mandatory High-Contrast Solid CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#repository-search"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-base tracking-wide rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Search className="w-5 h-5 text-navy-950" />
                <span>Search Learning Materials</span>
              </a>

              <button
                onClick={() => openStudentLogin()}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-navy-800/90 hover:bg-navy-800 text-white border-2 border-royal-400/60 hover:border-royal-300 font-bold text-base tracking-wide rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Access Student LMS Portal</span>
              </button>
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
            <strong>Demonstration Learning Hub:</strong> All downloadable study documents below are interactive simulated resource files designed to showcase institutional digital repository delivery.
          </span>
        </div>
      </section>

      {/* =========================================================================
          RESOURCE FILTER & REPOSITORY SECTION
          ========================================================================= */}
      <section id="repository-search" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Interactive Search & Category Filter Toolbar */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md mb-12">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-8">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by topic, subject (e.g. Calculus, NEET, Python), or semester..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-royal-500 text-sm sm:text-base text-slate-800 placeholder-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded bg-slate-100"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 shrink-0">
              <Filter className="w-4 h-4 text-royal-600" />
              <span>Showing <strong>{filteredResources.length}</strong> resources</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-royal-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Global Toast Notification */}
        {toastMessage && (
          <div className="mb-8 p-4 rounded-xl bg-navy-900 border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-medium flex items-center justify-between shadow-lg animate-fadeIn">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <span>{toastMessage}</span>
            </div>
            <button 
              onClick={() => setToastMessage(null)} 
              className="text-xs text-amber-200/80 hover:text-white px-2 py-1 rounded bg-navy-800"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Resources Cards Grid */}
        {filteredResources.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy-950 mb-2">No Learning Resources Found</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
              We couldn&apos;t find any documents matching &ldquo;{searchQuery}&rdquo;. Try another search term or reset your filters.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-6 py-2.5 rounded-xl bg-royal-600 text-white text-xs font-bold hover:bg-royal-500 transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredResources.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 hover:border-royal-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Subject Pill & Size */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-royal-50 text-royal-700 text-xs font-bold uppercase tracking-wide">
                      {item.subject}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 font-mono">
                      {item.fileSize}
                    </span>
                  </div>

                  {/* Resource Title */}
                  <h3 className="text-lg font-bold text-navy-950 mb-2.5 leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Semester / Level */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-3">
                    <Bookmark className="w-3.5 h-3.5 text-royal-500 shrink-0" />
                    <span>{item.semester}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    {getFormatIcon(item.type)}
                    <span className="truncate max-w-[140px]">{item.type}</span>
                  </div>

                  <button
                    onClick={() => handleDownload(item)}
                    disabled={downloadingId === item.id}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy-900 hover:bg-royal-600 text-white text-xs font-bold transition-all shadow-sm disabled:opacity-50 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{downloadingId === item.id ? 'Downloading...' : 'Download'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          DIGITAL ARCHIVE & RESEARCH REPOSITORIES (IEEE / Springer / National)
          ========================================================================= */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-royal-100 text-royal-700 text-xs font-semibold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5 text-royal-600" />
                <span>Institutional Digital Library</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mb-4 leading-tight">
                24/7 Access to World-Class Research Databases.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                All registered EDVANCE students receive institutional federated access credentials allowing full-text search across 45,000+ scientific journals, peer-reviewed engineering papers, and medical reference databases.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-navy-950 mb-1">IEEE Xplore Digital</h4>
                  <p className="text-xs text-slate-500">Full conference papers and transactions across computing, robotics, and telecommunications.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-navy-950 mb-1">PubMed & Clinical Med</h4>
                  <p className="text-xs text-slate-500">Biomedical literature and pharmacological case study compendiums for medical scholars.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-navy-950 mb-1">Springer Nature Gateway</h4>
                  <p className="text-xs text-slate-500">Pure mathematical proofs, chemical reaction papers, and astrophysical review articles.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-navy-950 mb-1">Harvard Business Cases</h4>
                  <p className="text-xs text-slate-500">Curated management decision-making studies, financial models, and strategic balance sheets.</p>
                </div>
              </div>

              <button
                onClick={() => openStudentLogin()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-royal-600 hover:bg-royal-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Log in to Institutional Library Portal</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85"
                  alt="EDVANCE Central Reading Hall"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs uppercase font-mono tracking-widest text-amber-300 block mb-1">
                      FACILITY SPOTLIGHT
                    </span>
                    <h3 className="text-lg font-bold">Silent Scholar Commons & Terminal Hub</h3>
                    <p className="text-xs text-slate-300">Open 7:00 AM – 10:30 PM with high-speed fiber terminals and reference librarians.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RESOURCE REQUEST / ADMISSION BANNER
          ========================================================================= */}
      <section className="py-20 bg-navy-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-900 border border-royal-500/40 text-royal-300 text-xs font-mono font-medium tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>CUSTOM ACADEMIC SUPPORT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Need Guidance on Recommended Syllabi or Textbooks?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Our academic advisors and subject librarians are available to provide tailored reading lists and examination preparation blueprints.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openAdmissionModal()}
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-base tracking-wide rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Contact Academic Counseling
            </button>
            <Link
              href="/academics"
              className="w-full sm:w-auto px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white border border-slate-700 font-bold text-base tracking-wide rounded-xl transition-all"
            >
              Review Academic Streams
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
