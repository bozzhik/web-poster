import {cn} from '@/lib/utils'

interface Props {
  children: React.ReactNode
  width?: '1/2' | '4/5'
  padding?: boolean
  className?: string
}

export const websiteBox = {
  default: 'mx-auto flex-auto',
  '1/2': '',
  '4/5': 'mx-[25px] sm:mx-2',
}

export default function Container({children, width = '4/5', padding = true, className}: Props) {
  const containerStyles = `${websiteBox.default} ${websiteBox[width]} ${padding ? 'pt-28 sm:pt-16' : ''}`

  return <main className={cn(containerStyles, 'mx-6', className)}>{children}</main>
}
