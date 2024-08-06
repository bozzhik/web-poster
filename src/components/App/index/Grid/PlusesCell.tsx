'use client'

import {useState, useEffect} from 'react'

import {cn} from '@/lib/utils'
import {cell, gap, styles} from '##/index/Grid'

import Heading from '#/UI/Heading'

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
          let newHead: number

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
      <div className={cn('row-span-4', 'p-4 pt-3 xl:p-3 flex flex-col gap-5 justify-between', styles)}>
        <Heading type="h2" className="sm:text-center">
          уже разобрали <br className="hidden sm:block" /> <span className="hidden sm:inline">все</span> основные компоненты
        </Heading>

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
      <div className={cn('row-span-6', 'relative overflow-hidden p-4 pt-3 xl:p-3 sm:pb-4 flex flex-col gap-2 sm:gap-5 justify-between', styles)}>
        <Heading type="h2" className="sm:text-center">
          весь код уже доступен для <br className="hidden sm:block" /> твоего проекта
        </Heading>
      </div>
    )
  }

  return (
    <div className={cn('grid grid-rows-10 sm:flex sm:flex-col', [cell.pluses, gap])}>
      <PlusesCellBlocks />
      <PlusesCellCode />
    </div>
  )
}
