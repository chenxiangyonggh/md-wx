import { renderHook, act } from '@testing-library/react'
import { useTheme } from './useTheme'

describe('useTheme', () => {
  it('should initialize with default theme', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('notion')
  })

  it('should initialize with custom theme', () => {
    const { result } = renderHook(() => useTheme('github-dark'))
    expect(result.current.theme).toBe('github-dark')
  })

  it('should change theme', () => {
    const { result } = renderHook(() => useTheme())
    act(() => {
      result.current.setTheme('sakura')
    })
    expect(result.current.theme).toBe('sakura')
  })

  it('should have theme config', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.themeConfig).toBeDefined()
    expect(result.current.themeConfig.primaryColor).toBeDefined()
    expect(result.current.themeConfig.bgColor).toBeDefined()
  })

  it('should update theme config when theme changes', () => {
    const { result } = renderHook(() => useTheme('notion'))
    const initialConfig = result.current.themeConfig
    
    act(() => {
      result.current.setTheme('github-dark')
    })
    
    expect(result.current.themeConfig).not.toBe(initialConfig)
    expect(result.current.themeConfig.bgColor).toBe('#0d1117')
  })
})
