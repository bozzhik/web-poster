import {websitePaths} from '@/lib/constants'
import {websiteBox} from '#/Global/Container'
import Theme from '#/Global/Theme'

import {cn} from '@/lib/utils'

interface Props {
  width?: '1/2' | '4/5'
}

const HeaderLink: React.FC<{link: string; className?: string; children: React.ReactNode}> = ({link, className = '', children}) => {
  return (
    <a href={link} className={cn('duration-200 hover:text-neutral-400', className)}>
      {children}
    </a>
  )
}

export default function Header({width = '4/5'}: Props) {
  const {main, socials} = websitePaths.header

  return (
    <header className="fixed z-50 w-full pt-5 text-xl sm:pt-2 sm:text-lg">
      <nav className={`flex items-center justify-between bg-item p-3 sm:p-1.5 rounded-2xl sm:rounded-xl ${websiteBox[width]}`}>
        <div className="flex items-center gap-6 sm:gap-3">
          <HeaderLink link="/" className="px-3 py-1.5 font-book duration-300 rounded-[10px] dark:!text-background !text-foreground bg-primary hover:scale-95">
            веб-плакат
          </HeaderLink>

          <div className="space-x-4">
            {Object.entries(main).map(([key, {text, link}]) => (
              <HeaderLink link={link} key={key}>
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
