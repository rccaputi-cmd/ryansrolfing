const pages = [
  ['', '1.0'],
  ['method/', '0.8'],
  ['services/', '0.9'],
  ['somatic-experiencing/', '0.9'],
  ['about/', '0.7'],
  ['contact/', '0.8'],
  ['blog/', '0.5'],
];

export async function GET() {
  const base = 'https://ryansrolfing.com/';
  const lastmod = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(([path, priority]) => `  <url>
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
