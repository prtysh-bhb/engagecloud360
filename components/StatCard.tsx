import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: 'positive' | 'negative' | 'neutral'
  icon: LucideIcon
  iconColor?: string
}

export default function StatCard({
  title,
  value,
  change,
  changeType = 'neutral',
  icon: Icon,
  iconColor = 'bg-primary-100 text-primary-600'
}: StatCardProps) {
  const changeColors = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-slate-600'
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-lg hover:border-slate-200 transition-all group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">{title}</p>
          <p className="text-3xl font-bold text-slate-900 mb-1">{value}</p>
          {change && (
            <p className={`text-sm font-medium mt-2 flex items-center gap-1 ${changeColors[changeType]}`}>
              {change}
            </p>
          )}
        </div>
        <div className={`w-14 h-14 rounded-xl ${iconColor} flex items-center justify-center shadow-sm group-hover:shadow-md transition-all`}>
          <Icon size={26} />
        </div>
      </div>
    </div>
  )
}
