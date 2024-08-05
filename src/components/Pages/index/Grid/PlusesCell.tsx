import {useState, useEffect} from 'react'

import {cn} from '@/lib/utils'
import {child, gap} from '##/index/Grid'

import Snippet from '#/UI/Snippet'
import copy from 'copy-to-clipboard'

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
      <div className={cn('row-span-4', 'p-5 pt-3 xl:p-3.5 xl:pt-2.5 sm:pt-3 space-y-5 sm:space-y-6 justify-between', blockStyles)}>
        <h2 className="text-[40px] xl:text-[28px] sm:text-3xl font-book tracking-tight text-primary !leading-[90%] sm:text-center sm:!leading-none">
          уже разобрали <br className="hidden sm:block" /> <span className="hidden sm:inline">все</span> компоненты <br /> для тебя
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
    const codeData = {
      html: '<div id="block">Блок</div>',
      css: '.block {\n  width: 100px;\n  background: purple;\n}',
      js: 'console.log("Клик!");',
    }

    const [copied, setCopied] = useState(false)

    const handleCopy = (text: string, language: string) => {
      copy(text, {format: 'text/plain'})
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }

    const Code = ({language, className = '', code}) => (
      <div onClick={() => handleCopy(code, language)} title="Click to copy" className={className}>
        <Snippet lang={language} className="[&>pre]:p-4 [&>pre]:rounded-md text-xl" code={code} />

        {/* {copied && (
          <span className="absolute left-0 z-20 grid w-full sm:hidden bottom-3 place-items-center">
            <span className="px-3 py-1 text-white rounded-md bg-[#333]">Скопировано</span>
          </span>
        )} */}
      </div>
    )

    return (
      <div className={cn('row-span-6', 'relative overflow-hidden p-5 pt-3 xl:p-3.5 xl:pt-2.5 sm:pt-3 space-y-5 sm:space-y-6', blockStyles)}>
        <h2 className="text-5xl xl:text-3xl !leading-[90%] font-book tracking-tight text-primary sm:text-center sm:!leading-none">весь код уже написан</h2>

        <div className="sm:space-y-2 [&>*]:cursor-pointer">
          <Code className="rotate-[-3deg] hover:rotate-[-4deg] duration-300 sm:rotate-0" language="css" code={codeData.css} />
          <Code className="rotate-[2deg] hover:rotate-[0deg] duration-300 sm:rotate-0 mt-0.5 sm:mt-0" language="html" code={codeData.html} />
          <Code className="rotate-[-3deg] hover:rotate-[-5deg] duration-300 sm:rotate-0" language="javascript" code={codeData.js} />
        </div>
      </div>
    )
  }

  return (
    <div className={cn('grid grid-rows-10 sm:flex sm:flex-col', [child.pluses, gap])}>
      <PlusesCellBlocks />
      <PlusesCellCode />
    </div>
  )
}
