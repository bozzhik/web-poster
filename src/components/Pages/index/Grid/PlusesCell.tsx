import {useState, useEffect} from 'react'

import {cn} from '@/lib/utils'
import {child, gap} from '##/index/Grid'
const blockStyles = 'bg-item rounded-2xl'

export default function PlusesCell() {
  function PlusesCellBlocks() {
    const numCells = 12
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
      <div className={cn('row-span-4', 'p-5 pt-3 xl:p-3.5 xl:pt-2.5 sm:pt-3 flex flex-col gap-5 sm:gap-6 justify-between', blockStyles)}>
        <h2 className="text-[40px] xl:text-[28px] sm:text-4xl text-primary !leading-[90%] sm:text-center sm:!leading-none">
          уже разобрали <span className="hidden sm:inline">все</span> компоненты <br /> для тебя
        </h2>

        <div className="grid grid-cols-6 gap-2 xl:gap-1.5 overflow-hidden rounded-lg">
          {Array.from({length: numCells}).map((_, index) => (
            <div key={index} className={cn('w-full aspect-square rounded-md', snake.includes(index) ? 'bg-primary' : 'bg-white/15')}></div>
          ))}
        </div>
      </div>
    )
  }

  function PlusesCellCode() {
    return (
      <div className={cn('row-span-6', 'p-5 pt-3 xl:p-3.5 xl:pt-2.5 sm:pt-3', blockStyles)}>
        <h2 className="text-5xl !leading-[90%]">весь код уже написан</h2>

        <div className="flex flex-col gap-3">
          <mark>aaaa</mark>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('grid grid-rows-10', [child.pluses, gap])}>
      <PlusesCellBlocks />
      <PlusesCellCode />
    </div>
  )
}
