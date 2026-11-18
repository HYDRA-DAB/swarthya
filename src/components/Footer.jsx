import React from 'react';
import { Heart, ArrowUpRight, ShieldCheck, Globe } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="glass-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-inner">
        {/* Main Footer Row */}
        <div className="footer-grid">
          {/* Brand & Mission Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-title">
              <div className="brand-symbol-small">
                <Heart size={15} fill="currentColor" />
              </div>
              <span>Swasthya</span>
            </div>
            <p className="footer-tagline">
              A community-first initiative advancing accessible, dignified primary health screening, 
              supportive follow-up, and continuity of care for rural communities.
            </p>
            <div className="footer-sdg-pill">
              <Globe size={13} className="sdg-icon" />
              <span>Aligned with UN SDG 3: Good Health and Well-Being · Target 3.8</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <button type="button" onClick={() => onNavigate('home')} className="footer-link">
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('approach')} className="footer-link">
                  Our Approach
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('screening')} className="footer-link">
                  Community Screening
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('library')} className="footer-link">
                  Health Library
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('follow-ups')} className="footer-link">
                  Follow-up & Referrals
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('about')} className="footer-link">
                  About Swasthya
                </button>
              </li>
            </ul>
          </div>

          {/* Core Pillars Column */}
          <div className="footer-pillars-col">
            <h4 className="footer-col-heading">Guiding Values</h4>
            <ul className="footer-pillars-list">
              <li>Assisted Non-Diagnostic Check-ins</li>
              <li>Informed Voluntary Verbal Consent</li>
              <li>Community Health Worker Continuity</li>
              <li>Respectful Local Clinic Coordination</li>
              <li>Zero External Server Transmission</li>
            </ul>
          </div>
        </div>

        {/* Safety Note & Legal Strip */}
        <div className="footer-safety-strip">
          <div className="safety-note">
            <ShieldCheck size={16} className="safety-icon" />
            <p>
              <strong>Health Safety Notice:</strong> Swasthya provides general health awareness and demonstrates 
              a community-led workflow model. Content and illustrative records on this website do not constitute medical 
              advice, clinical diagnosis, or treatment planning, and do not replace consultation with a qualified medical 
              professional or local healthcare facility.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copy">
            © 2026–2030 Swasthya Initiative. All illustrative records and profiles are synthetic demonstrations.
          </div>
          <div className="footer-bottom-actions">
            <button 
              type="button" 
              onClick={() => onNavigate('about')} 
              className="footer-privacy-btn"
            >
              Privacy & Principles
            </button>
            <button 
              type="button" 
              onClick={scrollToTop} 
              className="back-to-top"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
