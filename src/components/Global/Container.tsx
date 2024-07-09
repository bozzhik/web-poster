import {cn} from '@/lib/utils'

interface Props {
  children: React.ReactNode
  width?: '1/2' | '4/5'
  padding?: boolean
  className?: string
}

export const websiteWidth = {
  default: 'mx-auto flex-auto',
  '1/2': 'w-[50%] sm:w-auto sm:mx-2',
  '4/5': 'w-[94%] sm:w-auto sm:mx-2',
}

export default function Container({children, width = '4/5', padding = true, className}: Props) {
  const containerStyles = `${websiteWidth.default} ${websiteWidth[width]} ${padding ? 'pt-28 sm:pt-16' : ''}`

  return <main className={cn(containerStyles, className)}>{children}</main>
}
