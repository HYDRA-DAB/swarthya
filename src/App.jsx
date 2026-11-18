import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CheckInModal from './components/CheckInModal';
import ArticleDetailModal from './components/ArticleDetailModal';
import RecordSlipModal from './components/RecordSlipModal';
import Toast from './components/Toast';

import HomePage from './pages/HomePage';
import ApproachPage from './pages/ApproachPage';
import ScreeningPage from './pages/ScreeningPage';
import LibraryPage from './pages/LibraryPage';
import FollowUpsPage from './pages/FollowUpsPage';
import AboutPage from './pages/AboutPage';

import { 
  initialScreeningRecords, 
  initialFollowUps 
} from './data/mockData';

import './App.css';

export default function App() {
  // Page routing helper from current URL
  const getPageFromUrl = () => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.replace(/^\//, '').toLowerCase();
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    const route = hash || path;

    if (route === 'approach') return 'approach';
    if (route === 'screening') return 'screening';
    if (route === 'library') return 'library';
    if (route === 'follow-ups' || route === 'followups') return 'follow-ups';
    if (route === 'about') return 'about';
    return 'home';
  };

  const [activePage, setActivePage] = useState(getPageFromUrl);

  // Application session state
  const [records, setRecords] = useState(initialScreeningRecords);
  const [followUps, setFollowUps] = useState(initialFollowUps);

  // Modals & Overlay state
  const [checkInModalOpen, setCheckInModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedRecordForSlip, setSelectedRecordForSlip] = useState(null);
  const [toast, setToast] = useState(null);

  // Browser Back / Forward Navigation handling
  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getPageFromUrl());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title when active page changes
  useEffect(() => {
    const titles = {
      home: 'Swasthya — Community Health',
      approach: 'Our Approach — Swasthya Community Health',
      screening: 'Community Screening — Swasthya Community Health',
      library: 'Health Library — Swasthya Community Health',
      'follow-ups': 'Follow-up & Referrals — Swasthya Community Health',
      about: 'About Swasthya — Community Health'
    };
    document.title = titles[activePage] || 'Swasthya — Community Health';
  }, [activePage]);

  // Navigate function with history push
  const navigate = (pageId) => {
    setActivePage(pageId);
    const newPath = pageId === 'home' ? '/' : `/${pageId}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({ pageId }, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (title, message) => {
    setToast({ title, message });
  };

  // Check-in submission handler
  const handleRecordSubmit = (newRecord, newFollowUp) => {
    setRecords(prev => [newRecord, ...prev]);
    if (newFollowUp) {
      setFollowUps(prev => [newFollowUp, ...prev]);
    }
    showToast(
      "Check-in Recorded", 
      `Illustrative record saved for ${newRecord.participantName} (${newRecord.id}) in ${newRecord.area}.`
    );
  };

  // Follow-up complete handler
  const handleMarkFollowUpComplete = (id) => {
    const today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    setFollowUps(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: true,
          status: 'completed',
          completedDate: today
        };
      }
      return item;
    }));
  };

  // View record slip by ID
  const handleViewRecordSlipById = (recordId) => {
    const found = records.find(r => r.id === recordId);
    if (found) {
      setSelectedRecordForSlip(found);
    } else {
      showToast("Record Not Found", `Could not locate record #${recordId} in session state.`);
    }
  };

  return (
    <div className="site-wrapper">
      {/* Glass Top Navigation */}
      <Navigation
        activePage={activePage}
        onNavigate={navigate}
        onOpenCheckIn={() => setCheckInModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="main-content" id="main-content">
        {activePage === 'home' && (
          <HomePage
            onNavigate={navigate}
            onOpenCheckIn={() => setCheckInModalOpen(true)}
          />
        )}

        {activePage === 'approach' && (
          <ApproachPage
            onNavigate={navigate}
            onOpenCheckIn={() => setCheckInModalOpen(true)}
          />
        )}

        {activePage === 'screening' && (
          <ScreeningPage
            records={records}
            onOpenCheckIn={() => setCheckInModalOpen(true)}
            onSelectRecord={(rec) => setSelectedRecordForSlip(rec)}
          />
        )}

        {activePage === 'library' && (
          <LibraryPage
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        )}

        {activePage === 'follow-ups' && (
          <FollowUpsPage
            followUps={followUps}
            onMarkComplete={handleMarkFollowUpComplete}
            onViewRecordSlip={handleViewRecordSlipById}
            onShowToast={showToast}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={navigate}
            onOpenCheckIn={() => setCheckInModalOpen(true)}
          />
        )}
      </main>

      {/* Designed Glass Footer */}
      <Footer onNavigate={navigate} />

      {/* Multi-step Guided Check-in Modal */}
      <CheckInModal
        isOpen={checkInModalOpen}
        onClose={() => setCheckInModalOpen(false)}
        onSubmitRecord={handleRecordSubmit}
        onViewRecords={() => {
          navigate('screening');
          setCheckInModalOpen(false);
        }}
      />

      {/* Health Library Article Detail Modal */}
      {selectedArticle && (
        <ArticleDetailModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}

      {/* Illustrative Record Slip Detail Modal */}
      {selectedRecordForSlip && (
        <RecordSlipModal
          record={selectedRecordForSlip}
          onClose={() => setSelectedRecordForSlip(null)}
          onShowToast={showToast}
        />
      )}

      {/* Glass Toast Notification */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}
