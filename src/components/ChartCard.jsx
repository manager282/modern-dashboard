export default function ChartCard({ title, children, subtitle }) {
  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold">{title}</h3>
        {subtitle && <p className="text-slate-400 text-sm mt-1">{subtitle}</p>}
      </div>
      <div className="w-full h-full">
        {children}
      </div>
    </div>
  )
}