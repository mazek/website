"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Copy, Check, X } from "lucide-react"

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [showPanel, setShowPanel] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleTwitterShare = () => {
    const tweetText = `${title} ${url}`
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`, '_blank')
    setShowPanel(false)
  }

  const handleFacebookShare = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    setShowPanel(false)
  }

  const handleLinkedInShare = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
    setShowPanel(false)
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.log('Error copying link:', error)
    }
  }

  const handleNativeShare = async () => {
    // On mobile devices, use native share if available
    if (navigator.share && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title,
          url,
        })
      } catch (error) {
        console.log('Error sharing:', error)
        setShowPanel(true)
      }
    } else {
      // On desktop, always show custom panel
      setShowPanel(true)
    }
  }

  return (
    <div className="relative">
      {showPanel ? (
        <div className="absolute right-0 top-0 bg-gray-800 border border-gray-600 rounded-lg shadow-lg p-4 w-64 z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold text-sm">Share this article</h3>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-gray-400 hover:text-white"
              onClick={() => setShowPanel(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            <Button 
              variant="outline" 
              className="w-full justify-start border-gray-600 text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
              onClick={handleTwitterShare}
            >
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Share on X
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start border-gray-600 text-gray-300 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors"
              onClick={handleFacebookShare}
            >
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Share on Facebook
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start border-gray-600 text-gray-300 hover:bg-blue-800 hover:text-white hover:border-blue-800 transition-colors"
              onClick={handleLinkedInShare}
            >
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Share on LinkedIn
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full justify-start border-gray-600 text-gray-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
              onClick={handleCopyLink}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Link
                </>
              )}
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-x-2 flex">
          <Button 
            variant="outline" 
            className="border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
            onClick={handleNativeShare}
          >
            Share via Browser
          </Button>
          <Button 
            variant="outline" 
            className="border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
            onClick={handleCopyLink}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-1" />
                Copy Link
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  )
} 