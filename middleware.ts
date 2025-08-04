import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'pl']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  // Check Accept-Language header for browser locale preference
  const acceptLanguage = request.headers.get('accept-language')
  
  if (acceptLanguage) {
    // Parse Accept-Language header to get preferred languages in order
    const languages = acceptLanguage
      .split(',')
      .map(lang => {
        const [code, quality = '1'] = lang.trim().split(';q=')
        return {
          code: code.toLowerCase().split('-')[0], // Get primary language code (e.g., 'pl' from 'pl-PL')
          quality: parseFloat(quality)
        }
      })
      .sort((a, b) => b.quality - a.quality) // Sort by quality preference
    
    // Find the first supported locale from browser preferences
    for (const lang of languages) {
      if (locales.includes(lang.code)) {
        return lang.code
      }
    }
  }

  // Default to English if no supported locale found in browser preferences
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Check if pathname already has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect to default locale if no locale specified
  const locale = getLocale(request)
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}