import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  MapPin, 
  ShieldAlert, 
  Sparkles, 
  ArrowRight, 
  Check 
} from 'lucide-react';

export default function FollowUpsPage({ 
  followUps, 
  onMarkComplete, 
  onViewRecordSlip, 
  onShowToast 
}) {
  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming' | 'completed' | 'referral_guidance'

  const upcomingItems = useMemo(() => followUps.filter(f => !f.isCompleted && f.status !== 'referral_guidance'), [followUps]);
  const completedItems = useMemo(() => followUps.filter(f => f.isCompleted), [followUps]);
  const referralItems = useMemo(() => followUps.filter(f => f.hasReferral || f.status === 'referral_guidance'), [followUps]);

  const displayedList = activeTab === 'upcoming' 
    ? upcomingItems 
    : activeTab === 'completed' 
      ? completedItems 
      : referralItems;

  const handleCompleteAction = (id, name) => {
    onMarkComplete(id);
    if (onShowToast) {
      onShowToast("Follow-up Completed", `Marked illustrative recheck as completed for ${name}.`);
    }
  };

  return (
    <div className="page-container page-followups">
      {/* Page Header */}
      <header className="page-header">
        <div className="header-eyebrow">
          <span className="eyebrow-pill">
            <Sparkles size={12} className="text-mint" />
            Care Continuity
          </span>
        </div>
        <h1 className="page-main-title">Follow-up & Referral Guidance</h1>
        <p className="page-lead">
          Ensuring rural participants are never left without guidance after an initial check-in. 
          Proactive 14-day rechecks and structured referral pathways support continuous community well-being.
        </p>
      </header>

      {/* Overview Explanation Cards */}
      <section className="followups-overview-section">
        <div className="followup-concept-grid">
          <div className="glass-card concept-card">
            <div className="concept-icon bg-mint-subtle text-mint">
              <Clock size={20} />
            </div>
            <h3 className="concept-title">Proactive 14-Day Rechecks</h3>
            <p className="concept-desc">
              When a vital reading is slightly elevated, volunteers agree on a two-week check-in. 
              This allows participants time to adapt daily hydration, rest, and cooking salt before rechecking.
            </p>
          </div>

          <div className="glass-card concept-card">
            <div className="concept-icon bg-amber-subtle text-amber">
              <AlertTriangle size={20} />
            </div>
            <h3 className="concept-title">Assisted Referral Guidance</h3>
            <p className="concept-desc">
              When observations suggest medical attention is appropriate, volunteers provide a structured 
              note to take to a doctor at the local primary healthcare centre.
            </p>
          </div>

          <div className="glass-card concept-card">
            <div className="concept-icon bg-blue-subtle text-blue">
              <CheckCircle2 size={20} />
            </div>
            <h3 className="concept-title">Respectful Continuity</h3>
            <p className="concept-desc">
              Check-ins are never treated as cold numerical tests. Volunteers maintain warm contact, 
              answering lifestyle questions and building enduring community trust.
            </p>
          </div>
        </div>
      </section>

      {/* Referral Advisory Protocol Notice */}
      <section className="referral-protocol-section">
        <div className="glass-card protocol-card">
          <ShieldAlert size={20} className="protocol-icon text-amber flex-shrink-0" />
          <div>
            <h4 className="protocol-title">Referral Guidance Protocol</h4>
            <p className="protocol-text">
              Referral guidance in Swasthya is strictly an advisory recommendation for the participant to connect 
              with a certified medical officer at their nearest primary health clinic. 
              <strong> No appointment has been booked, no prescription has been issued, and no real medical referral was transmitted.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Tabs & Items List */}
      <section className="followups-list-section">
        <div className="section-header-row">
          <div>
            <h2 className="section-subheading">Illustrative Follow-up Items</h2>
            <p className="section-subtext">Demonstration items showing how recheck tasks are managed in session state.</p>
          </div>

          <span className="illustrative-chip">Demonstration Items</span>
        </div>

        {/* Tab Controls */}
        <div className="glass-tabs-bar" role="tablist" aria-label="Follow-up Status Tabs">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'upcoming'}
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            <Clock size={15} />
            <span>Upcoming Rechecks</span>
            <span className="tab-badge">{upcomingItems.length}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'completed'}
            className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            <CheckCircle2 size={15} />
            <span>Completed</span>
            <span className="tab-badge">{completedItems.length}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'referral_guidance'}
            className={`tab-btn ${activeTab === 'referral_guidance' ? 'active' : ''}`}
            onClick={() => setActiveTab('referral_guidance')}
          >
            <AlertTriangle size={15} />
            <span>Referral Guidance</span>
            <span className="tab-badge">{referralItems.length}</span>
          </button>
        </div>

        {/* List of Cards */}
        <div className="followup-cards-list" role="list">
          {displayedList.length > 0 ? (
            displayedList.map(item => (
              <div 
                key={item.id} 
                className={`glass-card followup-card ${item.isCompleted ? 'is-complete' : ''}`}
                role="listitem"
              >
                <div className="followup-left-col">
                  <div className="followup-name-row">
                    <h3 className="followup-name">{item.participantName}</h3>
                    <span className="followup-area-tag">
                      <MapPin size={11} /> {item.area}
                    </span>
                    {item.hasReferral && (
                      <span className="followup-ref-tag">Clinic Advisory</span>
                    )}
                    {item.isCompleted && (
                      <span className="followup-done-tag">
                        <Check size={11} /> Verified Complete
                      </span>
                    )}
                  </div>

                  <div className="followup-topic-line">
                    <span className="followup-topic-title text-mint">{item.topicTitle}</span>
                    <span className="followup-dot">·</span>
                    <span className="followup-reason-quote">"{item.reason}"</span>
                  </div>

                  {item.guidanceNote && (
                    <div className="followup-guidance-note">
                      <strong>Volunteer Note:</strong> {item.guidanceNote}
                    </div>
                  )}
                </div>

                <div className="followup-mid-col">
                  <div className="due-label-text">
                    {item.isCompleted ? 'Completed On' : 'Target Due Date'}
                  </div>
                  <div className="due-date-value font-mono">
                    {item.isCompleted ? (item.completedDate || item.dueDate) : item.dueDate}
                  </div>
                </div>

                <div className="followup-actions-col">
                  {!item.isCompleted ? (
                    <button
                      type="button"
                      className="btn-glass-primary btn-action-sm"
                      onClick={() => handleCompleteAction(item.id, item.participantName)}
                    >
                      <CheckCircle2 size={15} />
                      <span>Mark complete</span>
                    </button>
                  ) : (
                    <div className="completed-indicator">
                      <CheckCircle2 size={15} className="text-mint" />
                      <span>Recheck done</span>
                    </div>
                  )}

                  {item.recordId && onViewRecordSlip && (
                    <button
                      type="button"
                      className="btn-glass btn-action-sm"
                      onClick={() => onViewRecordSlip(item.recordId)}
                      title="View linked check-in slip"
                    >
                      <span>View slip</span>
                      <ArrowRight size={13} />
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="glass-card empty-followups-card">
              <CheckCircle2 size={32} className="text-mint empty-icon" />
              <h3 className="empty-title">
                {activeTab === 'upcoming' 
                  ? 'All pending follow-ups are up to date!' 
                  : activeTab === 'completed' 
                    ? 'No completed follow-ups recorded yet.' 
                    : 'No active referral guidance items.'}
              </h3>
              <p className="empty-desc">
                When a new community check-in with a scheduled recheck is saved, it will appear here automatically.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
