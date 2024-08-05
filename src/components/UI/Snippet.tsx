import {cn} from '@/lib/utils'
import {useEffect, useState, useCallback} from 'react'
import {codeToHtml} from 'shiki'

export default function Snippet({code, lang, theme = 'github-dark', className = ''}) {
  const [html, setHtml] = useState('')

  const generateHtml = useCallback(async () => {
    const generatedHtml = await codeToHtml(code, {lang, theme})
    setHtml(generatedHtml)
  }, [code, lang, theme])

  useEffect(() => {
    generateHtml()
  }, [generateHtml])

  return <code className={cn('', className)} dangerouslySetInnerHTML={{__html: html}} />
}
