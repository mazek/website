import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import ShareButtons from "@/components/ShareButtons"
import { ArticleSchema } from "@/components/StructuredData"
import { Badge } from "@/components/ui/badge"
import { BreadcrumbStructuredData } from "@/components/ui/Breadcrumb"
import { Button } from "@/components/ui/button"
import { getArticleById } from "@/lib/mdx"
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, Share2 } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleById(slug)

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The article you're looking for could not be found."
    }
  }

  const articleUrl = `https://bitropy.io/articles/${article.id}`
  const imageUrl = article.image.startsWith('http') ? article.image : `https://bitropy.io${article.image}`

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author }],
    openGraph: {
      type: "article",
      locale: "en_US",
      url: articleUrl,
      siteName: "Bitropy",
      title: article.title,
      description: article.description,
      publishedTime: article.publishDate,
      authors: [article.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@bitropy",
      creator: "@bitropy",
      title: article.title,
      description: article.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: articleUrl,
    },
    keywords: article.tags?.join(", ") || "",
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleById(slug)

  if (!article) {
    notFound()
  }


  const breadcrumbItems = [
    {
      label: 'Articles',
      href: '/articles'
    },
    {
      label: article.title
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ArticleSchema article={article} />
      <BreadcrumbStructuredData items={breadcrumbItems} lang="en" />
      <Header currentPage="articles" />

      {/* Article Header */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

        <div className="w-full max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div className="mb-8">
            <Link href="/articles">
              <Button variant="ghost" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 font-medium mb-6 group">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Insights
              </Button>
            </Link>
          </div>

          <div className="space-y-6 max-w-4xl">
            <Badge className="bg-purple-600 text-white border-0 px-4 py-1.5 text-sm font-medium">
              {article.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight tracking-tight">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {article.description}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span>{new Date(article.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gray-400" />
                  <span>By {article.author}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-sm font-medium flex items-center">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </span>
                <ShareButtons
                  title={article.title}
                  url={`https://bitropy.io/articles/${article.id}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 relative bg-white">
        <div className="w-full max-w-4xl mx-auto px-6 md:px-8">
          {/* Main Content */}
          <div className="bg-white">
            <div
              className="prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-600 prose-ol:text-gray-600 prose-li:text-gray-600 prose-a:text-purple-600 prose-a:no-underline hover:prose-a:text-purple-700 prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* CTA Section */}
            <div className="mt-20 pt-12 border-t border-gray-200">
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-10 border border-purple-100">
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
                      Ready to Implement These Strategies?
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Get expert guidance from leaders with proven 9-figure exits. Let&apos;s turn these insights into measurable results for your organization.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Link href="https://calendly.com/darek-bitropy/call">
                      <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                        Start Your AI Fast Track
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/articles">
                      <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium rounded-lg transition-colors">
                        More Insights
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 