import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { useState } from 'react';
import { ebooks, type Ebook } from '@/content/ebooks';
import { siteMeta } from '@/lib/site-meta';
import { generateBreadcrumbSchema } from '@/lib/schema-org';
import { BookOpen, CheckCircle, Download, FileText, Star, X } from 'lucide-react';

export default function EbooksPage() {
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Ebooks & Guides', url: '/ebooks' },
  ];

  const handleDownloadSample = (title: string) => {
    setDownloadSuccess(title);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <>
      <Helmet>
        <title>Anime Digital Ebooks & Collector Guides — Toonquint</title>
        <meta
          name="description"
          content="Download original anime ebooks by Toonquint — Figure Collector's Field Guide, Manga Character Archetypes Masterclass, and Anime Streetwear Styling."
        />
        <link rel="canonical" href={`${siteMeta.url}/ebooks`} />
        <meta property="og:title" content="Anime Digital Ebooks & Collector Guides — Toonquint" />
        <meta
          property="og:description"
          content="Download original anime ebooks by Toonquint — Figure Collector's Field Guide, Manga Character Archetypes Masterclass, and Anime Streetwear Styling."
        />
        <meta property="og:url" content={`${siteMeta.url}/ebooks`} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema(breadcrumbs))}
        </script>
      </Helmet>

      <main className="min-h-screen py-16 px-4" style={{ background: '#1A1040', color: '#FFFFFF' }}>
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#C0B8E8]">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-[#FFE600] font-semibold" aria-current="page">Ebooks & Guides</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-14 text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border-2 border-[#FFE600] text-[#FFE600]">
              Original Digital Publications
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Toonquint Ebook Library
            </h1>
            <p className="text-lg text-[#C0B8E8] leading-relaxed">
              In-depth collector manuals, character design studies, and fandom lifestyle handbooks crafted with genuine editorial insight. Instant PDF downloads with zero DRM lock-in.
            </p>
          </header>

          {downloadSuccess && (
            <div className="mb-8 p-4 rounded-2xl bg-emerald-950 border-2 border-emerald-500 text-emerald-200 text-center font-semibold text-sm animate-pulse">
              ✓ Free preview package for "{downloadSuccess}" has been prepared! Check your download tray.
            </div>
          )}

          {/* Ebooks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {ebooks.map((book) => (
              <article
                key={book.id}
                className="bg-[#241552] rounded-3xl border-4 border-[#3D297A] overflow-hidden flex flex-col justify-between hover:border-[#FFE600] transition-all duration-200 shadow-xl"
              >
                <div>
                  <div className="relative aspect-[3/4] overflow-hidden bg-black/30">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#FFE600] text-[#1A1040] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {book.badge}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#1A1040]/90 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20">
                      {book.pages} Pages • {book.format}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                        {book.title}
                      </h2>
                      <p className="text-xs text-[#FFE600] font-semibold">{book.subtitle}</p>
                    </div>

                    <p className="text-sm text-[#C0B8E8] leading-relaxed line-clamp-3">
                      {book.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#FFE600]">Key Highlights:</p>
                      <ul className="text-xs text-[#E2DCF8] space-y-1.5">
                        {book.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle size={14} className="text-[#FFE600] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-center justify-between py-2 border-t border-white/10">
                    <span className="text-xs text-[#C0B8E8]">Full Ebook Price:</span>
                    <span className="text-2xl font-bold text-[#FFE600]" style={{ fontFamily: 'var(--font-heading)' }}>
                      {book.price}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedEbook(book)}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold border-2 border-white/30 hover:border-white text-white flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <BookOpen size={14} /> Excerpt
                    </button>
                    <button
                      onClick={() => handleDownloadSample(book.title)}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-transform hover:scale-105"
                      style={{ background: '#FFE600', color: '#1A1040' }}
                    >
                      <Download size={14} /> Get Sample
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Reader Guarantee Banner */}
          <div className="bg-[#241552] p-8 md:p-10 rounded-3xl border-2 border-[#3D297A] text-center max-w-3xl mx-auto space-y-3">
            <h3 className="text-xl md:text-2xl font-bold text-white flex items-center justify-center gap-2">
              <Star className="text-[#FFE600]" size={22} fill="#FFE600" />
              100% Original Editorial Content
            </h3>
            <p className="text-sm text-[#C0B8E8] leading-relaxed">
              Every guide is drafted by the Toonquint editorial team. You receive clean, non-DRM PDF files designed with beautiful typography, high-resolution visual charts, and actionable collector strategies.
            </p>
          </div>
        </div>
      </main>

      {/* Excerpt Modal */}
      {selectedEbook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#241552] border-4 border-[#FFE600] rounded-3xl max-w-2xl w-full p-6 md:p-8 max-h-[85vh] overflow-y-auto relative text-white">
            <button
              onClick={() => setSelectedEbook(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FFE600] transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <span className="text-xs uppercase tracking-widest text-[#FFE600] font-bold">Sample Excerpt</span>
            <h2 className="text-2xl font-bold mb-2 mt-1" style={{ fontFamily: 'var(--font-heading)' }}>
              {selectedEbook.title}
            </h2>
            <p className="text-xs text-[#C0B8E8] mb-6">{selectedEbook.subtitle}</p>

            <div className="space-y-4 mb-6 text-sm text-[#E2DCF8] leading-relaxed bg-[#1A1040] p-6 rounded-2xl border border-white/10 font-serif">
              <p className="italic">"{selectedEbook.sampleExcerpt}"</p>
            </div>

            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFE600]">Table of Contents</h4>
              <ul className="text-xs space-y-1.5 text-[#C0B8E8]">
                {selectedEbook.chapters.map((ch, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FileText size={12} className="text-[#FFE600]" />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  handleDownloadSample(selectedEbook.title);
                  setSelectedEbook(null);
                }}
                className="w-full py-3 rounded-full font-bold text-sm text-[#1A1040] transition-all hover:scale-105"
                style={{ background: '#FFE600' }}
              >
                Download Free Preview Package
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
