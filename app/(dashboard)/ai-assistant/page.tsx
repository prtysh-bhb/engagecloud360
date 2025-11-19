import { Bot, Send, Sparkles, TrendingUp, MessageSquare, Clock, Zap } from 'lucide-react'

export default function AIAssistantPage() {
  const suggestions = [
    { icon: MessageSquare, title: 'Draft response to John Smith', description: 'About pricing inquiry' },
    { icon: TrendingUp, title: 'Optimize ad campaign budget', description: 'Increase ROI by 15%' },
    { icon: Clock, title: 'Schedule follow-up emails', description: 'For 12 pending leads' },
    { icon: Sparkles, title: 'Generate social media post', description: 'About new product launch' },
  ]

  const insights = [
    {
      title: 'Response Time Opportunity',
      description: 'Your average response time increased by 18% this week. Consider using templates for common queries.',
      priority: 'high',
      action: 'View Templates'
    },
    {
      title: 'High-Value Lead Detected',
      description: 'Contact "Enterprise Corp" has visited your pricing page 5 times. Consider reaching out.',
      priority: 'high',
      action: 'Contact Now'
    },
    {
      title: 'Campaign Performance',
      description: 'Your Facebook ads are performing 23% better than industry average. Consider increasing budget.',
      priority: 'medium',
      action: 'Adjust Budget'
    },
  ]

  const chatHistory = [
    { sender: 'You', text: 'Analyze my customer engagement metrics for this week', time: '2 min ago' },
    { sender: 'AI', text: 'Based on your data, customer engagement increased by 12% this week. Your inbox response rate improved to 94%, and your average response time decreased to 4.2 minutes. Would you like me to break down the metrics by channel?', time: '2 min ago' },
    { sender: 'You', text: 'Yes, show me the breakdown', time: '1 min ago' },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Assistant</h1>
          <p className="text-slate-600 mt-1">Your intelligent helper for automation and insights</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-[600px]">
          <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-primary-600 to-blue-600 rounded-t-xl">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">EngageBot</h2>
                <p className="text-sm text-primary-100">Always here to help</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
            <div className="flex justify-center">
              <div className="bg-white px-4 py-2 rounded-full text-sm text-slate-600 shadow-sm">
                Today
              </div>
            </div>

            {chatHistory.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-md ${
                  msg.sender === 'You'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-slate-900 shadow-sm'
                } rounded-lg p-4`}>
                  {msg.sender !== 'You' && (
                    <div className="flex items-center space-x-2 mb-2">
                      <Bot size={16} className="text-primary-600" />
                      <span className="text-xs font-semibold text-primary-600">AI Assistant</span>
                    </div>
                  )}
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-2 ${msg.sender === 'You' ? 'text-primary-100' : 'text-slate-500'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 bg-white rounded-b-xl">
            <div className="flex items-end space-x-2">
              <div className="flex-1">
                <textarea
                  placeholder="Ask me anything about your business..."
                  rows={2}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                />
              </div>
              <button className="p-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Suggestions & Insights */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Suggested Actions</h3>
            <div className="space-y-3">
              {suggestions.map((suggestion, i) => (
                <button
                  key={i}
                  className="w-full text-left p-3 border border-slate-200 rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-all"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <suggestion.icon size={16} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900 text-sm">{suggestion.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{suggestion.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">AI Insights</h3>
            <div className="space-y-3">
              {insights.map((insight, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg border-l-4 ${
                    insight.priority === 'high'
                      ? 'bg-red-50 border-red-500'
                      : 'bg-yellow-50 border-yellow-500'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-slate-900 text-sm">{insight.title}</h4>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      insight.priority === 'high'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {insight.priority}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-3">{insight.description}</p>
                  <button className="text-xs font-medium text-primary-600 hover:text-primary-700">
                    {insight.action} →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-primary-600 to-blue-600 rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center space-x-2 mb-4">
              <Zap size={24} />
              <h3 className="text-lg font-semibold">AI Usage</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-primary-100">Tasks Automated</span>
                  <span className="font-bold">234</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: '78%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-primary-100">Time Saved</span>
                  <span className="font-bold">24.5 hrs</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
