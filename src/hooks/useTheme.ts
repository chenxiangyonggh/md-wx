import { useState, useCallback, useEffect } from 'react'
import type { ThemeType } from '../types'
import { themes } from '../style/themes'

export function useTheme(initialTheme: ThemeType = 'notion') {
  const [theme, setTheme] = useState<ThemeType>(initialTheme)

  const applyTheme = useCallback((themeName: ThemeType) => {
    const themeConfig = themes[themeName]
    const root = document.documentElement

    Object.entries(themeConfig).forEach(([key, value]) => {
      const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
      root.style.setProperty(cssVarName, value)
    })
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme, applyTheme])

  const changeTheme = useCallback((newTheme: ThemeType) => {
    setTheme(newTheme)
  }, [])

  return {
    theme,
    setTheme: changeTheme,
    themeConfig: themes[theme],
  }
}
