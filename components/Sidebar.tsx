'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Inbox,
  FolderOpen,
  Image,
  FileText,
  Megaphone,
  Calendar,
  Phone,
  Users,
  Bot,
  BarChart3,
  Settings,
  DollarSign,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Inbox', href: '/inbox', icon: Inbox },
  { name: 'Library', href: '/library', icon: FolderOpen },
  { name: 'Media', href: '/media', icon: Image },
  { name: 'Templates', href: '/templates', icon: FileText },
  { name: 'Ads', href: '/ads', icon: Megaphone },
  { name: 'Social Posts', href: '/posts', icon: Calendar },
  { name: 'Cloud Phone', href: '/phone', icon: Phone },
  { name: 'Visitor Intel', href: '/visitors', icon: Users },
  { name: 'AI Assistant', href: '/ai-assistant', icon: Bot },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-primary-600 text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-r border-slate-800/50
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col
        `}
      >
        <div className="p-6 border-b border-slate-800/50">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-11 h-11 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
              <span className="text-xl font-bold">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">EngageCloud</h1>
              <p className="text-xs text-accent-400 font-medium">360°</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center space-x-3 px-4 py-3 rounded-xl
                  transition-all duration-200
                  ${isActive
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/30'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                  }
                `}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-800/50">
          <Link
            href="/pricing"
            className="flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 hover:from-accent-600 hover:to-accent-800 text-white font-semibold shadow-lg shadow-accent-500/30 transition-all hover:shadow-xl hover:shadow-accent-500/40"
          >
            <DollarSign size={18} />
            <span>Upgrade to Pro</span>
          </Link>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
