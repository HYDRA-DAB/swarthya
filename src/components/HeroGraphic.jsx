import React from 'react';
import { 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Users 
} from 'lucide-react';

export default function HeroGraphic() {
  return (
    <div className="hero-graphic-wrap" aria-hidden="true">
      {/* Background radial glow */}
      <div className="graphic-ambient-glow" />

      {/* Main Glass Panel */}
      <div className="glass-panel main-panel">
        <div className="panel-header">
          <div className="panel-status">
            <span className="pulse-indicator" />
            <span className="panel-status-text">Community Health Outpost · Live Session</span>
          </div>
          <span className="panel-chip">Illustrative Model</span>
        </div>

        {/* Vital Rhythm Wave */}
        <div className="vital-wave-box">
          <div className="vital-meta">
            <div>
              <div className="vital-label">Resting Rhythm & Pulse</div>
              <div className="vital-value">
                <span>72</span> <span className="vital-unit">bpm</span>
              </div>
            </div>
            <div className="vital-tag-mint">
              <Activity size={13} />
              <span>Normal Baseline</span>
            </div>
          </div>

          <svg className="wave-svg" viewBox="0 0 360 64" fill="none" preserveAspectRatio="none">
            <path
              d="M0 32 L60 32 L75 32 L85 18 L95 48 L105 10 L115 42 L125 32 L190 32 L205 32 L215 20 L225 45 L235 15 L245 40 L255 32 L360 32"
              stroke="#2dd4bf"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0 32 L60 32 L75 32 L85 18 L95 48 L105 10 L115 42 L125 32 L190 32 L205 32 L215 20 L225 45 L235 15 L245 40 L255 32 L360 32 L360 64 L0 64 Z"
              fill="url(#waveGrad)"
              opacity="0.15"
            />
            <defs>
              <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2dd4bf" />
                <stop offset="1" stopColor="#2dd4bf" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Workflow Steps Preview within Glass Card */}
        <div className="panel-workflow-preview">
          <div className="workflow-step-pill">
            <span className="step-badge">1</span>
            <span>Voluntary Consent</span>
          </div>
          <div className="workflow-step-pill active-step">
            <span className="step-badge">2</span>
            <span>Assisted Check-in</span>
          </div>
          <div className="workflow-step-pill">
            <span className="step-badge">3</span>
            <span>Care Continuity</span>
          </div>
        </div>

        {/* Footer Metrics Row */}
        <div className="panel-footer-row">
          <div className="footer-metric">
            <MapPin size={13} className="text-muted" />
            <span>8 Village Panchayats</span>
          </div>
          <div className="footer-metric">
            <Users size={13} className="text-muted" />
            <span>Assisted Volunteer Outposts</span>
          </div>
        </div>
      </div>

      {/* Floating Accent Glass Card: Care Continuity */}
      <div className="glass-panel floating-card floating-card-left">
        <div className="floating-card-icon bg-mint-subtle">
          <CheckCircle2 size={18} className="text-mint" />
        </div>
        <div>
          <div className="floating-card-title">Continuity Pathway</div>
          <div className="floating-card-sub">Respectful 14-day rechecks</div>
        </div>
      </div>

      {/* Floating Accent Glass Card: Privacy First */}
      <div className="glass-panel floating-card floating-card-right">
        <div className="floating-card-icon bg-amber-subtle">
          <ShieldCheck size={18} className="text-amber" />
        </div>
        <div>
          <div className="floating-card-title">Dignified & Confidential</div>
          <div className="floating-card-sub">Informed verbal consent first</div>
        </div>
      </div>

      {/* Floating Accent Pill: Adherence Rate */}
      <div className="glass-panel floating-pill">
        <Clock size={14} className="text-mint" />
        <span>94% Follow-up Continuity Rate (Illustrative)</span>
      </div>
    </div>
  );
}
