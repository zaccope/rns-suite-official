import Image from 'next/image'

interface LogoProps {
  size?: number
  className?: string
  priority?: boolean
  rounded?: boolean
  glow?: boolean
}

export default function Logo({
  size = 48,
  className = '',
  priority = false,
  rounded = true,
  glow = false,
}: LogoProps) {
  return (
    <Image
      src="/images/LOGO.jpg"
      alt="Rock N Soul Suite"
      width={size}
      height={size}
      priority={priority}
      className={`object-contain ${rounded ? 'rounded-sm' : ''} ${className}`}
      style={
        glow
          ? {
              filter: 'drop-shadow(0 0 40px rgba(225, 66, 32, 0.55)) drop-shadow(0 0 80px rgba(226, 149, 31, 0.25))',
            }
          : undefined
      }
    />
  )
}
