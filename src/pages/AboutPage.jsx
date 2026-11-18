import React from 'react';
import { 
  ShieldCheck, 
  Globe, 
  Users, 
  CheckCircle2, 
  HeartHandshake, 
  Sparkles, 
  AlertTriangle 
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="page-container page-about">
      {/* Page Header */}
      <header className="page-header">
        <div className="header-eyebrow">
          <span className="eyebrow-pill">
            <Sparkles size={12} className="text-mint" />
            Project Story & Vision
          </span>
        </div>
        <h1 className="page-main-title">About the Swasthya Initiative</h1>
        <p className="page-lead">
          Building thoughtful community-first models to bring accessible, dignified primary health screening 
          and care continuity to underserved rural communities by 2030.
        </p>
      </header>

      {/* Story / Mission Section */}
      <section className="about-story-section">
        <div className="glass-card story-card">
          <div className="story-badge">Our Mission</div>
          <h2 className="story-heading">Primary Healthcare Designed for Proximity and Trust</h2>
          <div className="story-paragraphs">
            <p>
              In rural regions around the world, geographical distance, limited transportation, and economic vulnerability 
              create steep barriers to preventive healthcare. Most individuals interact with health facilities only when a 
              health condition has progressed to an acute emergency—often resulting in severe physical complications and 
              overwhelming out-of-pocket medical debts.
            </p>
            <p>
              <strong>Swasthya</strong>—derived from the root meaning of holistic wellness and self-reliance—is an 
              initiative exploring how lightweight, community-embedded health check-ins can identify lifestyle patterns 
              early. By equipping accredited village health volunteers with non-invasive digital tools, clear verbal 
              consent practices, and structured continuity pathways, Swasthya envisions a world where quality preventive 
              care is accessible within walking distance of every household.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Support Section */}
      <section className="about-support-section">
        <div className="section-header-centered">
          <span className="section-eyebrow-tag">Community Focus</span>
          <h2 className="section-title">Who Swasthya is Designed to Support</h2>
          <p className="section-lead-copy">
            A collaborative model connecting three essential participants in the rural health journey.
          </p>
        </div>

        <div className="support-cards-grid">
          <div className="glass-card support-card">
            <div className="support-icon bg-mint-subtle text-mint">
              <Users size={22} />
            </div>
            <h3 className="support-title">Rural Working Families</h3>
            <p className="support-desc">
              Agricultural workers, informal artisans, women, and elders who lack time or resources to travel 
              to distant clinics for routine asymptomatic checks.
            </p>
          </div>

          <div className="glass-card support-card">
            <div className="support-icon bg-blue-subtle text-blue">
              <HeartHandshake size={22} />
            </div>
            <h3 className="support-title">Community Health Volunteers</h3>
            <p className="support-desc">
              Dedicated frontline workers who know their village intimately and require intuitive, respectful tools 
              to guide check-ins, record observations, and maintain follow-ups.
            </p>
          </div>

          <div className="glass-card support-card">
            <div className="support-icon bg-amber-subtle text-amber">
              <ShieldCheck size={22} />
            </div>
            <h3 className="support-title">Primary Health Clinic Doctors</h3>
            <p className="support-desc">
              Public clinic medical officers who receive patients carrying clear, structured observation slips, 
              enabling faster triage and continuous care.
            </p>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="about-principles-section">
        <div className="glass-card principles-full-card">
          <div className="section-header-compact">
            <span className="section-eyebrow-tag">Ethical Core</span>
            <h2 className="section-subheading">Our Guiding Principles</h2>
            <p className="section-subtext">The ethical foundation behind every screen, check-in, and interaction.</p>
          </div>

          <div className="principles-two-col-grid">
            <div className="principle-box">
              <div className="principle-hdr">
                <CheckCircle2 size={18} className="text-mint" />
                <h4 className="principle-title">1. Dignity and Voluntary Participation</h4>
              </div>
              <p className="principle-copy">
                Healthcare must never feel coercive or intimidating. Check-ins are conducted in friendly, familiar 
                settings. Participants can decline, pause, or request erasure at any moment without justification.
              </p>
            </div>

            <div className="principle-box">
              <div className="principle-hdr">
                <CheckCircle2 size={18} className="text-mint" />
                <h4 className="principle-title">2. Plain-Language Verbal Consent</h4>
              </div>
              <p className="principle-copy">
                Before any measurement is made, volunteers explain the purpose clearly in everyday conversational 
                language. No assumptions are made, and consent is actively confirmed.
              </p>
            </div>

            <div className="principle-box">
              <div className="principle-hdr">
                <CheckCircle2 size={18} className="text-mint" />
                <h4 className="principle-title">3. Strict Non-Diagnostic Boundaries</h4>
              </div>
              <p className="principle-copy">
                Swasthya volunteers and software never provide medical diagnoses or prescribe medications. Their role 
                is strictly preventive lifestyle observation and connecting individuals to certified physicians.
              </p>
            </div>

            <div className="principle-box">
              <div className="principle-hdr">
                <CheckCircle2 size={18} className="text-mint" />
                <h4 className="principle-title">4. Offline-First Privacy Architecture</h4>
              </div>
              <p className="principle-copy">
                In this live demo, records remain exclusively in transient browser memory. In production models, 
                data is encrypted on-device with zero external transmission without explicit participant authorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UN Sustainable Development Goals Alignment */}
      <section className="about-sdg-section">
        <div className="glass-card sdg-card-wrap">
          <div className="sdg-badge-large">
            <Globe size={28} className="text-mint" />
            <span className="sdg-pill-label">UN SDG 3</span>
          </div>
          <div className="sdg-content">
            <h3 className="sdg-heading">Aligned with Sustainable Development Goal 3</h3>
            <p className="sdg-description">
              Swasthya aligns directly with <strong>UN SDG Target 3.8:</strong> <em>“Achieve universal health coverage, 
              including financial risk protection, access to quality essential health-care services and access to safe, 
              effective, quality and affordable essential medicines and vaccines for all.”</em>
            </p>
            <p className="sdg-sub">
              By focusing on proactive prevention at the community doorstep, Swasthya aims to help reduce premature 
              mortality from non-communicable diseases through early detection and healthy living practices.
            </p>
          </div>
        </div>
      </section>

      {/* Safety & Educational Disclaimer */}
      <section className="about-disclaimer-section">
        <div className="glass-card about-disclaimer-card">
          <AlertTriangle size={22} className="text-amber flex-shrink-0" />
          <div>
            <h4 className="disclaimer-title">Project Status & Safety Notice</h4>
            <p className="disclaimer-copy">
              This website presents an illustrative community health concept and workflow demonstration. 
              The Swasthya platform is not currently operating as an active clinical service, has not been approved 
              as a diagnostic medical device, and does not replace medical advice from a qualified doctor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
