import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function ArticleDetailModal({ article, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && article) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="article-detail-title">
      <div className="glass-modal article-reader-modal">
        {/* Modal Top */}
        <div className="modal-top">
          <div>
            <div className="modal-eyebrow">
              <Sparkles size={13} className="text-mint" />
              <span>{article.category} · {article.readTime}</span>
            </div>
            <h2 id="article-detail-title" className="modal-title">
              {article.title}
            </h2>
          </div>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close article reader"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-scroll-area">
          <p className="article-lead-text">{article.summary}</p>

          {/* Core Takeaways */}
          <div className="reader-section">
            <h3 className="reader-section-title">
              <CheckCircle2 size={18} className="text-mint" />
              <span>Key Practical Habits</span>
            </h3>
            <ul className="reader-takeaways-list">
              {article.keyPoints.map((point, idx) => (
                <li key={idx} className="takeaway-card">
                  <span className="takeaway-number">{idx + 1}</span>
                  <span className="takeaway-copy">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Myths vs Facts */}
          {article.mythsVsFacts && article.mythsVsFacts.length > 0 && (
            <div className="reader-section">
              <h3 className="reader-section-title">
                <ShieldCheck size={18} className="text-amber" />
                <span>Common Myths vs. Ground Facts</span>
              </h3>
              <div className="myths-container">
                {article.mythsVsFacts.map((item, idx) => (
                  <div key={idx} className="myth-fact-card">
                    <div className="myth-line">
                      <span className="tag-myth">MYTH</span>
                      <span className="text-myth">"{item.myth}"</span>
                    </div>
                    <div className="fact-line">
                      <span className="tag-fact">FACT</span>
                      <span className="text-fact">{item.fact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Healthcare consultation advice */}
          {article.consultationAdvice && (
            <div className="reader-advice-box">
              <div className="advice-header">
                <Heart size={16} className="text-mint" />
                <strong>When to Speak with a Qualified Healthcare Professional</strong>
              </div>
              <p className="advice-text">{article.consultationAdvice}</p>
            </div>
          )}
        </div>

        {/* Modal Bottom */}
        <div className="modal-bottom">
          <button type="button" className="btn-glass-primary" onClick={onClose}>
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
