export default function Table({ columns, data }) {
  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700 bg-slate-700/50">
            {columns.map((col) => (
              <th key={col} className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
              {columns.map((col) => (
                <td key={col} className="px-6 py-4 text-sm">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}