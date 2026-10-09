# AI Search & SEO Discoverability Implementation Brief

## Instructions for the coding agent

### Project context

-   Website: an existing anime and merchandise affiliate store.
-   Framework: Next.js.
-   Domain registrar: GoDaddy.
-   Hosting may be Vercel, Cloudflare, or another provider; inspect the
    repository and deployment configuration before changing anything.
-   Primary objective: make the site eligible to be discovered, crawled,
    indexed, understood, and cited by traditional search engines and
    AI-powered search/answer tools.
-   This is an implementation brief, not a promise of rankings. No
    technical setup can guarantee inclusion in ChatGPT, Google, Bing,
    Perplexity, Gemini, Claude, or any other product.

## 1. Operating rules --- read before changing code

1.  **Inspect first.** Identify the Next.js version, App Router vs Pages
    Router, rendering approach, existing SEO metadata, routes, product
    data source, robots rules, sitemap, structured data, hosting
    configuration, and existing analytics.
2.  **Preserve the current stack.** Do not migrate hosting, change
    DNS/nameservers, replace the database, or introduce a new service
    unless explicitly required. The domain can remain registered at
    GoDaddy regardless of hosting.
3.  **Use the real canonical domain.** Find it in existing
    environment/configuration. If uncertain, use a clearly named
    environment variable such as `NEXT_PUBLIC_SITE_URL` and document the
    required value. Do not leave placeholder domains in production.
4.  **Do not invent facts.** Never fabricate product specifications,
    licensing/authenticity claims, prices, stock, shipping, return
    policies, ratings, reviews, availability, or editorial experience.
    Pull details from verified data and omit unavailable values.
5.  **Do not keyword-stuff or generate doorway pages.** Each indexable
    page must provide distinct, useful information. Avoid mass-producing
    thin pages for every keyword.
6.  **Do not promise placement.** The goal is technical eligibility and
    quality improvements, not guaranteed inclusion or rankings.
7.  **Keep affiliate disclosures visible.** Clearly disclose affiliate
    relationships near relevant recommendations and on an appropriate
    disclosure page. Use `rel="sponsored"` for paid/affiliate outbound
    links; add `nofollow` too if appropriate for the site's policy.
8.  **Protect secrets and user data.** Do not expose API keys, private
    environment variables, customer data, or internal admin routes in
    metadata, logs, or public pages.
9.  **Make changes maintainable.** Prefer native Next.js conventions,
    reusable components, typed data, tests, and clear documentation.
10. **Report blockers honestly.** If a change requires a dashboard
    action (DNS, CDN firewall, Search Console, Bing Webmaster Tools,
    analytics consent, etc.), provide exact steps; do not claim to have
    completed it.

## 2. Crawler access and robots policy

### 2.1 Create or audit `robots.txt`

Use the correct convention for the repository: - App Router:
`app/robots.ts` or `app/robots.txt` - Pages Router/static setup:
`public/robots.txt`

Ensure the file is publicly accessible at
`https://<canonical-domain>/robots.txt`, returns HTTP 200, and has valid
syntax. Avoid conflicting rules and accidental blocking of
product/category/content pages, CSS, or JavaScript needed for rendering.

At minimum, evaluate whether to allow these **search/discovery
crawlers**: - OpenAI: `OAI-SearchBot` --- used for discovering pages for
ChatGPT search. - Google: `Googlebot`. - Microsoft/Bing: `Bingbot`. -
Perplexity: `PerplexityBot`. - Anthropic/Claude: verify the currently
documented crawler names and purposes before adding rules. - Other
AI/search providers only after verifying their official crawler
documentation.

Illustrative starting point (adapt to existing policy; do not blindly
overwrite it):

``` txt
User-agent: OAI-SearchBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://YOUR_CANONICAL_DOMAIN/sitemap.xml
```

Important: - This is only an example. Preserve any intentional disallow
rules for private/admin/internal paths and ensure the sitemap uses the
actual domain. - Check official documentation for each crawler name and
its current purpose before configuring it. - Search crawling,
user-triggered page fetching, and model-training crawlers are different
purposes. Do **not** automatically allow every training crawler just to
appear in search. - In particular, distinguish OpenAI's `OAI-SearchBot`
(search discovery) from `GPTBot` (potential model-training use) and
`ChatGPT-User` (user-triggered fetches). Make training-crawler decisions
separately and document them. - `robots.txt` is a crawl preference, not
access control. Protect private content with
authentication/authorization. - Allowing a crawler in robots.txt does
not override a CDN, WAF, bot-protection, rate-limit, or hosting rule
that blocks it. - Do not serve different content to crawlers than to
users in an attempt to manipulate rankings.

### 2.2 Check server/CDN access

Inspect hosting, middleware, firewall, WAF, and bot protection: -
Confirm legitimate search crawlers can request public pages and
assets. - Avoid blanket challenges or blocks that prevent crawlers from
accessing content. - Do not disable security protections globally. Add
narrowly scoped rules only if verified crawler access is blocked. -
Check logs or provider tools if available. Do not infer crawler access
merely from robots.txt.

## 3. Sitemap and indexability

Implement or fix an XML sitemap at `/sitemap.xml`: - Include canonical,
public, indexable URLs only. - Include useful product,
category/collection, editorial guide, and core informational pages. -
Exclude admin, account, cart, checkout, search-result/filter
combinations with little unique value, internal APIs, drafts, duplicate
URLs, redirecting URLs, and `noindex` pages. - Use absolute URLs on the
canonical domain. - Use valid `lastModified` values only when content
was actually updated; do not change every timestamp on every build. -
Include only URLs that return successful responses and have
self-consistent canonical tags. - For a large catalogue, split the
sitemap if needed and use a sitemap index. - Make sure robots.txt
references the correct sitemap URL.

Next.js App Router example to adapt to the project's actual data model:

``` ts
// app/sitemap.ts
import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!siteUrl) throw new Error('NEXT_PUBLIC_SITE_URL must be configured')

  // Replace these examples with real, public records from the existing data source.
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/affiliate-disclosure',
    '/anime-merchandise',
    '/guides',
  ]

  const products = await getPublicProducts() // Implement using the existing data layer.
  const categories = await getPublicCategories() // Implement using the existing data layer.

  return [
    ...staticRoutes.map((path) => ({
      url: new URL(path, siteUrl).toString(),
    })),
    ...categories.map((category) => ({
      url: new URL(`/category/${category.slug}`, siteUrl).toString(),
      lastModified: category.updatedAt ?? undefined,
    })),
    ...products.map((product) => ({
      url: new URL(`/product/${product.slug}`, siteUrl).toString(),
      lastModified: product.updatedAt ?? undefined,
    })),
  ]
}
```

This is a pattern, not drop-in code: replace `getPublicProducts`,
`getPublicCategories`, field names, and routes with actual project
implementations. Do not make the build fail if the project has no such
data functions; adapt the code correctly.

### 3.1 Canonicals and URL hygiene

-   Give every indexable page one absolute canonical URL.
-   Normalize trailing slashes consistently.
-   Redirect obsolete URLs with permanent redirects when appropriate.
-   Avoid duplicate content caused by query parameters, sorting,
    filters, tracking parameters, case variants, or multiple route
    patterns.
-   Ensure internal links point directly to canonical URLs rather than
    redirect chains.
-   Use meaningful, stable slugs.
-   Avoid accidentally setting `noindex`, `nofollow`, or restrictive
    robots metadata globally.
-   Keep staging/preview deployments out of search results; production
    should use the canonical domain.

## 4. Page metadata and social previews

Implement metadata using the existing Next.js router conventions: -
Unique, descriptive `<title>` per page. - Useful meta description that
accurately summarizes the page. - Correct canonical URL. - Appropriate
robots metadata for indexable vs non-indexable pages. - Open Graph
title, description, URL, site name, and representative image. - Social
card metadata where supported. - A valid favicon and site identity. -
Product/category-specific metadata generated from real content, not
duplicated defaults.

Use Next.js Metadata API for App Router where possible (`metadata` or
`generateMetadata`). For Pages Router, use the existing supported
metadata approach.

Guidelines: - Titles should clearly identify the product/category/topic
and store when useful. - Descriptions should be readable and specific,
not keyword lists. - Do not put unsupported claims such as "official,"
"authentic," "cheapest," or "best" in metadata. - Do not repeat the same
title and description across every product. - Do not put private
internal search queries, customer data, or internal identifiers in
metadata.

## 5. Make important content available in crawlable HTML

Inspect how the site renders: - Product names, descriptions, category
names, prices when available, availability when verified, and primary
links should be present in the rendered page HTML or be reliably
rendered by the supported rendering approach. - Do not require a user
interaction, login, or client-only action to reveal the only copy of
important content. - Use server rendering or static generation where
appropriate for the existing architecture; do not rewrite the
application unnecessarily. - Ensure pages remain useful if third-party
scripts or nonessential JavaScript fail. - Use semantic HTML: one clear
main heading, logical heading hierarchy, descriptive link text,
accessible navigation, and useful alt text. - Avoid hiding SEO text
off-screen, using invisible keyword blocks, or serving crawler-only
text. - Provide pagination or crawlable links for important catalogue
sections; do not rely solely on infinite scrolling. - Ensure
product/category pages link to related categories, guides, and relevant
products naturally.

## 6. Structured data (Schema.org / JSON-LD)

Add valid JSON-LD only where it accurately represents visible page
content. Prefer Schema.org types such as: - `Organization` or
`OnlineStore` for the store, as appropriate. - `WebSite` for the website
identity. - `BreadcrumbList` for visible breadcrumbs. - `Product` for
genuine product detail pages. - `ItemList` where appropriate for visible
collection/list pages. - `Article` or `BlogPosting` for original guides
and articles. - `Person` only when a real, appropriate author profile
exists.

For product structured data: - Use actual product name, image,
description, SKU/GTIN/brand only when known, and offers only when
accurate. - An affiliate store is not necessarily the seller of the
item. Do not falsely claim that the site sells, stocks, ships, or
fulfills products. Represent offers and seller information only when the
data and markup genuinely support it. - Prices and currency must be
current and match the visible page. Include availability only when
verified. - Do not fabricate reviews, aggregate ratings, author
credentials, awards, or endorsements. - Follow Google's current
structured-data policies and Schema.org definitions. - Structured data
can help machines interpret pages but does not guarantee rich results or
AI citations.

Implementation requirements: - Create reusable, typed JSON-LD
helpers/components. - Safely serialize JSON-LD to prevent script
injection; do not interpolate untrusted strings unsafely. - Avoid
duplicate conflicting structured-data blocks. - Validate representative
pages with Schema.org Validator and Google's Rich Results Test where
relevant. - Do not add every schema type to every page; match the schema
to the content.

## 7. Content strategy for an anime merchandise affiliate store

Prioritize helpful, original pages that answer actual customer
questions. Build only pages that can be supported by reliable
information and provide a distinct benefit.

Potential content: - Anime gift guides by budget, recipient, franchise,
and occasion. - Comparisons of figure types, materials, sizes, and
display requirements. - Guides to choosing anime clothing, sizing, print
methods, and fabric. - Collectibles buying guides: figure scales, model
kits, plushies, posters, and care. - Product comparisons with clear
selection criteria and pros/cons. - Franchise or character collections
with useful context and carefully selected items. - Explanations of
licensed vs unlicensed merchandise and how buyers can verify seller
claims. - Shipping, returns, delivery estimates, and international
ordering guidance only where verified for the actual merchant. -
Original FAQs based on real customer questions.

Content standards: - Add original editorial value: selection
methodology, relevant distinctions, trade-offs, practical advice, and
clear explanations of who a product suits. - State how products were
selected when that claim is true. - Identify limitations and
uncertainty. - Cite primary or reputable sources for factual claims when
appropriate. - Keep pages updated when underlying product data
changes. - Clearly separate factual product details from editorial
opinion. - Avoid copying supplier descriptions verbatim across many
pages. - Avoid fabricated hands-on testing or personal experience. - Do
not publish thin pages that differ only by a character name, franchise
keyword, or budget amount. - Do not create fake author biographies or
credentials.

## 8. Affiliate link and trust requirements

-   Place a clear affiliate disclosure near affiliate recommendations
    and maintain a dedicated disclosure page.
-   Use descriptive outbound link text and label links so users
    understand they leave the site.
-   Use `rel="sponsored"` on paid/affiliate links; optionally combine
    with `nofollow` where appropriate.
-   Do not cloak destinations in a misleading way. If redirects are used
    for tracking, keep them transparent, functional, and compliant with
    affiliate-network terms.
-   Do not misrepresent the store as the manufacturer, official
    franchise store, seller, or fulfilment provider.
-   Show merchant/source information where useful and verified.
-   Make prices, stock, shipping, and availability timestamps clear if
    supplied by the merchant feed; avoid presenting stale feed data as
    live.
-   Add About, Contact, Privacy Policy, Terms, and Affiliate Disclosure
    pages appropriate to the business and applicable law.
-   Make contact details and business claims truthful. Do not invent an
    address, legal entity, or customer-service promise.

## 9. Performance, mobile usability, and accessibility

Audit and improve without sacrificing functionality: - Core Web Vitals
and loading performance. - Mobile responsiveness and readable
typography. - Image sizing, compression, modern formats, and lazy
loading below the fold. - Explicit image dimensions or aspect ratios to
reduce layout shift. - Minimize unnecessary third-party scripts. - Use
accessible labels, keyboard navigation, visible focus, and meaningful
alt text. - Avoid intrusive interstitials and popups that block
content. - Ensure navigation, product links, filters, and pagination
work without errors. - Test 404 pages, redirect behavior, and server
errors.

Do not lazy-load the main above-the-fold product/hero image if it causes
a significant delay; use the correct priority behavior supported by the
project's Next.js version.

## 10. Search engine and AI discovery setup

After deploying, document and guide the owner through external
verification: 1. Google Search Console: verify domain ownership, submit
the sitemap, inspect key URLs, and review indexing/crawl issues. 2. Bing
Webmaster Tools: verify the site, submit sitemap, and inspect
crawl/index reports. 3. Check other available webmaster/indexing tools
offered by relevant search providers. 4. Confirm the canonical homepage,
a category page, a product page, and a guide are indexable and return
expected metadata. 5. Confirm the sitemap and robots file are reachable
from a clean browser session. 6. Review analytics/referral reporting for
AI-search traffic where available.

Provider-specific crawler names, policies, and submission methods
change. Verify current official documentation before adding new crawler
rules or claiming that a particular AI product uses a specific crawler.
There is no universal "submit once to every AI" switch.

## 11. Analytics and monitoring

If analytics already exists, preserve it and configure useful reporting.
If adding analytics, do not install a new provider without checking
privacy, consent, performance, and existing setup.

Monitor: - Search impressions, clicks, indexed pages, crawl errors, and
sitemap processing. - Organic landing pages and conversion/outbound
affiliate clicks. - Broken product links and merchant redirects. -
Product price/availability freshness if feeds are used. - AI-search
referral traffic where referrers are provided. - Changes to robots,
canonicals, noindex tags, redirects, and sitemap output.

Do not claim that a visit came from an AI assistant unless reliable
referrer or analytics evidence supports it. Referrer data can be absent
or incomplete.

## 12. Testing and acceptance criteria

Before marking work complete, verify as many of the following as
possible:

### Technical

-   [ ] Production homepage returns HTTP 200 over HTTPS.
-   [ ] `/robots.txt` returns HTTP 200 and has valid, intentional rules.
-   [ ] `/sitemap.xml` returns valid XML and contains only canonical,
    indexable URLs.
-   [ ] Sitemap URLs use the actual production domain.
-   [ ] Key pages are not accidentally blocked by robots rules or
    `noindex`.
-   [ ] Canonicals are absolute, correct, and consistent.
-   [ ] No important page is only accessible through an internal search
    form.
-   [ ] Important product information is accessible to crawlers in
    rendered HTML.
-   [ ] CDN/WAF rules do not unintentionally block verified search
    crawlers.
-   [ ] No staging URL is accidentally canonical or indexed.

### Content and metadata

-   [ ] Home, category, product, and guide pages have unique titles and
    descriptions.
-   [ ] Headings are semantic and useful.
-   [ ] Images have meaningful alt text where appropriate.
-   [ ] Internal links are descriptive and functional.
-   [ ] Affiliate disclosure is visible.
-   [ ] Product facts are accurate and not fabricated.
-   [ ] Thin, duplicate, and low-value pages are excluded or improved.

### Structured data

-   [ ] JSON-LD validates and matches visible content.
-   [ ] No fake reviews, ratings, prices, availability, or seller
    claims.
-   [ ] Product markup does not falsely imply the affiliate site owns or
    fulfills products.
-   [ ] No duplicate or contradictory structured data.

### Quality and performance

-   [ ] Mobile layout is usable.
-   [ ] Key pages have no console/server errors.
-   [ ] Representative pages pass basic accessibility checks.
-   [ ] Broken links and redirect chains have been checked.
-   [ ] Existing checkout, affiliate tracking, navigation, and site
    features still work.

## 13. Required agent deliverables

When finished, provide: 1. A concise summary of what was changed. 2. The
exact files added or edited. 3. Any environment variables the owner must
set, with example values but no secrets. 4. The production URLs for
robots.txt and sitemap.xml. 5. Tests/commands run and their results. 6.
Any outstanding issues or assumptions. 7. Exact manual steps needed in
GoDaddy, hosting/CDN dashboards, Google Search Console, Bing Webmaster
Tools, or other services. 8. A list of crawlers explicitly allowed,
blocked, or left unchanged, including the reason for each. 9. A note
that indexing and AI search inclusion are controlled by the providers
and cannot be guaranteed.

## 14. Suggested implementation order

1.  Audit repository and deployment without changing architecture.
2.  Fix canonical domain configuration, metadata, robots, sitemap, and
    accidental noindex/blocking.
3.  Fix rendering/indexability and internal linking for existing
    product/category pages.
4.  Add accurate structured data.
5.  Improve affiliate disclosure, trust pages, and product-data
    accuracy.
6.  Improve performance/accessibility.
7.  Add or improve a small set of genuinely useful original guides.
8.  Validate representative pages and run tests.
9.  Deploy only through the project's established workflow.
10. Provide the owner with verification/submission steps and remaining
    external tasks.

## 15. Final principle

Optimize for people first and make the site's useful content technically
accessible to search engines and AI systems. Crawlability, indexability,
structured data, trustworthy product information, original editorial
value, and a technically sound website improve eligibility and
understanding---but no agent, plugin, metadata tag, or crawler rule can
guarantee that any particular AI assistant will mention or recommend the
site.
