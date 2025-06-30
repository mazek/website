"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      // You could add a toast notification here
    } catch (error) {
      console.log('Error copying link:', error)
    }
  }

  return (
    <div className="space-y-3">
      <Button 
        variant="outline" 
        className="w-full border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
        onClick={handleShare}
      >
        Share via Browser
      </Button>
      <Button 
        variant="outline" 
        className="w-full border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
        onClick={handleCopyLink}
      >
        Copy Link
      </Button>
    </div>
  )
} 