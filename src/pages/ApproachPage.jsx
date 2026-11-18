import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  HeartHandshake, 
  Users, 
  CheckCircle2, 
  Clock, 
  Sparkles 
} from 'lucide-react';

export default function ApproachPage({ onOpenCheckIn }) {
  return (
    <div className="page-container page-approach">
      {/* Page Header */}
      <header className="page-header">
        <div className="header-eyebrow">
          <span className="eyebrow-pill">
            <Sparkles size={12} className="text-mint" />
            Care Architecture
          </span>
        </div>
        <h1 className="page-main-title">Our Approach to Rural Primary Health</h1>
        <p className="page-lead">
          Bridging the distance between rural households and primary healthcare through assisted preventive check-ins, 
          respectful continuity, and community empowerment.
        </p>
      </header>

      {/* 1. Why Accessible Primary Screening Matters */}
      <section className="approach-section">
        <div className="glass-card approach-card">
          <div className="approach-badge-row">
            <span className="approach-num-chip">01</span>
            <span className="approach-category">The Premise</span>
          </div>

          <h2 className="approach-heading">Why Accessible Primary Screening Matters</h2>
          <p className="approach-body">
            In many rural communities, essential healthcare remains reactive. Individuals visit clinics primarily 
            when pain becomes unbearable or when acute complications impede daily work. By that time, manageable 
            conditions like hypertension or blood sugar irregularities may have progressed silently for years.
          </p>

          <div className="approach-two-col">
            <div className="sub-box">
              <h4 className="sub-box-title">Catching Silent Shifts Early</h4>
              <p className="sub-box-desc">
                Elevated blood pressure rarely causes symptoms early on. Routine community checks enable individuals 
                to identify patterns early, when simple lifestyle changes in cooking salt, hydration, and movement can 
                prevent cardiovascular crises.
              </p>
            </div>

            <div className="sub-box">
              <h4 className="sub-box-title">Protecting Family Livelihoods</h4>
              <p className="sub-box-desc">
                Emergency hospital admissions represent one of the primary drivers of sudden out-of-pocket debt in 
                rural households. Early preventive check-ins help families manage health proactively, avoiding catastrophic 
                medical expenditures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How an Assisted Community Check-in Works */}
      <section className="approach-section">
        <div className="glass-card approach-card">
          <div className="approach-badge-row">
            <span className="approach-num-chip">02</span>
            <span className="approach-category">Field Mechanics</span>
          </div>

          <h2 className="approach-heading">How an Assisted Community Check-in Works</h2>
          <p className="approach-body">
            Rather than requiring residents to travel miles to a distant clinic or navigate complicated apps alone, 
            Swasthya models an assisted approach where accredited community health volunteers bring non-invasive tools 
            directly to village common spaces.
          </p>

          {/* Flow Diagram */}
          <div className="flow-steps-diagram">
            <div className="flow-node">
              <div className="node-icon bg-mint-subtle text-mint">
                <Users size={18} />
              </div>
              <div className="node-title">Familiar Presence</div>
              <p className="node-copy">Volunteers set up under tree shade, panchayat halls, or cooperative markets.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-node">
              <div className="node-icon bg-blue-subtle text-blue">
                <Activity size={18} />
              </div>
              <div className="node-title">Gentle Measurement</div>
              <p className="node-copy">Assisted seated cuff check, pulse assessment, or dietary conversation.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-node">
              <div className="node-icon bg-amber-subtle text-amber">
                <ShieldCheck size={18} />
              </div>
              <div className="node-title">Local Record Slip</div>
              <p className="node-copy">Participant holds their own non-diagnostic slip with clear next steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Care Continuity: Follow-up & Referral Guidance */}
      <section className="approach-section">
        <div className="glass-card approach-card">
          <div className="approach-badge-row">
            <span className="approach-num-chip">03</span>
            <span className="approach-category">Continuity</span>
          </div>

          <h2 className="approach-heading">Follow-up and Referral Guidance Support Continuity</h2>
          <p className="approach-body">
            A single screening without follow-up often leaves individuals confused about what to do next. 
            Swasthya treats screening as the start of an ongoing relationship rather than a one-off transaction.
          </p>

          <div className="approach-grid-3">
            <div className="feature-block">
              <Clock size={20} className="text-mint mb-2" />
              <h4 className="feature-title">Structured 14-Day Rechecks</h4>
              <p className="feature-copy">
                When a reading is slightly elevated, the health volunteer schedules a routine recheck after two weeks 
                to see whether hydration, rest, and reduced salt have steadied the pulse.
              </p>
            </div>

            <div className="feature-block">
              <HeartHandshake size={20} className="text-blue mb-2" />
              <h4 className="feature-title">Clear Clinic Referral Path</h4>
              <p className="feature-copy">
                If observations suggest clinical evaluation is warranted, volunteers provide a structured referral 
                slip that participants can present directly to a medical officer at the local primary health centre.
              </p>
            </div>

            <div className="feature-block">
              <CheckCircle2 size={20} className="text-lime mb-2" />
              <h4 className="feature-title">Closing the Loop</h4>
              <p className="feature-copy">
                Volunteers follow up after clinic visits to ensure participants understood their doctor's guidance 
                and felt supported throughout the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Culturally Resonant Health Awareness */}
      <section className="approach-section">
        <div className="glass-card approach-card">
          <div className="approach-badge-row">
            <span className="approach-num-chip">04</span>
            <span className="approach-category">Education</span>
          </div>

          <h2 className="approach-heading">Health Awareness Rooted in Local Life</h2>
          <p className="approach-body">
            Generic medical brochures written in clinical terms rarely alter daily routines. Swasthya's health library 
            focuses on practical knowledge, everyday cooking wisdom, and seasonal care.
          </p>

          <div className="approach-two-col">
            <div className="sub-box">
              <h4 className="sub-box-title">Accessible Nutrition</h4>
              <p className="sub-box-desc">
                Emphasizing affordable, locally grown foods—such as drumstick leaves, finger millet, sprouted lentils, 
                and seasonal fruits—rather than expensive commercial tonics or imported supplements.
              </p>
            </div>

            <div className="sub-box">
              <h4 className="sub-box-title">Respectful Myth-Busting</h4>
              <p className="sub-box-desc">
                Addressing common misconceptions—like believing blood pressure always produces headaches, or that 
                mental fatigue is a sign of personal weakness—with empathy and grounded science.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Privacy, Consent, and Dignity */}
      <section className="approach-section">
        <div className="glass-card approach-card">
          <div className="approach-badge-row">
            <span className="approach-num-chip">05</span>
            <span className="approach-category">Ethics</span>
          </div>

          <h2 className="approach-heading">What Privacy, Consent, and Dignity Mean in Practice</h2>
          <p className="approach-body">
            In rural communities, health check-ins must be conducted in spaces that protect privacy and avoid social 
            embarrassment. Dignity is non-negotiable.
          </p>

          <div className="ethics-cards-row">
            <div className="ethic-card">
              <h4 className="ethic-title">Informed Verbal Consent</h4>
              <p className="ethic-text">
                Explained clearly before every check-in. Participants hold complete autonomy to decline, pause, or 
                request their record be erased at any moment without judgment.
              </p>
            </div>

            <div className="ethic-card">
              <h4 className="ethic-title">Offline-First Security</h4>
              <p className="ethic-text">
                In this demo, data never leaves your browser. In deployment models, data is encrypted locally on the 
                volunteer's device, requiring authenticated PIN or biometric authorization.
              </p>
            </div>

            <div className="ethic-card">
              <h4 className="ethic-title">Strict Non-Diagnostic Role</h4>
              <p className="ethic-text">
                Health volunteers never diagnose or prescribe medication. Their role is solely observation, preventive 
                encouragement, and connecting individuals with certified healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="approach-cta-wrap">
        <div className="glass-card approach-cta-card">
          <div>
            <h3 className="cta-mini-title">Experience the screening workflow</h3>
            <p className="cta-mini-desc">See how voluntary consent and neutral observations come together in our guided demo.</p>
          </div>
          <button
            type="button"
            className="btn-glass-primary"
            onClick={onOpenCheckIn}
          >
            <Sparkles size={16} />
            <span>Start a check-in</span>
          </button>
        </div>
      </section>
    </div>
  );
}
