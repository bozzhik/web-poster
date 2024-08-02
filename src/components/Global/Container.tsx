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
  '4/5': 'mx-5 sm:mx-3',
}

export default function Container({children, width = '4/5', padding = true, className}: Props) {
  const containerStyles = `${websiteBox.default} ${websiteBox[width]} ${padding ? 'pt-28 xl:pt-24 sm:pt-16' : ''}`

  return <main className={cn(containerStyles, className)}>{children}</main>
}
