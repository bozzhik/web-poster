import {useState, useEffect} from 'react'
import {Moon, Sun} from 'lucide-react'

export default function Theme() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const themeIconSize = 's-8 sm:s-6'

  return (
    <div className="s-fit text-foreground cursor-pointer" onClick={() => setIsDarkMode((prevMode) => !prevMode)}>
      {isDarkMode ? <Moon className={themeIconSize} /> : <Sun className={themeIconSize} />}
    </div>
  )
}
