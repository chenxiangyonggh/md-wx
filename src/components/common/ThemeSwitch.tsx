import { useState } from 'react'
import type { ThemeType } from '../../types'
import { themeNames } from '../../style/themes'

interface ThemeSwitchProps {
  theme: ThemeType
  onChange: (theme: ThemeType) => void
}

export default function ThemeSwitch({ theme, onChange }: ThemeSwitchProps) {
  const [isOpen, setIsOpen] = useState(false)

  const themeList: ThemeType[] = ['notion', 'github-dark', 'sakura', 'sunset', 'forest']

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-200"
      >
        <span className="text-xl">🌈</span>
        <span className="text-sm font-medium text-gray-700">{themeNames[theme]}</span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden z-50">
          {themeList.map((themeItem) => (
            <button
              key={themeItem}
              onClick={() => {
                onChange(themeItem)
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                theme === themeItem ? 'bg-blue-50' : ''
              }`}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  background:
                    themeItem === 'notion'
                      ? '#ffffff'
                      : themeItem === 'github-dark'
                      ? '#0d1117'
                      : themeItem === 'sakura'
                      ? '#f472b6'
                      : themeItem === 'sunset'
                      ? '#f97316'
                      : '#16a34a',
                  border: '2px solid #e5e7eb',
                }}
              />
              <span className="text-sm text-gray-700">{themeNames[themeItem]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
