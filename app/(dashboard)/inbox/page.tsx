import { Search, Filter, Star, Archive, Trash2, MoreVertical, Paperclip } from 'lucide-react'

export default function InboxPage() {
  const conversations = [
    { id: 1, name: 'John Smith', platform: 'WhatsApp', message: 'Hi, I have a question about your pricing...', time: '5m ago', unread: true, starred: false },
    { id: 2, name: 'Sarah Johnson', platform: 'Email', message: 'Thank you for the quick response!', time: '15m ago', unread: false, starred: true },
    { id: 3, name: 'Mike Davis', platform: 'Instagram', message: 'Can you help me with product details?', time: '1h ago', unread: true, starred: false },
    { id: 4, name: 'Emma Wilson', platform: 'Messenger', message: 'Looking forward to the demo tomorrow', time: '2h ago', unread: false, starred: false },
    { id: 5, name: 'David Lee', platform: 'WhatsApp', message: 'Just wanted to say thanks!', time: '3h ago', unread: false, starred: false },
  ]

  const messages = [
    { sender: 'John Smith', text: 'Hi, I have a question about your pricing plans for enterprise customers.', time: '5m ago', isUser: false },
    { sender: 'You', text: 'Hello! I\'d be happy to help with that. What specific information are you looking for?', time: '3m ago', isUser: true },
    { sender: 'John Smith', text: 'I need pricing for about 50 users. Do you offer volume discounts?', time: '2m ago', isUser: false },
  ]

  return (
    <div className="h-full flex">
      {/* Conversations List */}
      <div className="w-96 border-r border-slate-200 bg-white flex flex-col">
        <div className="p-4 border-b border-slate-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex items-center space-x-2 mt-3">
            <button className="px-3 py-1.5 bg-primary-100 text-primary-600 rounded-lg text-sm font-medium">
              All
            </button>
            <button className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 rounded-lg text-sm font-medium">
              Unread
            </button>
            <button className="px-3 py-1.5 text-slate-600 hover:bg-slate-100 rounded-lg text-sm font-medium">
              Starred
            </button>
            <button className="ml-auto p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className={`p-4 border-b border-slate-200 cursor-pointer hover:bg-slate-50 ${
                conv.id === 1 ? 'bg-primary-50' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className={`font-semibold ${conv.unread ? 'text-slate-900' : 'text-slate-600'}`}>
                      {conv.name}
                    </h3>
                    {conv.unread && <span className="w-2 h-2 bg-primary-500 rounded-full"></span>}
                  </div>
                  <p className={`text-sm mt-1 truncate ${conv.unread ? 'text-slate-700 font-medium' : 'text-slate-500'}`}>
                    {conv.message}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                      {conv.platform}
                    </span>
                    <span className="text-xs text-slate-500">{conv.time}</span>
                  </div>
                </div>
                <button className="p-1">
                  <Star size={16} className={conv.starred ? 'text-yellow-400 fill-yellow-400' : 'text-slate-400'} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Thread */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Thread Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">John Smith</h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-sm px-2 py-0.5 bg-green-100 text-green-700 rounded">WhatsApp</span>
              <span className="text-sm text-slate-500">Last active 2m ago</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Star size={20} />
            </button>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Archive size={20} />
            </button>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Trash2 size={20} />
            </button>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-md ${msg.isUser ? 'bg-primary-600 text-white' : 'bg-white text-slate-900'} rounded-lg p-4 shadow-sm`}>
                {!msg.isUser && <p className="text-xs font-semibold mb-1">{msg.sender}</p>}
                <p>{msg.text}</p>
                <p className={`text-xs mt-2 ${msg.isUser ? 'text-primary-100' : 'text-slate-500'}`}>{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-end space-x-2">
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Paperclip size={20} />
            </button>
            <div className="flex-1">
              <textarea
                placeholder="Type your message..."
                rows={2}
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              />
            </div>
            <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium">
              Send
            </button>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <button className="text-sm text-primary-600 hover:text-primary-700">Use Template</button>
            <span className="text-slate-300">•</span>
            <button className="text-sm text-primary-600 hover:text-primary-700">AI Suggestions</button>
          </div>
        </div>
      </div>
    </div>
  )
}
