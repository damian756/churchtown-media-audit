'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, ChevronUp, BookOpen, MessageCircle } from 'lucide-react';
import { faqs, faqCategories, FAQ } from '@/lib/faqs';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  // Filter FAQs
  const filteredFAQs = useMemo(() => {
    let filtered = faqs;

    // Category filter
    if (activeCategory !== 'All Categories') {
      filtered = filtered.filter(faq => faq.category === activeCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.keywords.some(kw => kw.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, activeCategory]);

  // Toggle accordion
  const toggleFAQ = (id: string) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Group FAQs by category for display
  const groupedFAQs = useMemo(() => {
    const groups: Record<string, FAQ[]> = {};
    filteredFAQs.forEach(faq => {
      if (!groups[faq.category]) {
        groups[faq.category] = [];
      }
      groups[faq.category].push(faq);
    });
    return groups;
  }, [filteredFAQs]);

  return (
    <main className="min-h-screen bg-slate-950 pt-32 pb-20">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-slate-900 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
          <BookOpen className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">Knowledge Base</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Frequently Asked <span className="text-blue-400">Questions</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
          Get instant answers to {faqs.length} common questions about web design, SEO, Next.js, and growing your business in the North West.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input
            type="text"
            placeholder="Search 200+ questions... (e.g., 'Next.js cost', 'local SEO')"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-700 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors text-sm font-bold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Results Count */}
        {searchQuery && (
          <p className="text-sm text-slate-500 mt-4">
            Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''}
          </p>
        )}
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveCategory('All Categories')}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              activeCategory === 'All Categories'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-slate-900 text-slate-400 border border-slate-700 hover:border-blue-500'
            }`}
          >
            All Categories
          </button>
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-900 text-slate-400 border border-slate-700 hover:border-blue-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion by Category */}
      <section className="max-w-5xl mx-auto px-6">
        {Object.entries(groupedFAQs).map(([category, categoryFAQs]) => (
          <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <MessageCircle className="w-7 h-7 text-blue-400" />
              {category}
            </h2>
            
            <div className="space-y-4">
              {categoryFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-white pr-4">
                      {faq.question}
                    </h3>
                    {expandedIds.has(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-blue-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>
                  
                  {expandedIds.has(faq.id) && (
                    <div className="px-6 pb-6 pt-2 animate-in slide-in-from-top-2 duration-200">
                      <div 
                        className="text-slate-300 leading-relaxed prose prose-invert max-w-none prose-a:text-blue-400 prose-a:font-semibold hover:prose-a:text-blue-300 prose-strong:text-white"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredFAQs.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-16 h-16 text-slate-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
            <p className="text-slate-400 mb-6">Try different keywords or browse all categories</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All Categories');
              }}
              className="text-blue-400 font-bold hover:text-blue-300"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-slate-400 mb-8">
            We're here to help. Book a free consultation or get a comprehensive audit of your digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:-translate-y-1">
              Contact Us
            </Link>
            <Link href="/audit" className="inline-block px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border border-slate-700 hover:bg-slate-700 transition-all">
              Get Free Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
