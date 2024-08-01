import {websitePaths} from '@/lib/constants'
import {websiteBox} from '#/Global/Container'
import Theme from '#/Global/Theme'

interface Props {
  width?: '1/2' | '4/5'
}

export default function Header({width = '4/5'}: Props) {
  const {main, socials} = websitePaths.header

  return (
    <header className="fixed w-full pt-5 sm:pt-2 text-[22px] sm:text-lg font-book z-50">
      <nav className={`flex items-center justify-between bg-item p-4 sm:p-1.5 rounded-[20px] sm:rounded-xl ${websiteBox[width]}`}>
        <div className="flex items-center gap-8 sm:gap-3">
          <a href="/" className="w-[70px] h-10 sm:w-14 sm:h-8 duration-300 rounded-[12px] sm:rounded-lg bg-primary hover:bg-primary-hover"></a>

          <div className="space-x-5 sm:space-x-0 mt-[-3px] sm:mt-0">
            {Object.entries(main).map(([key, {text, link}]) => (
              <a href={link} className={`duration-200 hover:opacity-60 ${key === 'about' ? 'sm:hidden' : ''}`} key={key}>
                {text}
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-7 sm:gap-3 items-center mr-2 xl:mr-1 sm:mr-0">
          <div className="space-x-5">
            {Object.entries(socials).map(([key, {text, link}]) => (
              <a href={link} className={`duration-200 hover:opacity-60 hover:underline ${key === 'habr' ? 'sm:hidden' : ''}`} key={key}>
                {text}
              </a>
            ))}
          </div>

          <Theme />
        </div>
      </nav>
    </header>
  )
}
