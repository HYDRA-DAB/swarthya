import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

export default function Navigation({ activePage, onNavigate, onOpenCheckIn }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'approach', label: 'Our Approach' },
    { id: 'screening', label: 'Community Screening' },
    { id: 'library', label: 'Health Library' },
    { id: 'follow-ups', label: 'Follow-up & Referrals' },
    { id: 'about', label: 'About Swasthya' }
  ];

  const handleLinkClick = (pageId) => {
    onNavigate(pageId);
    setMobileOpen(false);
  };

  return (
    <header className={`glass-navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand Wordmark */}
        <button
          type="button"
          className="brand-link"
          onClick={() => handleLinkClick('home')}
          aria-label="Swasthya Home"
        >
          <div className="brand-symbol">
            <Heart size={18} className="symbol-heart" fill="currentColor" />
          </div>
          <div className="brand-identity">
            <span className="brand-name">Swasthya</span>
            <span className="brand-tag">Community Health</span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <li key={link.id}>
                  <button
                    type="button"
                    className={`nav-button ${isActive ? 'active' : ''}`}
                    onClick={() => handleLinkClick(link.id)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && <span className="active-dot" aria-hidden="true" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Header Right Action */}
        <div className="nav-actions">
          <button
            type="button"
            className="btn-glass-primary"
            onClick={onOpenCheckIn}
            aria-label="Start a community check-in"
          >
            <Sparkles size={14} className="btn-sparkle" />
            <span>Start a check-in</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div className="mobile-drawer-inner">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <li key={link.id}>
                    <button
                      type="button"
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => handleLinkClick(link.id)}
                    >
                      <span>{link.label}</span>
                      {isActive ? (
                        <span className="mobile-active-chip">Current</span>
                      ) : (
                        <ArrowRight size={15} className="mobile-arrow" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mobile-drawer-footer">
              <button
                type="button"
                className="btn-glass-primary w-full"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenCheckIn();
                }}
              >
                <Sparkles size={14} />
                <span>Start a check-in</span>
              </button>
              <p className="mobile-disclaimer">
                Illustrative health initiative · Voluntary participation
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
