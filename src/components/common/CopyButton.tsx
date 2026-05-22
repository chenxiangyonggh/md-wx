import { useState } from 'react'

interface CopyButtonProps {
  onCopy: () => void
}

export default function CopyButton({ onCopy }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleClick = () => {
    onCopy()
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-200"
    >
      <span className="text-xl">{isCopied ? '✅' : '📋'}</span>
      <span className="text-sm font-medium text-gray-700">
        {isCopied ? '已复制' : '复制'}
      </span>
    </button>
  )
}
