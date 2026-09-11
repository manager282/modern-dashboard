import { Menu, Bell, User, Search } from 'lucide-react'

export default function Header({ onMenuClick }) {
  return (
    <header className="h-16 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <button onClick={onMenuClick} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
          <Menu size={20} />
        </button>
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
          <User size={20} />
        </button>
      </div>
    </header>
  )
}