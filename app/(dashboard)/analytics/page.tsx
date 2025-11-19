import { BarChart3, TrendingUp, Users, MessageSquare, DollarSign, Eye, Download } from 'lucide-react'

export default function AnalyticsPage() {
  const metrics = [
    { name: 'Messages', value: '2,543', change: '+12.5%', positive: true },
    { name: 'Conversations', value: '184', change: '+8.2%', positive: true },
    { name: 'Visitors', value: '12,456', change: '-3.1%', positive: false },
    { name: 'Revenue', value: '$24,231', change: '+15.3%', positive: true },
  ]

  const channelPerformance = [
    { channel: 'WhatsApp', messages: 1234, responseRate: 96, avgTime: '3.2m', color: 'bg-green-500' },
    { channel: 'Email', messages: 856, responseRate: 92, avgTime: '12.4m', color: 'bg-coral-500' },
    { channel: 'Instagram', messages: 654, responseRate: 88, avgTime: '5.8m', color: 'bg-purple-500' },
    { channel: 'Messenger', messages: 423, responseRate: 94, avgTime: '4.1m', color: 'bg-coral-600' },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Analytics Suite</h1>
          <p className="text-slate-600 mt-1">Comprehensive insights and reporting</p>
        </div>
        <div className="flex items-center space-x-2">
          <select className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            <Download size={20} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <p className="text-sm text-slate-600 mb-1">{metric.name}</p>
            <p className="text-3xl font-bold text-slate-900">{metric.value}</p>
            <p className={`text-sm mt-2 ${metric.positive ? 'text-green-600' : 'text-red-600'}`}>
              {metric.change} vs last period
            </p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Engagement Over Time */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900">Engagement Over Time</h2>
            <BarChart3 size={20} className="text-slate-400" />
          </div>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[65, 78, 82, 71, 85, 90, 88].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gradient-to-t from-primary-600 to-coral-500 rounded-t-lg hover:from-primary-700 hover:to-coral-600 transition-all cursor-pointer" style={{ height: `${height}%` }} />
                <span className="text-xs text-slate-500 mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900">Traffic Sources</h2>
            <Eye size={20} className="text-slate-400" />
          </div>
          <div className="space-y-4">
            {[
              { source: 'Direct', percentage: 42, color: 'bg-coral-500' },
              { source: 'Organic Search', percentage: 28, color: 'bg-green-500' },
              { source: 'Social Media', percentage: 18, color: 'bg-purple-500' },
              { source: 'Referral', percentage: 12, color: 'bg-orange-500' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-900">{item.source}</span>
                  <span className="text-sm font-bold text-slate-900">{item.percentage}%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full transition-all`} style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Channel Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">Channel Performance</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left p-4 text-sm font-semibold text-slate-700">Channel</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">Messages</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">Response Rate</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">Avg. Response Time</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">Performance</th>
              </tr>
            </thead>
            <tbody>
              {channelPerformance.map((channel, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${channel.color}`} />
                      <span className="font-medium text-slate-900">{channel.channel}</span>
                    </div>
                  </td>
                  <td className="p-4 text-right text-slate-900">{channel.messages.toLocaleString()}</td>
                  <td className="p-4 text-right text-slate-900">{channel.responseRate}%</td>
                  <td className="p-4 text-right text-slate-900">{channel.avgTime}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end">
                      <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full ${channel.color} rounded-full`} style={{ width: `${channel.responseRate}%` }} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top Performing Content */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Top Performing Content</h3>
          <div className="space-y-3">
            {[
              { title: 'Product Launch Post', engagement: '12.4K', type: 'Social' },
              { title: 'Email Campaign - Q4', engagement: '8.2K', type: 'Email' },
              { title: 'Instagram Story Series', engagement: '6.8K', type: 'Social' },
            ].map((item, i) => (
              <div key={i} className="p-3 border border-slate-200 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-medium text-slate-900 text-sm">{item.title}</p>
                  <span className="px-2 py-0.5 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                    {item.type}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp size={14} className="text-green-600" />
                  <span className="text-sm font-bold text-slate-900">{item.engagement}</span>
                  <span className="text-xs text-slate-500">engagements</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="bg-gradient-to-br from-primary-600 to-coral-600 rounded-xl shadow-sm p-6 text-white">
          <h3 className="text-lg font-semibold mb-4">Customer Satisfaction</h3>
          <div className="flex items-center justify-center py-6">
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">4.8</div>
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 fill-current text-yellow-300" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-primary-100">Based on 1,234 reviews</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Stats</h3>
          <div className="space-y-4">
            {[
              { icon: MessageSquare, label: 'Total Interactions', value: '45.2K' },
              { icon: Users, label: 'Active Users', value: '2,341' },
              { icon: DollarSign, label: 'Revenue', value: '$124K' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                  <stat.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                  <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
