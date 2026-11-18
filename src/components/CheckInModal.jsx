import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle, 
  HeartPulse, 
  Activity, 
  Apple, 
  Droplets, 
  Smile, 
  Sparkles, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Info 
} from 'lucide-react';
import { screeningTopics, sampleAreas } from '../data/mockData';

export default function CheckInModal({ isOpen, onClose, onSubmitRecord, onViewRecords }) {
  const [step, setStep] = useState(1); // 1: Participant & Topic, 2: Observations, 3: Success

  // Form State
  const [participantName, setParticipantName] = useState('');
  const [ageRange, setAgeRange] = useState('36–50');
  const [area, setArea] = useState('Riverside Cluster');
  const [topicId, setTopicId] = useState('blood-pressure');
  const [consentGiven, setConsentGiven] = useState(false);

  // Step 2 Form State
  const [notes, setNotes] = useState('');
  const [vitalContext, setVitalContext] = useState('');
  const [outcomeStatus, setOutcomeStatus] = useState('Follow-up suggested');
  const [scheduleFollowUp, setScheduleFollowUp] = useState(true);
  const [followUpDays, setFollowUpDays] = useState(14);
  const [followUpReason, setFollowUpReason] = useState('Routine 14-day blood pressure recheck after hydration review');
  const [referralFacility, setReferralFacility] = useState('Local Primary Health Clinic');

  // Error & Submitted State
  const [errors, setErrors] = useState({});
  const [submittedRecord, setSubmittedRecord] = useState(null);

  // Prop transition reset
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setStep(1);
      setParticipantName('');
      setAgeRange('36–50');
      setArea('Riverside Cluster');
      setTopicId('blood-pressure');
      setConsentGiven(false);
      setNotes('Participant attended morning check-in. Seated rest observed. Reported feeling well with steady daily stamina.');
      setVitalContext('Resting seated arm cuff check recorded after 5 minutes of quiet rest. Normal resting pulse.');
      setOutcomeStatus('Follow-up suggested');
      setScheduleFollowUp(true);
      setFollowUpDays(14);
      setFollowUpReason('Routine 14-day blood pressure recheck after hydration review');
      setReferralFacility('Local Primary Health Clinic');
      setErrors({});
      setSubmittedRecord(null);
    }
  }

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleTopicSelect = (newTopicId) => {
    setTopicId(newTopicId);
    const selected = screeningTopics.find(t => t.id === newTopicId);
    if (selected) {
      setFollowUpDays(selected.defaultFollowupDays || 14);
      if (newTopicId === 'blood-pressure') {
        setFollowUpReason('Routine 14-day blood pressure recheck after hydration review');
        setVitalContext('Seated arm cuff measurement taken after 5 minutes rest.');
      } else if (newTopicId === 'blood-sugar') {
        setFollowUpReason('Routine capillary glucose recheck and balanced meal conversation');
        setVitalContext('Capillary check-in recorded. Single-use sterile supplies.');
      } else if (newTopicId === 'nutrition-awareness') {
        setFollowUpReason('Follow-up conversation on dietary iron and fresh greens');
        setVitalContext('Dietary diversity assessment; healthy nail bed tone observed.');
      } else if (newTopicId === 'emotional-wellbeing') {
        setFollowUpReason('Check-in on sleep regularity and village peer circle participation');
        setVitalContext('Gentle paced breathing review and restful sleep habits check.');
      } else {
        setFollowUpReason('Routine seasonal mobility and hydration check-in');
        setVitalContext('General stamina and hydration review.');
      }
    }
  };

  const getTopicIcon = (iconName) => {
    switch (iconName) {
      case 'Activity': return <Activity size={18} />;
      case 'Apple': return <Apple size={18} />;
      case 'Droplets': return <Droplets size={18} />;
      case 'Smile': return <Smile size={18} />;
      default: return <HeartPulse size={18} />;
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!participantName.trim()) {
      newErrors.participantName = 'Please enter an illustrative participant name.';
    }
    if (!consentGiven) {
      newErrors.consent = 'Voluntary consent confirmation is required before proceeding.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!notes.trim()) {
      setErrors({ notes: 'Please enter neutral check-in notes.' });
      return;
    }

    const currentTopic = screeningTopics.find(t => t.id === topicId);
    const generatedId = `SWS-DEMO-${Math.floor(106 + Math.random() * 890)}`;

    let dueDateStr = null;
    if (scheduleFollowUp && outcomeStatus !== 'Check-in complete') {
      const d = new Date();
      d.setDate(d.getDate() + Number(followUpDays));
      dueDateStr = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }

    const newRecord = {
      id: generatedId,
      participantName: participantName.trim(),
      ageRange,
      area,
      topicId,
      topicTitle: currentTopic ? currentTopic.title : 'General Wellness',
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: outcomeStatus,
      notes: notes.trim(),
      vitalContext: vitalContext.trim() || 'Neutral routine check-in recorded without acute distress.',
      followUpDue: dueDateStr,
      followUpReason: scheduleFollowUp ? followUpReason : null,
      referralGuidance: outcomeStatus === 'Referral guidance' ? `Advised consulting a certified medical officer at ${referralFacility}.` : null,
      isIllustrative: true
    };

    let newFollowUp = null;
    if (scheduleFollowUp && outcomeStatus !== 'Check-in complete') {
      newFollowUp = {
        id: `FLP-${Math.floor(206 + Math.random() * 790)}`,
        recordId: newRecord.id,
        participantName: newRecord.participantName,
        area: newRecord.area,
        topicTitle: newRecord.topicTitle,
        dueDate: dueDateStr,
        status: outcomeStatus === 'Referral guidance' ? 'referral_guidance' : 'upcoming',
        reason: followUpReason,
        isCompleted: false,
        hasReferral: outcomeStatus === 'Referral guidance',
        guidanceNote: outcomeStatus === 'Referral guidance' ? `Recommended follow-up visit with ${referralFacility}.` : 'Routine follow-up recheck.',
        isIllustrative: true
      };
    }

    onSubmitRecord(newRecord, newFollowUp);
    setSubmittedRecord(newRecord);
    setStep(3);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div className="glass-modal checkin-modal">
        {/* Modal Top Header */}
        <div className="modal-top">
          <div>
            <div className="modal-eyebrow">
              <Sparkles size={13} className="text-mint" />
              <span>Assisted Health Check-in</span>
            </div>
            <h2 id="modal-headline" className="modal-title">
              {step === 3 ? 'Check-in Recorded' : 'Community Health Check-in'}
            </h2>
            <p className="modal-subtext">
              Voluntary, non-diagnostic assisted check-in · Session demo state
            </p>
          </div>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close check-in dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Step Progress Pill */}
        {step < 3 && (
          <div className="step-bar" aria-label={`Step ${step} of 2`}>
            <div className={`step-dot-wrap ${step === 1 ? 'active' : 'completed'}`}>
              <span className="step-number">{step > 1 ? <CheckCircle2 size={13} /> : '1'}</span>
              <span className="step-text">Participant & Topic</span>
            </div>
            <div className="step-line" />
            <div className={`step-dot-wrap ${step === 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-text">Observations & Continuity</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="modal-scroll-area">
          {/* STEP 1: Participant & Topic */}
          {step === 1 && (
            <div className="step-content">
              {/* Illustrative Demo Notice */}
              <div className="glass-callout callout-info">
                <ShieldCheck size={16} className="callout-icon text-mint" />
                <p>
                  <strong>Illustrative Check-in:</strong> Enter fictional participant details for demonstration. 
                  All inputs remain exclusively in local frontend state and are never transmitted to an external server.
                </p>
              </div>

              <div className="form-layout">
                {/* Participant Name */}
                <div className="form-field full-width">
                  <label htmlFor="input-name" className="field-label">
                    Illustrative Participant Name <span className="req-star">*</span>
                  </label>
                  <div className="input-wrap">
                    <User size={15} className="input-icon" />
                    <input
                      id="input-name"
                      type="text"
                      className={`glass-input ${errors.participantName ? 'error-input' : ''}`}
                      placeholder="e.g., Elena Patel, David Kumar, Sara Thomas"
                      value={participantName}
                      onChange={(e) => {
                        setParticipantName(e.target.value);
                        if (errors.participantName) setErrors(prev => ({ ...prev, participantName: null }));
                      }}
                      autoFocus
                    />
                  </div>
                  {errors.participantName && (
                    <div className="field-error">
                      <AlertCircle size={13} /> {errors.participantName}
                    </div>
                  )}

                  {/* Sample Chips */}
                  <div className="sample-chips-row">
                    <span className="chips-label">Sample demo names:</span>
                    {['Meera Joshi', 'Arun Varma', 'Tara Sen', 'Rohan Gupta'].map(name => (
                      <button
                        key={name}
                        type="button"
                        className="sample-chip"
                        onClick={() => {
                          setParticipantName(name);
                          if (errors.participantName) setErrors(prev => ({ ...prev, participantName: null }));
                        }}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Age Range */}
                <div className="form-field">
                  <label htmlFor="select-age" className="field-label">
                    Age Range <span className="req-star">*</span>
                  </label>
                  <select
                    id="select-age"
                    className="glass-select"
                    value={ageRange}
                    onChange={(e) => setAgeRange(e.target.value)}
                  >
                    <option value="18–35">18–35 years (Young Adult)</option>
                    <option value="36–50">36–50 years (Adult)</option>
                    <option value="51–65">51–65 years (Middle Age)</option>
                    <option value="65+">65+ years (Elder)</option>
                  </select>
                </div>

                {/* Area / Cluster */}
                <div className="form-field">
                  <label htmlFor="select-area" className="field-label">
                    Community Area <span className="req-star">*</span>
                  </label>
                  <div className="input-wrap">
                    <MapPin size={15} className="input-icon" />
                    <select
                      id="select-area"
                      className="glass-select"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    >
                      {sampleAreas.map(a => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Screening Topics Selection */}
                <div className="form-field full-width">
                  <label className="field-label">
                    Select Screening Topic <span className="req-star">*</span>
                  </label>
                  <div className="topics-cards-grid" role="radiogroup" aria-label="Screening Topics">
                    {screeningTopics.map(topic => {
                      const isSelected = topicId === topic.id;
                      return (
                        <div
                          key={topic.id}
                          className={`topic-card-option ${isSelected ? 'selected' : ''}`}
                          onClick={() => handleTopicSelect(topic.id)}
                          role="radio"
                          aria-checked={isSelected}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                              e.preventDefault();
                              handleTopicSelect(topic.id);
                            }
                          }}
                        >
                          <div className="topic-card-top">
                            <span 
                              className="topic-card-icon"
                              style={{ backgroundColor: topic.badgeBg, color: topic.badgeColor }}
                            >
                              {getTopicIcon(topic.icon)}
                            </span>
                            <div className="selection-dot">
                              {isSelected && <div className="dot-inner" />}
                            </div>
                          </div>
                          <div className="topic-card-title">{topic.title}</div>
                          <p className="topic-card-desc">{topic.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Informed Voluntary Consent Checkbox */}
                <div className="form-field full-width consent-container">
                  <label className="consent-label">
                    <input
                      type="checkbox"
                      className="consent-checkbox"
                      checked={consentGiven}
                      onChange={(e) => {
                        setConsentGiven(e.target.checked);
                        if (errors.consent) setErrors(prev => ({ ...prev, consent: null }));
                      }}
                    />
                    <span className="consent-description">
                      <strong>Informed Voluntary Consent:</strong> I confirm that the purpose of this assisted check-in 
                      has been explained in clear, respectful everyday language. Voluntary verbal consent was provided, and the 
                      participant understands this is an illustrative non-diagnostic health check.
                    </span>
                  </label>
                  {errors.consent && (
                    <div className="field-error consent-error-pad">
                      <AlertCircle size={13} /> {errors.consent}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Neutral Check-in Observations */}
          {step === 2 && (
            <div className="step-content">
              {/* Non-Diagnostic Reminder */}
              <div className="glass-callout callout-warning">
                <Info size={16} className="callout-icon text-amber" />
                <p>
                  <strong>Non-Diagnostic Guideline:</strong> Record factual, neutral lifestyle observations only. 
                  Do not interpret measurements or provide clinical diagnoses. Encourage participants to connect with a 
                  qualified health professional for any clinical symptoms.
                </p>
              </div>

              {/* Selected Participant Summary Pill */}
              <div className="participant-badge-pill">
                <div className="badge-item">
                  <span className="badge-k">Participant:</span>
                  <span className="badge-v">{participantName}</span>
                </div>
                <div className="badge-item">
                  <span className="badge-k">Area:</span>
                  <span className="badge-v">{area}</span>
                </div>
                <div className="badge-item">
                  <span className="badge-k">Topic:</span>
                  <span className="badge-v text-mint">
                    {screeningTopics.find(t => t.id === topicId)?.title}
                  </span>
                </div>
              </div>

              <div className="form-layout">
                {/* Neutral Notes */}
                <div className="form-field full-width">
                  <label htmlFor="notes-textarea" className="field-label">
                    Neutral Check-in Notes <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="notes-textarea"
                    rows={3}
                    className={`glass-textarea ${errors.notes ? 'error-input' : ''}`}
                    placeholder="Describe neutral conversational observations (e.g., reported good daily stamina; discussed balanced meal options; scheduled recheck)."
                    value={notes}
                    onChange={(e) => {
                      setNotes(e.target.value);
                      if (errors.notes) setErrors(prev => ({ ...prev, notes: null }));
                    }}
                  />
                  {errors.notes && (
                    <div className="field-error">
                      <AlertCircle size={13} /> {errors.notes}
                    </div>
                  )}
                </div>

                {/* Vital Context */}
                <div className="form-field full-width">
                  <label htmlFor="vital-context-input" className="field-label">
                    Observation Context (Operational Notes)
                  </label>
                  <input
                    id="vital-context-input"
                    type="text"
                    className="glass-input"
                    placeholder="e.g., Seated arm cuff check; 5-minute quiet rest; normal resting pulse."
                    value={vitalContext}
                    onChange={(e) => setVitalContext(e.target.value)}
                  />
                  <span className="field-helper">Record neutral test conditions such as resting posture or hydration</span>
                </div>

                {/* Outcome Status */}
                <div className="form-field full-width">
                  <label className="field-label">
                    Check-in Outcome <span className="req-star">*</span>
                  </label>
                  <div className="outcome-options-grid">
                    <button
                      type="button"
                      className={`outcome-option-btn ${outcomeStatus === 'Check-in complete' ? 'active-complete' : ''}`}
                      onClick={() => {
                        setOutcomeStatus('Check-in complete');
                        setScheduleFollowUp(false);
                      }}
                    >
                      <CheckCircle2 size={16} />
                      <div className="outcome-btn-text">
                        <span className="outcome-title">Check-in Complete</span>
                        <span className="outcome-sub">Routine baseline observed</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className={`outcome-option-btn ${outcomeStatus === 'Follow-up suggested' ? 'active-followup' : ''}`}
                      onClick={() => {
                        setOutcomeStatus('Follow-up suggested');
                        setScheduleFollowUp(true);
                      }}
                    >
                      <Calendar size={16} />
                      <div className="outcome-btn-text">
                        <span className="outcome-title">Follow-up Suggested</span>
                        <span className="outcome-sub">Recheck in 1 to 4 weeks</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className={`outcome-option-btn ${outcomeStatus === 'Referral guidance' ? 'active-referral' : ''}`}
                      onClick={() => {
                        setOutcomeStatus('Referral guidance');
                        setScheduleFollowUp(true);
                        setFollowUpReason('Check in after consultation with local primary healthcare provider');
                      }}
                    >
                      <HeartPulse size={16} />
                      <div className="outcome-btn-text">
                        <span className="outcome-title">Referral Guidance</span>
                        <span className="outcome-sub">Advise visit to local clinic</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Follow-up Scheduler Box */}
                {scheduleFollowUp && (
                  <div className="followup-scheduling-card full-width">
                    <div className="scheduling-header">
                      <Clock size={16} className="text-mint" />
                      <span>Follow-up Continuity Preference</span>
                    </div>

                    <div className="form-layout">
                      <div className="form-field">
                        <label htmlFor="followup-timeline" className="field-label">Recheck Timeline</label>
                        <select
                          id="followup-timeline"
                          className="glass-select"
                          value={followUpDays}
                          onChange={(e) => setFollowUpDays(Number(e.target.value))}
                        >
                          <option value={7}>In 7 days (1 week)</option>
                          <option value={14}>In 14 days (2 weeks)</option>
                          <option value={21}>In 21 days (3 weeks)</option>
                          <option value={30}>In 30 days (1 month)</option>
                        </select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="followup-reason-input" className="field-label">Supportive Reason</label>
                        <input
                          id="followup-reason-input"
                          type="text"
                          className="glass-input"
                          value={followUpReason}
                          onChange={(e) => setFollowUpReason(e.target.value)}
                        />
                      </div>

                      {outcomeStatus === 'Referral guidance' && (
                        <div className="form-field full-width">
                          <label htmlFor="facility-input" className="field-label">
                            Recommended Community Healthcare Service
                          </label>
                          <input
                            id="facility-input"
                            type="text"
                            className="glass-input"
                            value={referralFacility}
                            onChange={(e) => setReferralFacility(e.target.value)}
                            placeholder="e.g., Local Primary Health Clinic"
                          />
                          <span className="field-helper">
                            Supportive guidance only. Remind the participant that no appointment was booked.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: Submission Success View */}
          {step === 3 && submittedRecord && (
            <div className="success-step-wrap">
              <div className="success-mark">
                <CheckCircle2 size={36} className="text-mint" />
              </div>

              <h3 className="success-heading">Check-in Successfully Saved</h3>
              <p className="success-paragraph">
                The illustrative record for <strong>{submittedRecord.participantName}</strong> has been 
                added to your local session state.
              </p>

              <div className="glass-summary-card">
                <div className="summary-row">
                  <span className="sum-label">Demo Record ID</span>
                  <span className="sum-val font-mono">{submittedRecord.id}</span>
                </div>
                <div className="summary-row">
                  <span className="sum-label">Participant</span>
                  <span className="sum-val">{submittedRecord.participantName} ({submittedRecord.area})</span>
                </div>
                <div className="summary-row">
                  <span className="sum-label">Screening Topic</span>
                  <span className="sum-val text-mint">{submittedRecord.topicTitle}</span>
                </div>
                <div className="summary-row">
                  <span className="sum-label">Status</span>
                  <span className="sum-val">{submittedRecord.status}</span>
                </div>
                {submittedRecord.followUpDue && (
                  <div className="summary-row">
                    <span className="sum-label">Follow-up Target</span>
                    <span className="sum-val text-amber">{submittedRecord.followUpDue} ({submittedRecord.followUpReason})</span>
                  </div>
                )}
                {submittedRecord.referralGuidance && (
                  <div className="summary-row referral-highlight">
                    <span className="sum-label">Guidance</span>
                    <span className="sum-val">{submittedRecord.referralGuidance}</span>
                  </div>
                )}
              </div>

              <div className="success-privacy-note">
                <ShieldCheck size={14} className="text-mint" />
                <span>Saved locally in memory. Zero data transmitted over the network.</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Controls Footer */}
        <div className="modal-bottom">
          {step === 1 && (
            <>
              <button type="button" className="btn-glass" onClick={onClose}>
                Cancel
              </button>
              <button type="button" className="btn-glass-primary" onClick={handleNext}>
                <span>Continue to Observations</span>
                <ChevronRight size={16} />
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <button type="button" className="btn-glass" onClick={() => setStep(1)}>
                <ChevronLeft size={16} />
                <span>Back</span>
              </button>
              <button type="button" className="btn-glass-primary" onClick={handleSubmit}>
                <CheckCircle2 size={16} />
                <span>Save Demo Record</span>
              </button>
            </>
          )}

          {step === 3 && (
            <div className="success-actions-row">
              <button
                type="button"
                className="btn-glass"
                onClick={() => {
                  setStep(1);
                  setParticipantName('');
                  setConsentGiven(false);
                }}
              >
                + New Check-in
              </button>
              <button
                type="button"
                className="btn-glass-primary"
                onClick={() => {
                  onClose();
                  if (onViewRecords) onViewRecords();
                }}
              >
                View in Screening Records
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
