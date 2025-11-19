import StatCard from '@/components/StatCard'
import {
  Inbox,
  Users,
  TrendingUp,
  DollarSign,
  MessageSquare,
  Phone,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Messages"
          value="2,543"
          change="+12.5% from last week"
          changeType="positive"
          icon={MessageSquare}
          iconColor="bg-brand-100 text-brand-600"
        />
        <StatCard
          title="Active Conversations"
          value="184"
          change="+8.2% from last week"
          changeType="positive"
          icon={Inbox}
          iconColor="bg-green-100 text-green-600"
        />
        <StatCard
          title="Website Visitors"
          value="12,456"
          change="-3.1% from last week"
          changeType="negative"
          icon={Users}
          iconColor="bg-purple-100 text-purple-600"
        />
        <StatCard
          title="Ad Spend"
          value="$4,231"
          change="+5.4% from last week"
          changeType="positive"
          icon={DollarSign}
          iconColor="bg-orange-100 text-orange-600"
        />
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Messages */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Recent Messages</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {[
              { name: 'John Smith', message: 'Question about pricing plans...', time: '5m ago', platform: 'WhatsApp', unread: true },
              { name: 'Sarah Johnson', message: 'Thanks for the quick response!', time: '15m ago', platform: 'Email', unread: false },
              { name: 'Mike Davis', message: 'Can you help me with...', time: '1h ago', platform: 'Instagram', unread: true },
              { name: 'Emma Wilson', message: 'Looking forward to the demo', time: '2h ago', platform: 'Messenger', unread: false },
            ].map((msg, i) => (
              <div key={i} className="p-4 hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <p className="font-semibold text-slate-900">{msg.name}</p>
                      {msg.unread && (
                        <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mt-1 truncate">{msg.message}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-xs text-slate-500">{msg.platform}</span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs text-slate-500">{msg.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-slate-200">
            <button className="w-full text-primary-600 hover:text-primary-700 font-medium text-sm">
              View All Messages
            </button>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Performance Overview</h2>
          </div>
          <div className="p-6 space-y-4">
            {[
              { metric: 'Response Rate', value: '94%', change: '+2.3%', positive: true, icon: MessageSquare },
              { metric: 'Avg. Response Time', value: '4.2 min', change: '-12%', positive: true, icon: TrendingUp },
              { metric: 'Customer Satisfaction', value: '4.8/5', change: '+0.2', positive: true, icon: Users },
              { metric: 'Campaign ROI', value: '320%', change: '+15%', positive: true, icon: DollarSign },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <item.icon size={20} className="text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{item.metric}</p>
                    <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                  </div>
                </div>
                <div className={`flex items-center space-x-1 ${item.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {item.positive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  <span className="text-sm font-medium">{item.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Tasks */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900">Upcoming Tasks</h2>
        </div>
        <div className="divide-y divide-slate-200">
          {[
            { task: 'Review Q4 marketing campaign results', due: 'Today, 3:00 PM', priority: 'high' },
            { task: 'Schedule social media posts for next week', due: 'Tomorrow, 10:00 AM', priority: 'medium' },
            { task: 'Follow up with enterprise leads', due: 'Dec 20, 2:00 PM', priority: 'high' },
            { task: 'Update media library with new brand assets', due: 'Dec 22, 11:00 AM', priority: 'low' },
          ].map((task, i) => (
            <div key={i} className="p-4 flex items-center space-x-4">
              <input type="checkbox" className="w-5 h-5 text-primary-600 rounded" />
              <div className="flex-1">
                <p className="font-medium text-slate-900">{task.task}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Calendar size={14} className="text-slate-400" />
                  <span className="text-sm text-slate-600">{task.due}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                task.priority === 'high' ? 'bg-red-100 text-red-700' :
                task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-slate-100 text-slate-700'
              }`}>
                {task.priority}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
