import { useState, useRef, useCallback } from 'react'
import type { ViewMode, MarkdownRendererProps } from '../types'
import { useTheme } from '../hooks/useTheme'
import { parseMarkdown } from '../parser/markdownParser'
import { copyToClipboard } from '../utils/copyToClipboard'
import { convertToWechatHtml } from '../utils/wechatConverter'
import SettingsBar from './SettingsBar'
import PreviewArea from './PreviewArea'

export default function MarkdownRenderer({
  content,
  theme: initialTheme = 'notion',
  viewMode: initialViewMode = 'mobile',
  showSettings = true,
  onCopy,
}: MarkdownRendererProps) {
  const [viewMode, setViewMode] = useState<ViewMode>(initialViewMode)
  const previewRef = useRef<HTMLDivElement>(null)
  const { theme, setTheme } = useTheme(initialTheme)

  const handleCopy = useCallback(async () => {
    if (previewRef.current) {
      const html = previewRef.current.innerHTML
      const wechatHtml = convertToWechatHtml(html)
      const success = await copyToClipboard(wechatHtml)
      if (success && onCopy) {
        onCopy()
      }
    }
  }, [onCopy])

  const renderedContent = parseMarkdown(content)

  return (
    <div className="min-h-screen bg-gray-100 py-24 px-4">
      {showSettings && (
        <SettingsBar
          theme={theme}
          viewMode={viewMode}
          onThemeChange={setTheme}
          onViewModeChange={setViewMode}
          onCopy={handleCopy}
        />
      )}

      <PreviewArea viewMode={viewMode}>
        <div
          ref={previewRef}
          className="markdown-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        />
      </PreviewArea>
    </div>
  )
}
