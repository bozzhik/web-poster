import {cn} from '@/lib/utils'

interface Props {
  href?: string
  blank?: boolean
  children: React.ReactNode
  className?: string
}

const Button: React.FC<Props> = ({href, blank, children, className, ...buttonProps}) => {
  return (
    <a {...buttonProps} href={href} {...(blank && {target: '_blank'})} className={cn('block w-fit px-5 py-2 text-xl text-center font-book text-white bg-primary rounded-[10px] cursor-pointer hover:opacity-90 duration-200', className)}>
      {children}
    </a>
  )
}

export default Button
