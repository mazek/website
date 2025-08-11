import { getAllArticles } from '@/lib/mdx'

export async function GET() {
  const articles = getAllArticles()
  const baseUrl = 'https://bitropy.io'
  const lastModified = new Date().toISOString()

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bitropy - Strategic Technology Architecture Consulting</title>
    <description>High-value technology consulting led by executives from 9-figure exits. Specializing in AI, DevSecOps, AIOps, Enterprise Blockchain, and M&A readiness.</description>
    <link>${baseUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${lastModified}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>darek@bitropy.io (Darek Dwornikowski)</managingEditor>
    <webMaster>darek@bitropy.io (Darek Dwornikowski)</webMaster>
    <category>Technology Consulting</category>
    <category>AI Consulting</category>
    <category>Data Sovereignty</category>
    <category>Private AI</category>
    <category>DevSecOps</category>
    <ttl>1440</ttl>

${articles.map((article) => {
  const articleUrl = `${baseUrl}/en/articles/${article.id}`
  const imageUrl = article.image.startsWith('http') ? article.image : `${baseUrl}${article.image}`
  
  return `    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <pubDate>${new Date(article.publishDate).toUTCString()}</pubDate>
      <author>darek@bitropy.io (${article.author})</author>
      <category><![CDATA[${article.category}]]></category>
      ${article.tags ? article.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n      ') : ''}
      <enclosure url="${imageUrl}" type="image/jpeg" length="0"/>
      <source url="${baseUrl}/feed.xml">Bitropy Blog</source>
    </item>`
}).join('\n')}

  </channel>
</rss>`

  return new Response(rssXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
}