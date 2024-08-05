import {cn} from '@/lib/utils'

interface Props {
  type: 'h1' | 'h2' | 'h3'
  children: React.ReactNode
  className?: string
}

const Heading: React.FC<Props> = ({type, className, children}) => {
  if (type === 'h1') {
    return <h1 className={cn('text-[110px] xl:text-[85px] sm:text-6xl', 'text-primary uppercase font-bold', 'tracking-tight !leading-[90%] ', className)}>{children}</h1>
  } else if (type === 'h2') {
    return <h2 className={cn('text-[40px] xl:text-[28px] sm:text-3xl', 'text-primary font-book', 'tracking-tight !leading-[90%] sm:!leading-none', className)}>{children}</h2>
  }
}

export default Heading
