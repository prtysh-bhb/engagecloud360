import { Plus, TrendingUp, DollarSign, Eye, MousePointerClick, BarChart3, Play, Pause } from 'lucide-react'

export default function AdsPage() {
  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale 2024',
      platform: 'Facebook',
      status: 'active',
      budget: 5000,
      spent: 3420,
      impressions: 245000,
      clicks: 12400,
      conversions: 234,
      ctr: 5.06,
      cpc: 0.28
    },
    {
      id: 2,
      name: 'Product Launch - Google',
      platform: 'Google Ads',
      status: 'active',
      budget: 8000,
      spent: 6150,
      impressions: 189000,
      clicks: 8900,
      conversions: 178,
      ctr: 4.71,
      cpc: 0.69
    },
    {
      id: 3,
      name: 'Brand Awareness',
      platform: 'Instagram',
      status: 'paused',
      budget: 3000,
      spent: 2100,
      impressions: 156000,
      clicks: 5600,
      conversions: 89,
      ctr: 3.59,
      cpc: 0.38
    },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Ad Campaigns</h1>
          <p className="text-slate-600 mt-1">Manage your cross-platform advertising</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Plus size={20} />
          <span>New Campaign</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-slate-600 mb-1">Total Spend</p>
              <p className="text-3xl font-bold text-slate-900">$11,670</p>
              <p className="text-sm text-green-600 mt-2">+8.2% vs last month</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
              <DollarSign size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-slate-600 mb-1">Impressions</p>
              <p className="text-3xl font-bold text-slate-900">590K</p>
              <p className="text-sm text-green-600 mt-2">+12.5% vs last month</p>
            </div>
            <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center">
              <Eye size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-slate-600 mb-1">Total Clicks</p>
              <p className="text-3xl font-bold text-slate-900">26.9K</p>
              <p className="text-sm text-green-600 mt-2">+6.8% vs last month</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
              <MousePointerClick size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-slate-600 mb-1">Conversions</p>
              <p className="text-3xl font-bold text-slate-900">501</p>
              <p className="text-sm text-green-600 mt-2">+15.3% vs last month</p>
            </div>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Campaigns Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">Active Campaigns</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left p-4 text-sm font-semibold text-slate-700">Campaign</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-700">Platform</th>
                <th className="text-left p-4 text-sm font-semibold text-slate-700">Status</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">Budget</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">Spent</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">Impressions</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">Clicks</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">CTR</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">Conversions</th>
                <th className="text-right p-4 text-sm font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4">
                    <p className="font-semibold text-slate-900">{campaign.name}</p>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                      {campaign.platform}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-sm font-medium ${
                      campaign.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="p-4 text-right text-slate-900">${campaign.budget.toLocaleString()}</td>
                  <td className="p-4 text-right text-slate-900">${campaign.spent.toLocaleString()}</td>
                  <td className="p-4 text-right text-slate-900">{campaign.impressions.toLocaleString()}</td>
                  <td className="p-4 text-right text-slate-900">{campaign.clicks.toLocaleString()}</td>
                  <td className="p-4 text-right text-slate-900">{campaign.ctr}%</td>
                  <td className="p-4 text-right text-slate-900">{campaign.conversions}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                        {campaign.status === 'active' ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                      <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                        <BarChart3 size={16} />
                      </button>
                    </div>
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
