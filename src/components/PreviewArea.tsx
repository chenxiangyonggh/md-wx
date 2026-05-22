import type { ViewMode } from '../types'

interface PreviewAreaProps {
  viewMode: ViewMode
  children: React.ReactNode
}

export default function PreviewArea({ viewMode, children }: PreviewAreaProps) {
  if (viewMode === 'mobile') {
    return (
      <div className="relative mx-auto">
        <div className="w-[375px] bg-gray-900 rounded-[40px] p-[1px] shadow-2xl">
          <div className="bg-white rounded-[40px] overflow-hidden">
            <div className="flex justify-center pt-3">
              <div className="w-[180px] h-[28px] bg-gray-900 rounded-full" />
            </div>
            <div className="px-5 py-4 min-h-[667px]">
              <div className="bg-gray-50 rounded-2xl p-6 shadow-inner">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[677px] mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        {children}
      </div>
    </div>
  )
}
