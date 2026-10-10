import { Helmet } from '@dr.pogodin/react-helmet';
import { Link, useParams, Navigate } from 'react-router';
import { articles } from '@/content/articles';
import { siteMeta } from '@/lib/site-meta';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema-org';
import { Clock, Swords, ShieldAlert, ArrowLeft, CheckCircle2, ShoppingBag } from 'lucide-react';
import AdSenseUnit from '@/components/AdSenseUnit';

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const pageUrl = `${siteMeta.url}/articles/${article.slug}`;
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Articles', url: '/articles' },
    { name: article.title, url: `/articles/${article.slug}` },
  ];

  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.metaDescription,
    url: pageUrl,
    datePublished: article.publishDate,
    dateModified: '2026-10-09',
    image: article.image
  });

  return (
    <>
      <Helmet>
        <title>{article.title} — Toonquint Character Studies</title>
        <meta name="description" content={article.metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={`${article.title} — Toonquint`} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${siteMeta.url}${article.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.metaDescription} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema(breadcrumbs))}
        </script>
      </Helmet>

      <main className="min-h-screen py-16 px-4" style={{ background: '#1A1040', color: '#FFFFFF' }}>
        <article className="container mx-auto max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#C0B8E8]">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link to="/articles" className="hover:text-white transition-colors">Articles</Link>
              </li>
              <li>/</li>
              <li className="text-[#FFE600] font-semibold truncate max-w-xs" aria-current="page">{article.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-[#241552] text-[#FFE600] text-xs font-bold px-3 py-1 rounded-full border border-[#FFE600]/40 uppercase tracking-wider">
                {article.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#A89FD6]">
                <Clock size={13} />
                <span>{article.readTime}</span>
                <span>•</span>
                <span>{article.publishDate}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              {article.title}
            </h1>

            <p className="text-lg text-[#FFE600] font-medium leading-relaxed">
              {article.subtitle}
            </p>

            <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-[#3D297A] my-6">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          {/* Character Profile Matchup Card */}
          <section className="bg-[#241552] rounded-3xl p-6 md:p-8 border-4 border-[#3D297A] mb-12 space-y-6">
            <h2 className="text-xl font-bold text-center text-[#FFE600] flex items-center justify-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
              <Swords size={20} className="text-[#FF3D57]" /> Head-to-Head Profile Breakdown
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1A1040] p-5 rounded-2xl border border-white/10 space-y-3">
                <span className="text-xs font-bold text-[#FF3D57] uppercase tracking-wider">Fighter 1</span>
                <h3 className="text-xl font-bold text-white">{article.char1.name}</h3>
                <p className="text-xs text-[#C0B8E8]">{article.char1.series}</p>
                <div className="space-y-1.5 text-xs text-[#E2DCF8]">
                  <p><strong>Archetype:</strong> {article.char1.archetype}</p>
                  <p><strong>Combat Style:</strong> {article.char1.signatureStyle}</p>
                  <p><strong>Core Ethos:</strong> {article.char1.primaryPhilosophy}</p>
                </div>
              </div>

              <div className="bg-[#1A1040] p-5 rounded-2xl border border-white/10 space-y-3">
                <span className="text-xs font-bold text-[#FFE600] uppercase tracking-wider">Fighter 2</span>
                <h3 className="text-xl font-bold text-white">{article.char2.name}</h3>
                <p className="text-xs text-[#C0B8E8]">{article.char2.series}</p>
                <div className="space-y-1.5 text-xs text-[#E2DCF8]">
                  <p><strong>Archetype:</strong> {article.char2.archetype}</p>
                  <p><strong>Combat Style:</strong> {article.char2.signatureStyle}</p>
                  <p><strong>Core Ethos:</strong> {article.char2.primaryPhilosophy}</p>
                </div>
              </div>
            </div>

            {/* Metrics Matrix Table */}
            <div className="overflow-x-auto pt-4">
              <table className="w-full text-left text-xs md:text-sm text-[#E2DCF8]">
                <thead className="border-b border-white/20 text-[#FFE600] uppercase font-bold text-xs">
                  <tr>
                    <th className="py-2.5 px-3">Comparison Metric</th>
                    <th className="py-2.5 px-3">{article.char1.name}</th>
                    <th className="py-2.5 px-3">{article.char2.name}</th>
                    <th className="py-2.5 px-3">Narrative Synthesis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {article.metrics.map((m, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 font-bold text-white whitespace-nowrap">{m.category}</td>
                      <td className="py-3 px-3 text-[#FF3D57] font-semibold">{m.char1Score}</td>
                      <td className="py-3 px-3 text-[#FFE600] font-semibold">{m.char2Score}</td>
                      <td className="py-3 px-3 text-[#C0B8E8] text-xs leading-relaxed">{m.analysis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Ad Placement 1: Mid-article Ad */}
          <AdSenseUnit className="my-10" />

          {/* Article Main Text Content */}
          <div className="space-y-10 text-[#E2DCF8] text-base md:text-lg leading-relaxed font-sans mb-12">
            {article.sections.map((sec, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                  {sec.heading}
                </h2>
                {sec.content.map((para, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Ad Placement 2: Pre-verdict Ad */}
          <AdSenseUnit className="my-10" />

          {/* Verdict Box */}
          <section className="bg-gradient-to-r from-[#2D1F6E] to-[#432A99] p-8 rounded-3xl border-4 border-[#FFE600] space-y-3 mb-12 shadow-2xl">
            <span className="text-xs uppercase tracking-widest text-[#FFE600] font-bold">The Editorial Verdict</span>
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              Final Analytical Assessment
            </h3>
            <p className="text-base text-[#E2DCF8] leading-relaxed">
              {article.verdict}
            </p>
          </section>

          {/* Legal Fair Use & Trademark Disclaimer Box */}
          <section className="bg-[#241552] p-6 rounded-2xl border border-white/10 text-xs text-[#9B8FC2] leading-relaxed mb-12 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold">
              <ShieldAlert size={16} className="text-[#FFE600]" />
              <span>Trademark & Fair Use Compliance Notice</span>
            </div>
            <p>
              {article.disclaimer}
            </p>
          </section>

          {/* Navigation & Shop CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-sm text-[#C0B8E8] hover:text-white transition-colors"
            >
              <ArrowLeft size={16} /> Back to All Articles
            </Link>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-[#1A1040] transition-transform hover:scale-105"
              style={{ background: '#FFE600' }}
            >
              <ShoppingBag size={16} /> Explore Anime Merch Collection
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
