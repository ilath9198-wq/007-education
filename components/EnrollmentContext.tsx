'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface EnrollmentContextType {
  isModalOpen: boolean;
  selectedCourse: string;
  openEnrollment: (courseName?: string) => void;
  openAdmissionModal: (courseName?: string) => void;
  closeEnrollment: () => void;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  openStudentLogin: () => void;
  closeLoginModal: () => void;
}

const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined);

export function EnrollmentProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('General Admission Inquiry');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openEnrollment = (courseName?: string) => {
    setSelectedCourse(courseName || 'General Admission Inquiry');
    setIsModalOpen(true);
  };

  const closeEnrollment = () => {
    setIsModalOpen(false);
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <EnrollmentContext.Provider
      value={{
        isModalOpen,
        selectedCourse,
        openEnrollment,
        openAdmissionModal: openEnrollment,
        closeEnrollment,
        isLoginModalOpen,
        openLoginModal,
        openStudentLogin: openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
}

export function useEnrollment() {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error('useEnrollment must be used within an EnrollmentProvider');
  }
  return context;
}
