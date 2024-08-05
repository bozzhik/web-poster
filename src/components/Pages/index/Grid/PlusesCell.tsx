import {useState, useEffect} from 'react'

import {cn} from '@/lib/utils'
import {cell, gap, styles} from '##/index/Grid'

import Heading from '#/UI/Heading'
import Snippet from '#/UI/Snippet'

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
    const codeData = {
      html: '<div id="block">Блок</div>',
      css: '.block {\n  width: 100px;\n  height: 100px;\n  background: purple;\n}',
      js: 'console.log("Клик!");',
    }

    const Code = ({language, className = '', code}) => (
      <div className={className}>
        <Snippet lang={language} className="[&>pre]:p-3 xl:[&>pre]:p-2 sm:[&>pre]:px-2.5 [&>pre]:rounded-lg [&>pre]:ring-neutral-500/25 [&>pre]:ring-[1.5px] text-lg xl:text-sm sm:text-base" code={code} />
      </div>
    )

    return (
      <div className={cn('row-span-6', 'relative overflow-hidden p-4 pt-3 xl:p-3 sm:pb-4 flex flex-col gap-2 sm:gap-5 justify-between', styles)}>
        <Heading type="h2" className="sm:text-center">
          весь код уже доступен для <br className="hidden sm:block" /> твоего проекта
        </Heading>

        <div className="relative flex flex-col justify-center h-full mx-1 sm:gap-2">
          <Code className="rotate-[-3deg] hover:rotate-[-4deg] duration-300 sm:rotate-0" language="css" code={codeData.css} />
          <Code className="rotate-[2deg] hover:rotate-[0deg] duration-300 sm:rotate-0 mt-1.5 sm:mt-0" language="html" code={codeData.html} />
          <Code className="rotate-[-3deg] hover:rotate-[-5deg] duration-300 sm:rotate-0" language="javascript" code={codeData.js} />
        </div>
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
