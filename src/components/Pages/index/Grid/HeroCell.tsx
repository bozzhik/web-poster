import {cn} from '@/lib/utils'
import {child, gap} from '##/index/Grid'
const blockStyles = 'bg-item rounded-2xl'

import HeroGridImage from '%/images/index/hero-grid.svg'
import HeroDeviceImage from '%/images/index/hero-device.png'

export default function HeroCell() {
  return (
    <div className={cn('relative overflow-hidden', [child.hero, gap, blockStyles])}>
      <div className="relative z-20 flex flex-col justify-between h-full p-6 pt-5 sm:gap-4 xl:p-5 xl:pt-4 sm:pb-3 sm:text-center">
        <h1 className="font-bold !leading-[90%] tracking-tight text-primary uppercase text-[110px] xl:text-[85px] sm:text-6xl">
          Ваш <br /> плакат <br /> в вебе
        </h1>

        <h3 className="text-2xl !leading-tight tracking-normal xl:text-xl sm:text-lg font-book">
          Одностраничный сайт, сочетающий <br className="sm:hidden" /> дизайн плаката и&nbsp;веб-анимацию
        </h3>
      </div>

      <img className="absolute sm:relative sm:inset-auto sm:scale-110 top-0 z-10 object-cover h-full right-[-290px]" src={HeroDeviceImage.src} />
      <img className="absolute top-0 object-cover w-full h-full" src={HeroGridImage.src} />

      <div className="absolute z-10 bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/15 via-black/10 to-[#25252501]"></div>
    </div>
  )
}
