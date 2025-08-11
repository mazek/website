"use client"

import { usePathname, useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
]

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = pathname.split('/')[1] || 'en'
  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0]

  const switchLanguage = (newLang: string) => {
    const pathWithoutLang = pathname.replace(`/${currentLang}`, '') || '/'
    const newPath = newLang === 'en' ? pathWithoutLang : `/${newLang}${pathWithoutLang}`
    router.push(newPath)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-2 py-1 text-lg hover:bg-gray-700 rounded transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Current language: ${currentLanguage.name}. Click to change language.`}
      >
        <span className="text-xl">{currentLanguage.flag}</span>
        <ChevronDown 
          className={`ml-1 h-3 w-3 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 z-50">
          <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-1 min-w-[120px]">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={`w-full flex items-center px-3 py-2 text-sm hover:bg-gray-800 transition-colors ${
                  currentLang === language.code 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="text-base mr-2">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}