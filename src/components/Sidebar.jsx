import { BarChart3, Settings, LogOut, Home, TrendingUp, Users, FileText } from 'lucide-react'

export default function Sidebar({ isOpen, onToggle }) {
  return (
    <aside className={`${isOpen ? 'w-64' : 'w-20'} bg-slate-800 border-r border-slate-700 transition-all duration-300 flex flex-col`}>
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-slate-700">
        <BarChart3 size={32} className="text-cyan-500" />
        {isOpen && <span className="ml-3 font-bold text-lg">Dashboard</span>}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-8 space-y-4">
        <NavItem icon={Home} label="Overview" isOpen={isOpen} />
        <NavItem icon={TrendingUp} label="Analytics" isOpen={isOpen} />
        <NavItem icon={Users} label="Users" isOpen={isOpen} />
        <NavItem icon={FileText} label="Reports" isOpen={isOpen} />
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-700 p-4 space-y-3">
        <NavItem icon={Settings} label="Settings" isOpen={isOpen} />
        <NavItem icon={LogOut} label="Logout" isOpen={isOpen} />
      </div>
    </aside>
  )
}

function NavItem({ icon: Icon, label, isOpen }) {
  return (
    <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors group">
      <Icon size={20} className="text-cyan-400 group-hover:text-cyan-300" />
      {isOpen && <span className="text-sm font-medium">{label}</span>}
    </button>
  )
}