import {websitePaths} from '@/lib/constants'
import {websiteBox} from '#/Global/Container'
import Theme from '#/Global/Theme'

import {cn} from '@/lib/utils'

interface Props {
  width?: '1/2' | '4/5'
}

const HeaderLink: React.FC<{link: string; className?: string; children: React.ReactNode}> = ({link, className = '', children}) => {
  return (
    <a href={link} className={cn('text-xl xl:text-lg sm:text-base duration-200 hover:text-neutral-400', className)}>
      {children}
    </a>
  )
}

export default function Header({width = '4/5'}: Props) {
  const {main} = websitePaths.header

  return (
    <header className="fixed z-50 w-full pt-5 xl:pt-4 sm:pt-2">
      <nav className={`flex items-center justify-between bg-item p-3 xl:p-2 sm:p-1.5 rounded-2xl sm:rounded-xl ${websiteBox[width]}`}>
        <div className="flex items-center gap-6 sm:justify-between sm:gap-2.5">
          <HeaderLink link="/" className="px-3 sm:px-2.5 py-1.5 xl:text-xl sm:text-sm font-book sm:font-medium duration-300 rounded-[10px] sm:rounded-lg dark:!text-background !text-foreground bg-primary hover:scale-95">
            веб-плакат
          </HeaderLink>

          <div className="space-x-4">
            {Object.entries(main).map(([key, {text, link}]) => (
              <HeaderLink link={link} key={key} className={key === 'builder' ? 'sm:hidden' : ''}>
                {text}
              </HeaderLink>
            ))}
          </div>
        </div>

        <Theme />
      </nav>
    </header>
  )
}
