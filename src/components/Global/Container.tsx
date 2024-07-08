import {cn} from '@/lib/utils'

interface Props {
  children: React.ReactNode
  width?: '1/2' | '4/5'
  padding?: boolean
  className?: string
}

export const websiteWidth = {
  default: 'mx-auto flex-auto',
  '1/2': 'w-[50%]',
  '4/5': 'w-[94%]',
}

export default function Container({children, width = '4/5', padding = true, className}: Props) {
  const containerStyles = `${websiteWidth.default} ${websiteWidth[width]} ${padding ? 'pt-20 sm:pt-28' : ''}`

  return <main className={cn(containerStyles, className)}>{children}</main>
}
