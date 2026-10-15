const updated = '2026-10-15';
const unchanged = '2026-05-27';

const pages = [
  ['', '1.0', unchanged],
  ['method/', '0.9', updated],
  ['services/', '0.9', updated],
  ['somatic-experiencing/', '0.9', updated],
  ['neuroaffective-touch/', '0.85', updated],
  ['about/', '0.7', updated],
  ['contact/', '0.8', updated],
  ['faq/', '0.75', unchanged],
  ['testimonials/', '0.75', unchanged],
  ['blog/', '0.7', unchanged],
  ['rolfing-for-jaw-pain-tmj-folsom/', '0.9', unchanged],
  ['rolfing-for-headaches-migraines-folsom/', '0.9', unchanged],
  ['rolfing-for-neck-pain-folsom/', '0.9', unchanged],
  ['blog/rolfing-vs-massage-folsom/', '0.8', unchanged],
  ['blog/rolfing-jaw-neck-headache-connection/', '0.85', unchanged],
  ['blog/rolfing-for-back-pain-folsom/', '0.85', unchanged],
  ['blog/rolfing-for-posture-folsom/', '0.8', unchanged],
  ['blog/what-to-expect-first-rolfing-session/', '0.75', unchanged],
  ['blog/rolfing-ten-series-folsom/', '0.8', unchanged],
  ['serving/', '0.75', unchanged],
  ['serving/folsom-rolfing/', '0.85', unchanged],
  ['serving/el-dorado-hills-rolfing/', '0.75', unchanged],
  ['serving/shingle-springs-rolfing/', '0.75', unchanged],
  ['serving/cameron-park-rolfing/', '0.75', unchanged],
  ['serving/placerville-rolfing/', '0.75', unchanged],
  ['serving/sacramento-rolfing/', '0.75', unchanged],
];

export async function GET() {
  const base = 'https://ryansrolfing.com/';
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([path, priority, lastmod]) => `  <url>
    <loc>${base}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
