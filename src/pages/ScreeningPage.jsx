import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Search, 
  PlusCircle, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  ChevronRight, 
  HeartPulse, 
  Activity, 
  Apple, 
  Droplets, 
  Smile, 
  Info 
} from 'lucide-react';
import { screeningTopics } from '../data/mockData';

export default function ScreeningPage({ 
  records, 
  onOpenCheckIn, 
  onSelectRecord 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [topicFilter, setTopicFilter] = useState('ALL');

  // Filter session records
  const filteredRecords = useMemo(() => {
    return records.filter(rec => {
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch = !term || (
        rec.participantName.toLowerCase().includes(term) ||
        rec.id.toLowerCase().includes(term) ||
        rec.area.toLowerCase().includes(term) ||
        rec.topicTitle.toLowerCase().includes(term) ||
        (rec.notes && rec.notes.toLowerCase().includes(term))
      );

      const matchesStatus = statusFilter === 'ALL' || rec.status === statusFilter;
      const matchesTopic = topicFilter === 'ALL' || rec.topicId === topicFilter;

      return matchesSearch && matchesStatus && matchesTopic;
    });
  }, [records, searchTerm, statusFilter, topicFilter]);

  const getTopicIcon = (topicId) => {
    switch (topicId) {
      case 'blood-pressure': return <Activity size={15} />;
      case 'nutrition-awareness': return <Apple size={15} />;
      case 'blood-sugar': return <Droplets size={15} />;
      case 'emotional-wellbeing': return <Smile size={15} />;
      default: return <HeartPulse size={15} />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Check-in complete':
        return (
          <span className="record-badge badge-complete">
            <CheckCircle2 size={12} />
            <span>Complete</span>
          </span>
        );
      case 'Follow-up suggested':
        return (
          <span className="record-badge badge-followup">
            <Clock size={12} />
            <span>Follow-up</span>
          </span>
        );
      case 'Referral guidance':
        return (
          <span className="record-badge badge-referral">
            <AlertTriangle size={12} />
            <span>Referral</span>
          </span>
        );
      default:
        return <span className="record-badge">{status}</span>;
    }
  };

  return (
    <div className="page-container page-screening">
      {/* Page Header */}
      <header className="page-header">
        <div className="header-eyebrow">
          <span className="eyebrow-pill">
            <Sparkles size={12} className="text-mint" />
            Field Screening Workflow
          </span>
        </div>
        <h1 className="page-main-title">Community Screening Journey</h1>
        <p className="page-lead">
          A voluntary, non-diagnostic check-in process designed to bring gentle preventive health observations 
          directly into rural village settings.
        </p>

        <div className="screening-hero-cta">
          <button
            type="button"
            className="btn-glass-primary btn-large"
            onClick={onOpenCheckIn}
          >
            <PlusCircle size={18} />
            <span>Start a community check-in</span>
          </button>
          <span className="screening-cta-note">
            Voluntary participation · Zero server transmission · Non-diagnostic
          </span>
        </div>
      </header>

      {/* Topics Overview Cards */}
      <section className="screening-topics-overview">
        <div className="section-header-compact">
          <h2 className="section-subheading">Core Screening Touchpoints</h2>
          <p className="section-subtext">Five key areas where routine check-ins support long-term rural vitality.</p>
        </div>

        <div className="topics-cards-row">
          {screeningTopics.map(topic => (
            <div key={topic.id} className="glass-card topic-overview-card">
              <div 
                className="topic-overview-icon"
                style={{ backgroundColor: topic.badgeBg, color: topic.badgeColor }}
              >
                {getTopicIcon(topic.id)}
              </div>
              <h3 className="topic-overview-title">{topic.title}</h3>
              <p className="topic-overview-desc">{topic.description}</p>
              <div className="topic-overview-meta">
                <span>Recheck cycle: ~{topic.defaultFollowupDays} days</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Illustrative Records Section */}
      <section className="screening-records-section">
        <div className="section-header-row">
          <div>
            <h2 className="section-subheading">Illustrative Session Records</h2>
            <p className="section-subtext">
              Fictional demonstration check-in slips stored in current browser state. Click any record to review 
              its complete observation slip or simulate printing.
            </p>
          </div>

          <button
            type="button"
            className="btn-glass"
            onClick={onOpenCheckIn}
          >
            <PlusCircle size={15} />
            <span>+ Add Check-in</span>
          </button>
        </div>

        {/* Filters and Search Bar */}
        <div className="glass-card records-controls-bar">
          <div className="search-bar-wrap">
            <Search size={16} className="search-icon-muted" />
            <input
              type="text"
              className="glass-input search-input"
              placeholder="Search by participant name, area, or ID (e.g., SWS-DEMO-101)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search check-in records"
            />
            {searchTerm && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <div className="filters-dropdowns-row">
            <div className="select-wrap">
              <span className="select-lbl">Status:</span>
              <select
                className="glass-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                aria-label="Filter by status"
              >
                <option value="ALL">All Statuses ({records.length})</option>
                <option value="Check-in complete">Complete</option>
                <option value="Follow-up suggested">Follow-up suggested</option>
                <option value="Referral guidance">Referral guidance</option>
              </select>
            </div>

            <div className="select-wrap">
              <span className="select-lbl">Topic:</span>
              <select
                className="glass-select"
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
                aria-label="Filter by topic"
              >
                <option value="ALL">All Topics</option>
                {screeningTopics.map(t => (
                  <option key={t.id} value={t.id}>{t.title}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="records-meta-count">
          <span>Showing <strong>{filteredRecords.length}</strong> of {records.length} illustrative records</span>
          {(searchTerm || statusFilter !== 'ALL' || topicFilter !== 'ALL') && (
            <button
              type="button"
              className="reset-filters-btn"
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('ALL');
                setTopicFilter('ALL');
              }}
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Records Grid */}
        {filteredRecords.length > 0 ? (
          <div className="records-cards-grid">
            {filteredRecords.map(record => (
              <div
                key={record.id}
                className="glass-card record-item-card"
                onClick={() => onSelectRecord(record)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectRecord(record);
                  }
                }}
              >
                <div className="record-card-top-row">
                  <span className="record-id-tag font-mono">{record.id}</span>
                  {getStatusBadge(record.status)}
                </div>

                <div className="record-card-body">
                  <h3 className="record-participant-name">{record.participantName}</h3>
                  <div className="record-card-meta">
                    <span className="meta-area">
                      <MapPin size={12} /> {record.area}
                    </span>
                    <span className="meta-dot">·</span>
                    <span className="meta-age">Age {record.ageRange}</span>
                  </div>

                  <div className="record-card-topic">
                    <span className="topic-chip-tag">
                      {record.topicTitle}
                    </span>
                  </div>

                  <p className="record-card-notes">
                    {record.notes}
                  </p>
                </div>

                <div className="record-card-footer">
                  <div className="record-date">
                    <Calendar size={12} />
                    <span>{record.date}</span>
                  </div>

                  <button
                    type="button"
                    className="view-slip-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectRecord(record);
                    }}
                  >
                    <span>View Slip</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card empty-records-card">
            <Search size={32} className="empty-icon text-muted" />
            <h3 className="empty-title">No matching illustrative records</h3>
            <p className="empty-desc">Try clearing your search terms or resetting filters.</p>
            <button
              type="button"
              className="btn-glass"
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('ALL');
                setTopicFilter('ALL');
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Safety Notice Card */}
      <section className="screening-safety-note">
        <div className="glass-card safety-callout-card">
          <Info size={20} className="text-mint flex-shrink-0" />
          <div>
            <h4 className="safety-title">Safe Community Screening Principles</h4>
            <p className="safety-text">
              All community check-ins conducted under the Swasthya model are strictly non-diagnostic. 
              Measurements are never presented as clinical interpretations, nor are medical diagnoses or drug dosages 
              provided. When observations fall outside routine baselines, participants are warmly guided to consult 
              a certified physician at their local primary healthcare clinic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
