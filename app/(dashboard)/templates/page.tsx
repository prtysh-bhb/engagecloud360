import { Search, Plus, Copy, Edit, Trash2, MessageSquare } from 'lucide-react'

export default function TemplatesPage() {
  const templates = [
    {
      id: 1,
      name: 'Welcome Message',
      category: 'Onboarding',
      content: 'Hi {{name}}! Welcome to our platform. We\'re excited to have you here!',
      usage: 234,
      platform: 'All'
    },
    {
      id: 2,
      name: 'Order Confirmation',
      category: 'E-commerce',
      content: 'Thanks for your order {{orderId}}! Your items will be delivered by {{deliveryDate}}.',
      usage: 456,
      platform: 'Email'
    },
    {
      id: 3,
      name: 'Follow-up',
      category: 'Sales',
      content: 'Hi {{name}}, just following up on our conversation about {{topic}}. Do you have any questions?',
      usage: 189,
      platform: 'WhatsApp'
    },
    {
      id: 4,
      name: 'Support Response',
      category: 'Support',
      content: 'Hello! Thanks for reaching out. We\'re looking into {{issue}} and will update you soon.',
      usage: 567,
      platform: 'All'
    },
  ]

  const categories = ['All', 'Onboarding', 'Sales', 'Support', 'E-commerce', 'Marketing']

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Message Templates</h1>
          <p className="text-slate-600 mt-1">Create and manage reusable message templates</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Plus size={20} />
          <span>New Template</span>
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search templates..."
              className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-96"
            />
          </div>
          <div className="flex items-center space-x-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  i === 0 ? 'bg-primary-100 text-primary-600' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <p className="text-sm text-slate-600">Total Templates</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">48</p>
          <p className="text-sm text-green-600 mt-2">+4 this week</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <p className="text-sm text-slate-600">Total Uses</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">1,446</p>
          <p className="text-sm text-green-600 mt-2">+12% from last month</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <p className="text-sm text-slate-600">Most Used</p>
          <p className="text-lg font-semibold text-slate-900 mt-2">Support Response</p>
          <p className="text-sm text-slate-600 mt-2">567 uses</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <p className="text-sm text-slate-600">Avg. Response Time</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">2.4m</p>
          <p className="text-sm text-green-600 mt-2">-18% improvement</p>
        </div>
      </div>

      {/* Templates List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200">
        <div className="divide-y divide-slate-200">
          {templates.map((template) => (
            <div key={template.id} className="p-6 hover:bg-slate-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-slate-900">{template.name}</h3>
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                      {template.category}
                    </span>
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                      {template.platform}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-3">{template.content}</p>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span className="flex items-center space-x-1">
                      <MessageSquare size={16} />
                      <span>Used {template.usage} times</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                    <Copy size={18} />
                  </button>
                  <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                    <Edit size={18} />
                  </button>
                  <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
