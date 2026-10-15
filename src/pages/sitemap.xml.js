const defaultLastmod = '2026-05-27';
const pages = [
  ['', '1.0'],
  ['method/', '0.9'],
  ['services/', '0.9'],
  ['somatic-experiencing/', '0.9'],
  ['neuroaffective-touch/', '0.85'],
  ['about/', '0.7'],
  ['contact/', '0.8'],
  ['faq/', '0.75'],
  ['testimonials/', '0.75'],
  ['blog/', '0.7'],
  ['rolfing-for-jaw-pain-tmj-folsom/', '0.9'],
  ['rolfing-for-headaches-migraines-folsom/', '0.9'],
  ['rolfing-for-neck-pain-folsom/', '0.9'],
  ['rolfing-for-shoulder-pain-folsom/', '0.9', '2026-10-13'],
  ['rolfing-for-back-pain-folsom/', '0.9', '2026-10-13'],
  ['rolfing-for-sciatica-folsom/', '0.9', '2026-10-13'],
  ['rolfing-for-scoliosis-folsom/', '0.9', '2026-10-13'],
  ['rolfing-for-knee-pain-folsom/', '0.9', '2026-10-13'],
  ['rolfing-for-ankle-foot-pain-folsom/', '0.9', '2026-10-13'],
  ['blog/rolfing-vs-massage-folsom/', '0.8'],
  ['blog/rolfing-jaw-neck-headache-connection/', '0.85'],
  ['blog/rolfing-for-back-pain-folsom/', '0.85'],
  ['blog/rolfing-for-posture-folsom/', '0.8'],
  ['blog/what-to-expect-first-rolfing-session/', '0.75'],
  ['blog/rolfing-ten-series-folsom/', '0.8'],
  ['serving/', '0.75'],
  ['serving/folsom-rolfing/', '0.85'],
  ['serving/el-dorado-hills-rolfing/', '0.75'],
  ['serving/shingle-springs-rolfing/', '0.75'],
  ['serving/cameron-park-rolfing/', '0.75'],
  ['serving/placerville-rolfing/', '0.75'],
  ['serving/sacramento-rolfing/', '0.75'],
];

export async function GET() {
  const base = 'https://ryansrolfing.com/';
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([path, priority, lastmod = defaultLastmod]) => `  <url>
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
