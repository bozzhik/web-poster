'use client'

import {useState, useEffect} from 'react'
import {Moon, Sun} from 'lucide-react'

export default function Theme() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const themeSize = {
    icon: 's-8 xl:s-7 sm:s-5',
    stroke: 1.7,
  }

  return (
    <div className="cursor-pointer rounded-[10px] sm:rounded-lg p-1.5 bg-primary s-fit dark:!text-background !text-foreground" onClick={() => setIsDarkMode((prevMode) => !prevMode)}>
      {isDarkMode ? <Moon className={themeSize.icon} strokeWidth={themeSize.stroke} /> : <Sun className={themeSize.icon} strokeWidth={themeSize.stroke} />}
    </div>
  )
}
