import {useState, useEffect} from 'react'

import {cn} from '@/lib/utils'
import {child, gap} from '##/index/Grid'
const blockStyles = 'bg-item rounded-2xl'

import HeroGridImage from '%/images/index/hero-grid.svg'
import HeroDeviceImage from '%/images/index/hero-device.png'

export function HeroCell() {
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

export function PlusesCell() {
  const numCells = 18
  const gridSize = 6
  const initialSnake = [0, 1, 2]
  const [snake, setSnake] = useState(initialSnake)

  const getRandomDirection = () => {
    const directions = ['UP', 'DOWN', 'LEFT', 'RIGHT']
    return directions[Math.floor(Math.random() * directions.length)]
  }

  useEffect(() => {
    const moveSnake = () => {
      setSnake((prev) => {
        const head = prev[0]
        let newHead
        switch (getRandomDirection()) {
          case 'UP':
            newHead = (head - gridSize + numCells) % numCells
            break
          case 'DOWN':
            newHead = (head + gridSize) % numCells
            break
          case 'LEFT':
            newHead = head % gridSize === 0 ? head + gridSize - 1 : head - 1
            break
          case 'RIGHT':
            newHead = (head + 1) % gridSize === 0 ? head - gridSize + 1 : head + 1
            break
          default:
            newHead = (head + 1) % numCells
        }
        return [newHead, ...prev.slice(0, 2)]
      })
    }

    const intervalId = setInterval(moveSnake, 250)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className={cn('grid grid-rows-2', [child.pluses, gap])}>
      <div className={cn('p-5 xl:p-3.5 flex flex-col gap-3 sm:gap-6 justify-between', blockStyles)}>
        <h2 className="text-[40px] xl:text-3xl sm:text-4xl text-primary !leading-[90%] sm:text-center sm:!leading-none">
          уже разобрали <span className="hidden sm:inline">все</span> компоненты <br /> для тебя
        </h2>

        <div className="grid grid-cols-6 gap-2 xl:gap-1.5 overflow-hidden rounded-lg">
          {Array.from({length: numCells}).map((_, index) => (
            <div key={index} className={cn('w-full aspect-square rounded-md', snake.includes(index) ? 'bg-primary' : 'bg-white/15')}></div>
          ))}
        </div>
      </div>

      <div className={blockStyles}>можно скопировать код?</div>
    </div>
  )
}
