import { Users, Globe, TrendingUp, Clock, MapPin, Monitor, Activity } from 'lucide-react'

export default function VisitorsPage() {
  const recentVisitors = [
    {
      id: 1,
      location: 'San Francisco, CA',
      country: 'United States',
      device: 'Desktop',
      browser: 'Chrome',
      pages: 5,
      duration: '4:23',
      score: 85,
      status: 'Hot Lead'
    },
    {
      id: 2,
      location: 'London, UK',
      country: 'United Kingdom',
      device: 'Mobile',
      browser: 'Safari',
      pages: 3,
      duration: '2:15',
      score: 65,
      status: 'Warm Lead'
    },
    {
      id: 3,
      location: 'Toronto, Canada',
      country: 'Canada',
      device: 'Desktop',
      browser: 'Firefox',
      pages: 8,
      duration: '6:45',
      score: 92,
      status: 'Hot Lead'
    },
  ]

  const topPages = [
    { url: '/pricing', views: 1234, avgTime: '3:24' },
    { url: '/features', views: 987, avgTime: '2:45' },
    { url: '/about', views: 765, avgTime: '1:52' },
    { url: '/contact', views: 543, avgTime: '1:23' },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Visitor Intelligence</h1>
          <p className="text-slate-600 mt-1">Track and analyze website visitor behavior</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Total Visitors</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">12,456</p>
              <p className="text-sm text-green-600 mt-2">+15.3% vs last week</p>
            </div>
            <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center">
              <Users size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Avg. Session</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">3:42</p>
              <p className="text-sm text-green-600 mt-2">+8% improvement</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
              <Clock size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Conversion Rate</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">4.2%</p>
              <p className="text-sm text-green-600 mt-2">+0.8% improvement</p>
            </div>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Bounce Rate</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">32.1%</p>
              <p className="text-sm text-green-600 mt-2">-4.2% improvement</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
              <Activity size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Active Visitors */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Active Now</h2>
          <div className="flex items-center justify-center py-8">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br bg-brand-500 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">24</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <p className="text-slate-600 mt-4">Visitors online right now</p>
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Top Pages</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {topPages.map((page, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50">
                <div className="flex items-center space-x-4 flex-1">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Globe size={20} className="text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{page.url}</p>
                    <p className="text-sm text-slate-500">Avg. time: {page.avgTime}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-900">{page.views}</p>
                  <p className="text-sm text-slate-500">views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Visitors */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">Recent Visitors</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left p-4 text-sm font-semibold text-slate-700">Location</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-700">Device</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-700">Browser</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">Pages</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">Duration</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">Lead Score</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentVisitors.map((visitor) => (
                <tr key={visitor.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-slate-400" />
                      <div>
                        <p className="font-medium text-slate-900">{visitor.location}</p>
                        <p className="text-sm text-slate-500">{visitor.country}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="flex items-center space-x-2">
                      <Monitor size={16} className="text-slate-400" />
                      <span className="text-slate-900">{visitor.device}</span>
                    </span>
                  </td>
                  <td className="p-4 text-slate-900">{visitor.browser}</td>
                  <td className="p-4 text-right text-slate-900">{visitor.pages}</td>
                  <td className="p-4 text-right text-slate-900">{visitor.duration}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end">
                      <span className="text-lg font-bold text-slate-900">{visitor.score}</span>
                      <div className="ml-2 w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-brand-500"
                          style={{ width: `${visitor.score}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      visitor.status === 'Hot Lead'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {visitor.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
