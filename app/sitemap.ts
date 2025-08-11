import { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bitropy.io'
  const articles = getAllArticles()
  
  // Generate article URLs for both languages
  const articleUrls: MetadataRoute.Sitemap = []
  
  articles.forEach((article) => {
    // English version
    articleUrls.push({
      url: `${baseUrl}/en/articles/${article.id}`,
      lastModified: new Date(article.publishDate),
      changeFrequency: 'monthly',
      priority: 0.8,
    })
    
    // Polish version  
    articleUrls.push({
      url: `${baseUrl}/pl/articles/${article.id}`,
      lastModified: new Date(article.publishDate),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  return [
    // Homepage - English (primary)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Homepage - English explicit
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Homepage - Polish
    {
      url: `${baseUrl}/pl`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Articles index - English
    {
      url: `${baseUrl}/en/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Articles index - Polish
    {
      url: `${baseUrl}/pl/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Privacy page - English
    {
      url: `${baseUrl}/en/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    // Privacy page - Polish
    {
      url: `${baseUrl}/pl/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    // All article URLs
    ...articleUrls
  ]
}