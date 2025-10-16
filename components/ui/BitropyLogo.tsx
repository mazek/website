import Image from "next/image"

interface BitropyLogoProps {
  className?: string
  variant?: "light" | "dark"
}

export default function BitropyLogo({ className = "h-12 w-auto" }: BitropyLogoProps) {
  return (
    <div className={className}>
      <Image
        src="/images/Bitropy.svg"
        alt="Bitropy"
        width={1152}
        height={389}
        className="h-full w-auto object-contain object-left"
      />
    </div>
  )
} 