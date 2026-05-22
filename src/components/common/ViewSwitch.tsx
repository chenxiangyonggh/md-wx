import type { ViewMode } from '../../types'

interface ViewSwitchProps {
  viewMode: ViewMode
  onChange: (viewMode: ViewMode) => void
}

export default function ViewSwitch({ viewMode, onChange }: ViewSwitchProps) {
  return (
    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/80 backdrop-blur-lg shadow-md">
      <button
        onClick={() => onChange('mobile')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          viewMode === 'mobile'
            ? 'bg-blue-500 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <span className="text-lg">📱</span>
      </button>
      <button
        onClick={() => onChange('desktop')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
          viewMode === 'desktop'
            ? 'bg-blue-500 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <span className="text-lg">💻</span>
      </button>
    </div>
  )
}
