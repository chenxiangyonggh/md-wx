export type ThemeType = 'notion' | 'github-dark' | 'sakura' | 'sunset' | 'forest'

export type ViewMode = 'mobile' | 'desktop'

export interface IThemeConfig {
  primaryColor: string
  secondaryColor: string
  bgColor: string
  cardBg: string
  textColor: string
  textSecondary: string
  headingColor: string
  quoteBg: string
  quoteBorder: string
  codeBg: string
  codeText: string
  linkColor: string
  linkHover: string
  borderColor: string
  shadow: string
}

export interface MarkdownRendererProps {
  content: string
  theme?: ThemeType
  viewMode?: ViewMode
  showSettings?: boolean
  onCopy?: () => void
}

export interface ThemeSwitchProps {
  theme: ThemeType
  onChange: (theme: ThemeType) => void
}

export interface ViewSwitchProps {
  viewMode: ViewMode
  onChange: (viewMode: ViewMode) => void
}

export interface SettingsBarProps {
  theme: ThemeType
  viewMode: ViewMode
  onThemeChange: (theme: ThemeType) => void
  onViewModeChange: (viewMode: ViewMode) => void
  onCopy: () => void
}
