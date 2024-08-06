import {cn} from '@/lib/utils'

import HeroCell from '##/index/Grid/HeroCell'
import PlusesCell from '##/index/Grid/PlusesCell'
import LinksCell from '##/index/Grid/LinksCell'
import ShowCell from '##/index/Grid/ShowCell'

const gridConfig = {
  core: 'grid-cols-10 grid-rows-10 sm:flex sm:flex-col',
  cell: {
    hero: 'col-span-5 row-span-6',
    pluses: 'col-span-2 row-span-8',
    builder: 'col-span-3 row-span-8',

    links: 'col-span-2 row-span-4',
    showcase: 'col-span-3 row-span-4',
    docs: 'col-span-3 row-span-2',
    team: 'col-span-2 row-span-2',
  },
  gap: 'gap-5 xl:gap-4 sm:gap-3',
  styles: 'bg-item rounded-2xl',
}
export const {core, cell, gap, styles} = gridConfig
const blockStyles = 'grid place-items-center px-5 text-center font-book text-primary bg-item rounded-2xl text-xl sm:min-h-[15vh]'

export default function Grid() {
  return (
    <section className={`grid ${core} ${gap} h-[86vh] xl:h-[83vh] sm:h-auto`}>
      <HeroCell />
      <PlusesCell />

      <div className={cn(cell.builder, blockStyles)}>большой плакат-конструктор</div>

      <LinksCell />
      <ShowCell />
      <div className={cn(cell.docs, blockStyles)}>документация</div>
      <div className={cn(cell.team, blockStyles)}>о команде</div>
    </section>
  )
}
