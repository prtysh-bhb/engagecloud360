import { Plus, Calendar, Image, Send, Clock } from 'lucide-react'

export default function PostsPage() {
  const scheduledPosts = [
    {
      id: 1,
      content: 'Excited to announce our new product launch! 🚀 Check it out at our website.',
      platforms: ['Facebook', 'LinkedIn', 'X'],
      scheduledFor: 'Dec 20, 2024 - 10:00 AM',
      status: 'scheduled',
      hasImage: true
    },
    {
      id: 2,
      content: 'Join us for our webinar on customer engagement strategies. Link in bio!',
      platforms: ['Instagram', 'Facebook'],
      scheduledFor: 'Dec 21, 2024 - 2:00 PM',
      status: 'scheduled',
      hasImage: true
    },
    {
      id: 3,
      content: 'Happy Monday! Here are 5 tips to boost your productivity this week...',
      platforms: ['LinkedIn', 'X', 'Facebook'],
      scheduledFor: 'Dec 23, 2024 - 9:00 AM',
      status: 'draft',
      hasImage: false
    },
  ]

  const recentPosts = [
    { platform: 'Facebook', content: 'Check out our latest blog post...', posted: '2 hours ago', likes: 234, comments: 45, shares: 12 },
    { platform: 'Instagram', content: 'Behind the scenes at our office...', posted: '5 hours ago', likes: 567, comments: 89, shares: 23 },
    { platform: 'LinkedIn', content: 'We\'re hiring! Join our team...', posted: '1 day ago', likes: 156, comments: 34, shares: 67 },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Social Media Posts</h1>
          <p className="text-slate-600 mt-1">Schedule and manage your social media content</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Plus size={20} />
          <span>Create Post</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <p className="text-sm text-slate-600">Total Posts</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">248</p>
          <p className="text-sm text-green-600 mt-2">+12 this week</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <p className="text-sm text-slate-600">Scheduled</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">24</p>
          <p className="text-sm text-slate-600 mt-2">Next 7 days</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <p className="text-sm text-slate-600">Avg. Engagement</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">4.8%</p>
          <p className="text-sm text-green-600 mt-2">+0.6% vs last month</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <p className="text-sm text-slate-600">Best Platform</p>
          <p className="text-lg font-semibold text-slate-900 mt-2">Instagram</p>
          <p className="text-sm text-slate-600 mt-2">6.2% avg engagement</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Scheduled Posts */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Scheduled Posts</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {scheduledPosts.map((post) => (
              <div key={post.id} className="p-6">
                <div className="flex items-start space-x-4">
                  {post.hasImage && (
                    <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image size={24} className="text-slate-400" />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-slate-900 mb-3">{post.content}</p>
                    <div className="flex items-center space-x-2 mb-2">
                      {post.platforms.map((platform, i) => (
                        <span key={i} className="px-2 py-1 bg-coral-100 text-coral-700 rounded text-xs font-medium">
                          {platform}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <Clock size={14} />
                      <span>{post.scheduledFor}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        post.status === 'scheduled'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {post.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Posts Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Recent Posts</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {recentPosts.map((post, i) => (
              <div key={i} className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-coral-100 text-coral-700 rounded text-sm font-medium">
                    {post.platform}
                  </span>
                  <span className="text-sm text-slate-500">{post.posted}</span>
                </div>
                <p className="text-slate-900 mb-4">{post.content}</p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-slate-600">Likes</p>
                    <p className="text-xl font-bold text-slate-900">{post.likes}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Comments</p>
                    <p className="text-xl font-bold text-slate-900">{post.comments}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Shares</p>
                    <p className="text-xl font-bold text-slate-900">{post.shares}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Calendar */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Content Calendar</h2>
          <button className="flex items-center space-x-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
            <Calendar size={18} />
            <span>View Full Calendar</span>
          </button>
        </div>
        <div className="text-center py-12 text-slate-500">
          <Calendar size={48} className="mx-auto mb-4 text-slate-300" />
          <p>Click "View Full Calendar" to see your content schedule</p>
        </div>
      </div>
    </div>
  )
}
