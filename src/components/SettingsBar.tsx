import type { ThemeType, ViewMode } from '../types'
import ThemeSwitch from './common/ThemeSwitch'
import ViewSwitch from './common/ViewSwitch'
import CopyButton from './common/CopyButton'

interface SettingsBarProps {
  theme: ThemeType
  viewMode: ViewMode
  onThemeChange: (theme: ThemeType) => void
  onViewModeChange: (viewMode: ViewMode) => void
  onCopy: () => void
}

export default function SettingsBar({
  theme,
  viewMode,
  onThemeChange,
  onViewModeChange,
  onCopy,
}: SettingsBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 bg-gradient-to-b from-black/5 to-transparent">
      <div className="flex items-center gap-4">
        <ThemeSwitch theme={theme} onChange={onThemeChange} />
        <ViewSwitch viewMode={viewMode} onChange={onViewModeChange} />
        <CopyButton onCopy={onCopy} />
      </div>
    </div>
  )
}
