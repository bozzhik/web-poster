import {cn} from '@/lib/utils'
import {HeroCell, PlusesCell} from '##/index/GridBlocks'

const gridConfig = {
  core: 'grid-cols-10 grid-rows-10 sm:flex sm:flex-col',
  child: {
    hero: 'col-span-5 row-span-6',
    pluses: 'col-span-2 row-span-8',
    builder: 'col-span-3 row-span-8',

    figma: 'col-span-2 row-span-4',
    showcase: 'col-span-3 row-span-4',
    docs: 'col-span-3 row-span-2',
    team: 'col-span-2 row-span-2',
  },
  gap: 'gap-5 sm:gap-3',
}
export const {core, child, gap} = gridConfig
const blockStyles = 'grid place-items-center px-5 text-center font-book text-primary bg-item rounded-2xl text-xl sm:min-h-[15vh]'

export default function Grid() {
  return (
    <section className={`grid ${core} ${gap} h-[86vh] xl:h-[83vh] sm:h-auto`}>
      <HeroCell />
      <PlusesCell />

      <div className={cn(child.builder, blockStyles)}>большой плакат-конструктор</div>

      <div className={cn(child.figma, blockStyles)}>фигма файл (и гитхаб?) с дэфолтным плакатом</div>
      <div className={cn(child.showcase, blockStyles)}>витрина веб-плакатов с фильтрами</div>
      <div className={cn(child.docs, blockStyles)}>документация</div>
      <div className={cn(child.team, blockStyles)}>о команде</div>
    </section>
  )
}
