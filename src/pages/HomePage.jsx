import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Users, 
  Globe, 
  BookOpen, 
  CalendarClock, 
  Stethoscope 
} from 'lucide-react';
import HeroGraphic from '../components/HeroGraphic';

export default function HomePage({ onNavigate, onOpenCheckIn }) {
  return (
    <div className="page-container page-home">
      {/* 1. Full/Near-Full Viewport Hero Section */}
      <section className="hero-viewport">
        <div className="hero-content-col">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="eyebrow-pill">
              <Sparkles size={12} className="text-mint" />
              Community-first primary health
            </span>
            <span className="hero-sdg-tag">
              <Globe size={12} />
              UN SDG 3: Good Health
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            Care that meets communities <span className="text-gradient">where they are.</span>
          </h1>

          {/* Description */}
          <p className="hero-intro-text">
            Swasthya reimagines preventive health in rural areas through assisted check-ins, 
            respectful continuity, simple non-diagnostic records, and clearer pathways to local healthcare services.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions-row">
            <button
              type="button"
              className="btn-glass-primary hero-btn-main"
              onClick={() => onNavigate('approach')}
            >
              <span>Explore our approach</span>
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              className="btn-glass hero-btn-sub"
              onClick={() => onNavigate('screening')}
            >
              <span>See the screening journey</span>
            </button>
          </div>

          {/* Subtle Illustrative Note */}
          <div className="hero-subtle-note">
            <ShieldCheck size={14} className="text-mint flex-shrink-0" />
            <span>
              Illustrative concept model. All demonstration records, profiles, and workflow data are synthetic.
            </span>
          </div>
        </div>

        {/* Hero Visual Column */}
        <div className="hero-visual-col">
          <HeroGraphic />
        </div>
      </section>

      {/* 2. The Access Gap Section */}
      <section className="content-section section-access-gap">
        <div className="section-header-centered">
          <span className="section-eyebrow-tag">The Reality</span>
          <h2 className="section-title">The Primary Health Access Gap</h2>
          <p className="section-lead-copy">
            In many rural communities, essential healthcare remains reactive rather than preventive. 
            Addressing this divide requires care models designed around accessibility, proximity, and trust.
          </p>
        </div>

        <div className="gap-cards-grid">
          <div className="glass-card gap-card">
            <div className="gap-card-number">01</div>
            <h3 className="gap-card-title">Physical Distance</h3>
            <p className="gap-card-copy">
              Primary health clinics are often miles away over difficult terrain. Without local 
              preventive touchpoints, individuals only travel when symptoms become severe.
            </p>
          </div>

          <div className="gap-card-card glass-card gap-card">
            <div className="gap-card-number">02</div>
            <h3 className="gap-card-title">Silent Complications</h3>
            <p className="gap-card-copy">
              Conditions like elevated blood pressure and fluctuating glucose levels frequently 
              develop quietly for years without outward pain, leading to unexpected crises.
            </p>
          </div>

          <div className="glass-card gap-card">
            <div className="gap-card-number">03</div>
            <h3 className="gap-card-title">Fragmented Continuity</h3>
            <p className="gap-card-copy">
              Isolated one-off check-ups rarely translate to long-term health habits without 
              structured follow-up, friendly community check-ins, and assisted clinic coordination.
            </p>
          </div>
        </div>
      </section>

      {/* 3. A More Connected Journey Section */}
      <section className="content-section section-connected">
        <div className="connected-banner glass-card">
          <div className="connected-content">
            <span className="section-eyebrow-tag">A Coherent Service</span>
            <h2 className="section-title">A More Connected Journey</h2>
            <p className="section-lead-copy">
              Swasthya connects four vital touchpoints into a unified, human-centred community experience. 
              Rather than isolated medical tests, every interaction builds trust and continuity.
            </p>

            <div className="connected-pillars-row">
              <div className="pillar-box">
                <div className="pillar-icon bg-mint-subtle text-mint">
                  <Activity size={20} />
                </div>
                <h4 className="pillar-heading">Assisted Screening</h4>
                <p className="pillar-text">Gentle, non-diagnostic checks conducted in familiar community spaces.</p>
              </div>

              <div className="pillar-box">
                <div className="pillar-icon bg-blue-subtle text-blue">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="pillar-heading">Simple Slips</h4>
                <p className="pillar-text">Dignified summary records that participants hold and own locally.</p>
              </div>

              <div className="pillar-box">
                <div className="pillar-icon bg-amber-subtle text-amber">
                  <BookOpen size={20} />
                </div>
                <h4 className="pillar-heading">Health Literacy</h4>
                <p className="pillar-text">Culturally resonant awareness rooted in local food habits and lifestyle.</p>
              </div>

              <div className="pillar-box">
                <div className="pillar-icon bg-violet-subtle text-violet">
                  <CalendarClock size={20} />
                </div>
                <h4 className="pillar-heading">Respectful Follow-up</h4>
                <p className="pillar-text">Proactive 14-day check-ins and clear guidance to local clinical services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works Section (3-Step Visual Explanation) */}
      <section className="content-section section-how-it-works">
        <div className="section-header-centered">
          <span className="section-eyebrow-tag">Workflow</span>
          <h2 className="section-title">How It Works in Practice</h2>
          <p className="section-lead-copy">
            A three-step approach built to respect participants' time, agency, and privacy.
          </p>
        </div>

        <div className="steps-cards-grid">
          <div className="glass-card step-card">
            <div className="step-badge-large">Step 1</div>
            <h3 className="step-card-title">Voluntary Verbal Consent</h3>
            <p className="step-card-copy">
              The health volunteer explains the screening purpose in simple, conversational language. 
              Participation is strictly voluntary, and no information is recorded without explicit verbal permission.
            </p>
            <div className="step-card-tag">Dignity First</div>
          </div>

          <div className="glass-card step-card highlight-step">
            <div className="step-badge-large text-mint">Step 2</div>
            <h3 className="step-card-title">Assisted Check-in & Notes</h3>
            <p className="step-card-copy">
              Volunteers assist with routine vital measurements—such as blood pressure or resting pulse—and 
              record neutral, non-diagnostic observations alongside dietary and daily movement habits.
            </p>
            <div className="step-card-tag text-mint">Non-Diagnostic</div>
          </div>

          <div className="glass-card step-card">
            <div className="step-badge-large">Step 3</div>
            <h3 className="step-card-title">Follow-up & Clinic Guidance</h3>
            <p className="step-card-copy">
              A 14-day community recheck is agreed upon, or guidance is provided to consult a qualified medical 
              officer at the local primary clinic when observations indicate professional attention is warranted.
            </p>
            <div className="step-card-tag">Care Continuity</div>
          </div>
        </div>
      </section>

      {/* 5. Designed Around People Section */}
      <section className="content-section section-principles">
        <div className="principles-layout glass-card">
          <div className="principles-text-col">
            <span className="section-eyebrow-tag">Core Principles</span>
            <h2 className="section-title">Designed Around People, Not Paperwork</h2>
            <p className="section-lead-copy">
              Technology in primary health must serve human dignity. Swasthya is architected around 
              trust, local autonomy, and ethical data boundaries.
            </p>

            <div className="principles-list">
              <div className="principle-item">
                <CheckCircle2 size={18} className="text-mint flex-shrink-0" />
                <div>
                  <h4 className="principle-name">Voluntary & Non-Stigmatizing</h4>
                  <p className="principle-desc">Check-ins are conversational and welcoming. Every participant has the right to pause or withdraw anytime.</p>
                </div>
              </div>

              <div className="principle-item">
                <CheckCircle2 size={18} className="text-mint flex-shrink-0" />
                <div>
                  <h4 className="principle-name">Zero Server Transmission</h4>
                  <p className="principle-desc">In this demonstration, records stay strictly in your browser session. In field models, offline-first local device security protects every entry.</p>
                </div>
              </div>

              <div className="principle-item">
                <CheckCircle2 size={18} className="text-mint flex-shrink-0" />
                <div>
                  <h4 className="principle-name">Community Health Worker Empowerment</h4>
                  <p className="principle-desc">Designed to support accredited village volunteers as trusted coordinators, rather than automating away human care.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="principles-stat-col">
            <div className="glass-card stat-highlight-card">
              <div className="stat-highlight-val text-mint font-mono">100%</div>
              <div className="stat-highlight-label">Voluntary Informed Consent</div>
              <p className="stat-highlight-desc">Verbal explanation in plain everyday language before any observation is recorded.</p>
            </div>

            <div className="glass-card stat-highlight-card">
              <div className="stat-highlight-val text-blue font-mono">14 Days</div>
              <div className="stat-highlight-label">Respectful Recheck Rhythm</div>
              <p className="stat-highlight-desc">Providing supportive continuity so participants are never left without guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Explore the Project Cards */}
      <section className="content-section section-explore">
        <div className="section-header-centered">
          <span className="section-eyebrow-tag">Discover More</span>
          <h2 className="section-title">Explore the Swasthya Initiative</h2>
          <p className="section-lead-copy">
            Navigate through our approach, screening mechanics, awareness library, and ethical framework.
          </p>
        </div>

        <div className="explore-cards-grid">
          <div className="glass-card explore-card" onClick={() => onNavigate('approach')} role="button" tabIndex={0}>
            <div className="explore-card-top">
              <div className="explore-icon bg-mint-subtle text-mint">
                <Stethoscope size={22} />
              </div>
              <ArrowRight size={18} className="explore-arrow" />
            </div>
            <h3 className="explore-title">Our Approach</h3>
            <p className="explore-desc">Read the sectioned story on why accessible screening matters and how assisted care works in field settings.</p>
          </div>

          <div className="glass-card explore-card" onClick={() => onNavigate('screening')} role="button" tabIndex={0}>
            <div className="explore-card-top">
              <div className="explore-icon bg-blue-subtle text-blue">
                <Activity size={22} />
              </div>
              <ArrowRight size={18} className="explore-arrow" />
            </div>
            <h3 className="explore-title">Community Screening</h3>
            <p className="explore-desc">Experience the guided check-in flow, review non-diagnostic observations, and inspect session records.</p>
          </div>

          <div className="glass-card explore-card" onClick={() => onNavigate('library')} role="button" tabIndex={0}>
            <div className="explore-card-top">
              <div className="explore-icon bg-amber-subtle text-amber">
                <BookOpen size={22} />
              </div>
              <ArrowRight size={18} className="explore-arrow" />
            </div>
            <h3 className="explore-title">Health Library</h3>
            <p className="explore-desc">Explore calm, supportive reading guides covering everyday heart health, local iron-rich foods, and sleep.</p>
          </div>

          <div className="glass-card explore-card" onClick={() => onNavigate('follow-ups')} role="button" tabIndex={0}>
            <div className="explore-card-top">
              <div className="explore-icon bg-violet-subtle text-violet">
                <CalendarClock size={22} />
              </div>
              <ArrowRight size={18} className="explore-arrow" />
            </div>
            <h3 className="explore-title">Follow-up & Referrals</h3>
            <p className="explore-desc">Understand how care continuity works with illustrative follow-up tracking and primary clinic referral guidance.</p>
          </div>

          <div className="glass-card explore-card" onClick={() => onNavigate('about')} role="button" tabIndex={0}>
            <div className="explore-card-top">
              <div className="explore-icon bg-lime-subtle text-lime">
                <Users size={22} />
              </div>
              <ArrowRight size={18} className="explore-arrow" />
            </div>
            <h3 className="explore-title">About Swasthya</h3>
            <p className="explore-desc">Learn about the project vision, the rural communities it is designed to support, and our ethical principles.</p>
          </div>
        </div>
      </section>

      {/* 7. Final Call to Action */}
      <section className="content-section section-final-cta">
        <div className="glass-card final-cta-card">
          <div className="cta-content">
            <h2 className="cta-headline">Ready to experience the screening journey?</h2>
            <p className="cta-subtext">
              Try our interactive, non-diagnostic check-in flow or explore the principles guiding our approach.
            </p>
            <div className="cta-buttons-row">
              <button
                type="button"
                className="btn-glass-primary"
                onClick={onOpenCheckIn}
              >
                <Sparkles size={16} />
                <span>Start an illustrative check-in</span>
              </button>
              <button
                type="button"
                className="btn-glass"
                onClick={() => onNavigate('approach')}
              >
                <span>Read our approach</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
