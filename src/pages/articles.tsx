import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { useState } from 'react';
import { articles } from '@/content/articles';
import { siteMeta } from '@/lib/site-meta';
import { generateBreadcrumbSchema } from '@/lib/schema-org';
import { Swords, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Power Scaling & Narrative', 'Psychological & Tactical', 'Mentorship & Legacy'];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Character Studies & Articles', url: '/articles' },
  ];

  return (
    <>
      <Helmet>
        <title>Anime Character Studies & Comparative Articles — Toonquint</title>
        <meta
          name="description"
          content="In-depth, fair-use comparative analyses of iconic anime characters: Goku vs Saitama, Light vs Lelouch, Gojo vs Kakashi, and storytelling tropes."
        />
        <link rel="canonical" href={`${siteMeta.url}/articles`} />
        <meta property="og:title" content="Anime Character Studies & Comparative Articles — Toonquint" />
        <meta
          property="og:description"
          content="In-depth, fair-use comparative analyses of iconic anime characters: Goku vs Saitama, Light vs Lelouch, Gojo vs Kakashi."
        />
        <meta property="og:url" content={`${siteMeta.url}/articles`} />
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
              <li className="text-[#FFE600] font-semibold" aria-current="page">Articles & Character Studies</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12 text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border-2 border-[#FFE600] text-[#FFE600]">
              Original Editorial Critiques
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Anime Character Face-Offs
            </h1>
            <p className="text-lg text-[#C0B8E8] leading-relaxed">
              Thoughtful, analytical comparisons of iconic anime characters, narrative tropes, power mechanics, and philosophical dilemmas. 100% original commentary published under Fair Use principles.
            </p>
          </header>

          {/* Legal Fair Use Badge */}
          <div className="mb-10 p-4 rounded-2xl bg-[#241552] border border-[#FFE600]/30 max-w-3xl mx-auto text-xs text-[#C0B8E8] flex items-center gap-3">
            <ShieldCheck size={20} className="text-[#FFE600] shrink-0" />
            <span>
              <strong>Fair Use & Copyright Notice:</strong> All character names and franchises referenced are the intellectual property of their respective creators and studios. These articles provide transformative literary, psychological, and narrative commentary.
            </span>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-5 py-2 rounded-full text-xs font-bold transition-all"
                style={{
                  background: selectedCategory === cat ? '#FFE600' : '#241552',
                  color: selectedCategory === cat ? '#1A1040' : '#C0B8E8',
                  border: '2px solid',
                  borderColor: selectedCategory === cat ? '#FFE600' : '#3D297A',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-[#241552] rounded-3xl border-4 border-[#3D297A] overflow-hidden flex flex-col justify-between hover:border-[#FFE600] transition-all duration-200 shadow-xl"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#1A1040]/90 backdrop-blur-md text-[#FFE600] text-xs font-bold px-3 py-1 rounded-full border border-[#FFE600]/40">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs text-[#A89FD6]">
                      <Clock size={13} />
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.publishDate}</span>
                    </div>

                    <h2 className="text-xl font-bold text-white hover:text-[#FFE600] transition-colors leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                      <Link to={`/articles/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-xs text-[#FFE600] font-semibold">{article.subtitle}</p>

                    <p className="text-sm text-[#C0B8E8] line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Quick Matchup Card */}
                    <div className="bg-[#1A1040] p-3.5 rounded-xl border border-white/10 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between text-white font-semibold">
                        <span>{article.char1.name}</span>
                        <Swords size={14} className="text-[#FF3D57]" />
                        <span>{article.char2.name}</span>
                      </div>
                      <p className="text-[11px] text-[#A89FD6] italic text-center">
                        {article.char1.archetype} vs {article.char2.archetype}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/articles/${article.slug}`}
                    className="w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all hover:scale-105"
                    style={{ background: '#FFE600', color: '#1A1040' }}
                  >
                    Read Comparative Study <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
