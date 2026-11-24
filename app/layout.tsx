import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { EnrollmentProvider } from '../components/EnrollmentContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdmissionModal from '../components/AdmissionModal';
import StudentLoginModal from '../components/StudentLoginModal';

export const metadata: Metadata = {
  title: 'EDVANCE – Education & Learning Institute | Learn Today. Lead Tomorrow.',
  description: 'Premier educational institution offering secondary schooling, senior secondary science & commerce, competitive exam coaching (IIT-JEE/NEET/UPSC), university degrees, and vocational IT skill training.',
  keywords: 'education, coaching institute, school, college, IIT JEE, NEET, UPSC, IT training, full-stack, data science, skill development, EDVANCE',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans selection:bg-royal-600 selection:text-white">
        <EnrollmentProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <AdmissionModal />
          <StudentLoginModal />
        </EnrollmentProvider>
      </body>
    </html>
  );
}
