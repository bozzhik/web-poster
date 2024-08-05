import {createHighlighter} from 'shiki'
import {useEffect, useState, useCallback} from 'react'

import {cn} from '@/lib/utils'
import {purpleTheme} from '@/lib/highlightThemes'

const highlighter = await createHighlighter({
  themes: [purpleTheme],
  langs: ['html', 'css', 'javascript'],
})

export default function Snippet({code, lang, theme = 'purple-theme', className = ''}) {
  const [html, setHtml] = useState('')

  const generateHtml = useCallback(async () => {
    const generatedHtml = highlighter.codeToHtml(code, {lang, theme})
    setHtml(generatedHtml)
  }, [code, lang, theme])

  useEffect(() => {
    generateHtml()
  }, [generateHtml])

  return <code className={cn('', className)} dangerouslySetInnerHTML={{__html: html}} />
}
