import React from 'react'
import { Robot, CheckCircle } from 'lucide-react'

export default function ResultCard({ result }) {
  const isAI = result.verdict === 'AI Generated'
  const confidence = result.confidence

  const getCircleColor = () => {
    if (confidence >= 70) return 'text-red-500'
    if (confidence >= 40) return 'text-yellow-500'
    return 'text-green-500'
  }

  const getBgColor = () => {
    if (confidence >= 70) return 'from-red-500/20 to-red-500/5'
    if (confidence >= 40) return 'from-yellow-500/20 to-yellow-500/5'
    return 'from-green-500/20 to-green-500/5'
  }

  return (
    <div className={`animate-fadeIn bg-gradient-to-br ${getBgColor()} border border-slate-700 rounded-xl p-8 text-center`}>
      <div className="flex justify-center mb-6">
        {isAI ? (
          <Robot className={`w-16 h-16 ${getCircleColor()}`} />
        ) : (
          <CheckCircle className={`w-16 h-16 ${getCircleColor()}`} />
        )}
      </div>

      <h2 className="text-4xl font-bold mb-2 text-white">
        {isAI ? '🤖 AI Generated' : '✅ Human Written'}
      </h2>

      <div className="flex justify-center items-center gap-8 mt-8">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg className="transform -rotate-90 w-32 h-32">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#475569"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke={
                  confidence >= 70
                    ? '#ef4444'
                    : confidence >= 40
                    ? '#eab308'
                    : '#22c55e'
                }
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${(confidence / 100) * 351.86} 351.86`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className={`text-5xl font-black ${getCircleColor()}`}>
                {confidence.toFixed(1)}%
              </span>
            </div>
          </div>
          <p className="text-slate-400">Confidence</p>
        </div>
      </div>
    </div>
  )
}
