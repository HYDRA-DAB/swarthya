import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Heart, 
  Apple, 
  ShieldCheck, 
  Smile, 
  Users, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import { healthArticles, libraryCategories } from '../data/mockData';

export default function LibraryPage({ onSelectArticle }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return healthArticles.filter(art => {
      const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
      const term = searchQuery.toLowerCase().trim();
      const matchesSearch = !term || (
        art.title.toLowerCase().includes(term) ||
        art.summary.toLowerCase().includes(term) ||
        art.category.toLowerCase().includes(term) ||
        art.keyPoints.some(k => k.toLowerCase().includes(term))
      );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Heart health habits': return <Heart size={18} className="text-blue" />;
      case 'Balanced meals and iron-rich foods': return <Apple size={18} className="text-lime" />;
      case 'Preventive check-ins': return <ShieldCheck size={18} className="text-mint" />;
      case 'Emotional well-being': return <Smile size={18} className="text-violet" />;
      default: return <Users size={18} className="text-amber" />;
    }
  };

  return (
    <div className="page-container page-library">
      {/* Page Header */}
      <header className="page-header">
        <div className="header-eyebrow">
          <span className="eyebrow-pill">
            <Sparkles size={12} className="text-mint" />
            Everyday Health Awareness
          </span>
        </div>
        <h1 className="page-main-title">Health Library</h1>
        <p className="page-lead">
          Culturally resonant, non-prescriptive reading guides designed to support informed lifestyle choices, 
          traditional nutrition, and daily vitality in rural households.
        </p>
      </header>

      {/* Safety Notice Strip */}
      <section className="library-safety-strip">
        <div className="glass-card library-notice-card">
          <Info size={18} className="text-mint flex-shrink-0" />
          <p>
            <strong>General Educational Content:</strong> These guides provide supportive health literacy only. 
            They do not constitute medical diagnoses, treatment plans, or drug dosage advice. Always speak with 
            a certified healthcare professional for individual medical evaluations.
          </p>
        </div>
      </section>

      {/* Controls Bar: Category Pills + Search */}
      <section className="library-controls-section">
        <div className="category-scroll-row" role="tablist" aria-label="Article Categories">
          {libraryCategories.map(cat => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`cat-glass-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="library-search-wrap">
          <Search size={15} className="search-icon-muted" />
          <input
            type="text"
            className="glass-input lib-search-input"
            placeholder="Search topics (e.g., salt, greens, sleep, fatigue)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search articles"
          />
          {searchQuery && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="articles-grid-section">
        {filteredArticles.length > 0 ? (
          <div className="articles-grid">
            {filteredArticles.map(article => (
              <article
                key={article.id}
                className="glass-card article-card"
                onClick={() => onSelectArticle(article)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectArticle(article);
                  }
                }}
              >
                <div className="article-card-header">
                  <div className="article-cat-wrap">
                    {getCategoryIcon(article.category)}
                    <span className="article-category-name">{article.category}</span>
                  </div>
                  <span className="article-read-time">{article.readTime}</span>
                </div>

                <h3 className="article-title">{article.title}</h3>
                <p className="article-summary">{article.summary}</p>

                <div className="article-footer">
                  <div className="takeaways-pill">
                    <CheckCircle2 size={13} className="text-mint" />
                    <span>{article.keyPoints.length} core takeaways</span>
                  </div>

                  <button
                    type="button"
                    className="read-guide-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectArticle(article);
                    }}
                  >
                    <span>Read Guide</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="glass-card empty-articles-card">
            <BookOpen size={32} className="empty-icon text-muted" />
            <h3 className="empty-title">No matching guides found</h3>
            <p className="empty-desc">Try clearing your search query or selecting a different category.</p>
            <button
              type="button"
              className="btn-glass"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Reset search & categories
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
