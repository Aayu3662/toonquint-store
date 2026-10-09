import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { siteMeta } from '@/lib/site-meta';
import { generateBreadcrumbSchema } from '@/lib/schema-org';
import { Mail, MessageCircle, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Toonquint — Get in Touch</title>
        <meta
          name="description"
          content="Have a question about anime merchandise, product suggestions, or partnership inquiries? Contact the Toonquint team."
        />
        <link rel="canonical" href={`${siteMeta.url}/contact`} />
        <meta property="og:title" content="Contact Toonquint — Get in Touch" />
        <meta
          property="og:description"
          content="Have a question about anime merchandise, product suggestions, or partnership inquiries? Contact the Toonquint team."
        />
        <meta property="og:url" content={`${siteMeta.url}/contact`} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema(breadcrumbs))}
        </script>
      </Helmet>

      <main className="min-h-screen py-16 px-4" style={{ background: '#1A1040', color: '#FFFFFF' }}>
        <div className="container mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#C0B8E8]">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-[#FFE600] font-semibold" aria-current="page">Contact</li>
            </ol>
          </nav>

          <header className="mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#FFE600] text-[#FFE600]">
              We'd Love to Hear From You
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact Toonquint
            </h1>
            <p className="text-lg text-[#C0B8E8]">
              Have a product suggestion, spotted a broken merchant link, or want to say hi? Reach out using the form below.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#241552] p-6 rounded-2xl border-2 border-[#3D297A] text-center">
              <Mail className="mx-auto text-[#FFE600] mb-3" size={28} />
              <h3 className="font-bold text-white mb-1">Direct Inquiries</h3>
              <p className="text-xs text-[#C0B8E8]">contact@toonquint.store</p>
            </div>
            <div className="bg-[#241552] p-6 rounded-2xl border-2 border-[#3D297A] text-center">
              <MessageCircle className="mx-auto text-[#FFE600] mb-3" size={28} />
              <h3 className="font-bold text-white mb-1">Social Fandom</h3>
              <p className="text-xs text-[#C0B8E8]">@toonquint on Instagram & X</p>
            </div>
            <div className="bg-[#241552] p-6 rounded-2xl border-2 border-[#3D297A] text-center">
              <HelpCircle className="mx-auto text-[#FFE600] mb-3" size={28} />
              <h3 className="font-bold text-white mb-1">Order Queries</h3>
              <p className="text-xs text-[#C0B8E8]">Managed by Amazon/Flipkart merchants directly</p>
            </div>
          </div>

          <div className="bg-[#241552] p-8 rounded-2xl border-2 border-[#3D297A]">
            {submitted ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-[#FFE600] mb-2">Message Sent!</h3>
                <p className="text-[#C0B8E8]">Thank you for reaching out. We will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#1A1040] border border-[#4E398B] text-white focus:outline-none focus:border-[#FFE600]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#1A1040] border border-[#4E398B] text-white focus:outline-none focus:border-[#FFE600]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="What would you like to ask or suggest?"
                    className="w-full px-4 py-3 rounded-xl bg-[#1A1040] border border-[#4E398B] text-white focus:outline-none focus:border-[#FFE600]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full font-bold text-base transition-all hover:scale-105"
                  style={{ background: '#FFE600', color: '#1A1040' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
