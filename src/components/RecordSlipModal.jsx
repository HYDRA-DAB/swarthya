import React, { useState, useEffect } from 'react';
import { 
  X, 
  Printer, 
  Share2, 
  CalendarClock, 
  MapPin, 
  ShieldCheck, 
  HeartPulse, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles 
} from 'lucide-react';

export default function RecordSlipModal({ record, onClose, onShowToast }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && record) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [record, onClose]);

  if (!record) return null;

  const handlePrint = () => {
    if (onShowToast) {
      onShowToast("Slip Generated", `Simulated print for ${record.participantName} (${record.id})`);
    }
  };

  const handleShare = () => {
    setCopied(true);
    if (onShowToast) {
      onShowToast("Link Copied", `Illustrative record reference #${record.id} copied to clipboard.`);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="slip-title">
      <div className="glass-modal record-slip-modal">
        {/* Modal Top */}
        <div className="modal-top">
          <div>
            <div className="modal-eyebrow">
              <Sparkles size={13} className="text-mint" />
              <span>Community Check-in Slip · Illustrative</span>
            </div>
            <h2 id="slip-title" className="modal-title">
              {record.participantName}
            </h2>
            <div className="modal-subtext font-mono">
              ID: {record.id} · Recorded on {record.date}
            </div>
          </div>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close record slip"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-scroll-area">
          {/* Status & Area Strip */}
          <div className="slip-meta-strip">
            <span className="slip-status-pill">
              <CheckCircle2 size={13} className="text-mint" />
              <span>{record.status}</span>
            </span>
            <span className="slip-area-pill">
              <MapPin size={13} />
              <span>{record.area}</span>
            </span>
            <span className="slip-age-pill">
              Age: {record.ageRange}
            </span>
          </div>

          {/* Topic Banner */}
          <div className="slip-topic-banner">
            <div className="topic-symbol">
              <HeartPulse size={20} className="text-mint" />
            </div>
            <div>
              <div className="topic-banner-eyebrow">SCREENING TOPIC</div>
              <div className="topic-banner-name">{record.topicTitle}</div>
            </div>
          </div>

          {/* Neutral Observations */}
          <div className="slip-section">
            <h4 className="slip-section-heading">Check-in Observations</h4>
            <div className="slip-notes-card">
              <p className="slip-notes-copy">{record.notes}</p>
              {record.vitalContext && (
                <div className="slip-vital-context">
                  <span className="vital-context-lbl">Context:</span>
                  <span>{record.vitalContext}</span>
                </div>
              )}
            </div>
          </div>

          {/* Follow-up / Referral Card */}
          {(record.followUpDue || record.referralGuidance) && (
            <div className="slip-continuity-card">
              <div className="continuity-card-header">
                <CalendarClock size={16} className="text-mint" />
                <span>Continuity & Next Steps</span>
              </div>

              {record.followUpDue && (
                <div className="continuity-item">
                  <span className="continuity-lbl">Scheduled Recheck:</span>
                  <span className="continuity-val text-amber">{record.followUpDue}</span>
                  <p className="continuity-reason">"{record.followUpReason}"</p>
                </div>
              )}

              {record.referralGuidance && (
                <div className="continuity-referral-box">
                  <div className="referral-box-header">
                    <AlertTriangle size={15} className="text-amber" />
                    <strong>Community Healthcare Guidance</strong>
                  </div>
                  <p className="referral-advice">{record.referralGuidance}</p>
                  <p className="referral-disclaimer">
                    Advice: Participant was encouraged to connect with a qualified doctor at their local clinic. 
                    (Notice: Non-diagnostic check-in; no medical appointment booked.)
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Safety & Demo Assurance */}
          <div className="slip-disclaimer-card">
            <ShieldCheck size={16} className="text-mint flex-shrink-0" />
            <p>
              This is an illustrative demonstration record. In a real-world community implementation, 
              records would be secured under offline-first encryption, accessible only with participant 
              consent and accredited community worker authentication.
            </p>
          </div>
        </div>

        {/* Modal Bottom Controls */}
        <div className="modal-bottom">
          <div className="slip-actions-left">
            <button type="button" className="btn-glass btn-icon-gap" onClick={handlePrint}>
              <Printer size={15} />
              <span>Print Slip</span>
            </button>
            <button type="button" className="btn-glass btn-icon-gap" onClick={handleShare}>
              <Share2 size={15} />
              <span>{copied ? 'Copied!' : 'Share Demo Link'}</span>
            </button>
          </div>

          <button type="button" className="btn-glass-primary" onClick={onClose}>
            Close Slip
          </button>
        </div>
      </div>
    </div>
  );
}
