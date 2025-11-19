'use client'

import { Bell, Search, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200/80 sticky top-0 z-20 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-300 bg-slate-50/50 hover:bg-white transition-all"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3 ml-6">
          <button className="relative p-2.5 text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white"></span>
          </button>

          <div className="flex items-center space-x-3 pl-4 border-l border-slate-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">John Doe</p>
              <p className="text-xs text-accent-600 font-medium">Premium</p>
            </div>
            <button className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-primary-500/30 transition-all">
              <User size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
