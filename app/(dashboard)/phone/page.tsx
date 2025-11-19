import { Phone, PhoneCall, PhoneIncoming, PhoneOutgoing, Clock, User, Search, Play, Download } from 'lucide-react'

export default function PhonePage() {
  const callHistory = [
    { id: 1, contact: 'John Smith', type: 'outgoing', duration: '12:34', time: '10 minutes ago', status: 'completed', recording: true },
    { id: 2, contact: 'Sarah Johnson', type: 'incoming', duration: '8:45', time: '1 hour ago', status: 'completed', recording: true },
    { id: 3, contact: 'Mike Davis', type: 'outgoing', duration: '0:00', time: '2 hours ago', status: 'missed', recording: false },
    { id: 4, contact: 'Emma Wilson', type: 'incoming', duration: '15:23', time: '3 hours ago', status: 'completed', recording: true },
  ]

  const contacts = [
    { name: 'John Smith', company: 'TechCorp', phone: '+1 (555) 123-4567', lastCall: '10 min ago' },
    { name: 'Sarah Johnson', company: 'StartupXYZ', phone: '+1 (555) 234-5678', lastCall: '1 hour ago' },
    { name: 'Mike Davis', company: 'Enterprise Inc', phone: '+1 (555) 345-6789', lastCall: '2 hours ago' },
  ]

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Cloud Phone</h1>
          <p className="text-slate-600 mt-1">Make calls and manage your communication</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Total Calls</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">156</p>
              <p className="text-sm text-green-600 mt-2">+18 this week</p>
            </div>
            <div className="w-12 h-12 bg-coral-100 text-coral-600 rounded-lg flex items-center justify-center">
              <PhoneCall size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Avg. Duration</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">11:24</p>
              <p className="text-sm text-slate-600 mt-2">minutes</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
              <Clock size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Answer Rate</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">94%</p>
              <p className="text-sm text-green-600 mt-2">+2% improvement</p>
            </div>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
              <PhoneIncoming size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Recordings</p>
              <p className="text-3xl font-bold text-slate-900 mt-2">142</p>
              <p className="text-sm text-slate-600 mt-2">Available</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
              <Play size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Dialer */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Dial</h2>
          <div className="space-y-3 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search contacts..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            {contacts.map((contact, i) => (
              <div key={i} className="p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{contact.name}</p>
                      <p className="text-sm text-slate-500">{contact.company}</p>
                    </div>
                  </div>
                  <button className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                    <Phone size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="grid grid-cols-3 gap-2">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((num) => (
                <button
                  key={num}
                  className="p-4 bg-slate-100 hover:bg-slate-200 rounded-lg font-semibold text-slate-900"
                >
                  {num}
                </button>
              ))}
            </div>
            <button className="w-full mt-3 p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold flex items-center justify-center space-x-2">
              <Phone size={20} />
              <span>Call</span>
            </button>
          </div>
        </div>

        {/* Call History */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">Call History</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {callHistory.map((call) => (
              <div key={call.id} className="p-6 hover:bg-slate-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      call.type === 'incoming' ? 'bg-green-100 text-green-600' : 'bg-coral-100 text-coral-600'
                    }`}>
                      {call.type === 'incoming' ? <PhoneIncoming size={20} /> : <PhoneOutgoing size={20} />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-slate-900">{call.contact}</h3>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          call.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {call.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <span className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{call.duration}</span>
                        </span>
                        <span>{call.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {call.recording && (
                      <>
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                          <Play size={18} />
                        </button>
                        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
                          <Download size={18} />
                        </button>
                      </>
                    )}
                    <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg">
                      <Phone size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
