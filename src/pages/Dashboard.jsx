import { useState, useEffect } from 'react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Users, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'
import StatCard from '../components/StatCard'
import ChartCard from '../components/ChartCard'
import Table from '../components/Table'

const Dashboard = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Simulate API call
    setData({
      stats: [
        { title: 'Total Users', value: '12,543', change: 12.5, icon: Users, trend: 'up' },
        { title: 'Revenue', value: '$48.5K', change: 8.2, icon: TrendingUp, trend: 'up' },
        { title: 'Active Sessions', value: '2,847', change: 5.1, icon: CheckCircle, trend: 'up' },
        { title: 'Alerts', value: '23', change: 3.2, icon: AlertCircle, trend: 'down' }
      ],
      chartData: [
        { month: 'Jan', value: 4000, target: 2400 },
        { month: 'Feb', value: 3000, target: 1398 },
        { month: 'Mar', value: 2000, target: 9800 },
        { month: 'Apr', value: 2780, target: 3908 },
        { month: 'May', value: 1890, target: 4800 },
        { month: 'Jun', value: 2390, target: 3800 }
      ],
      pieData: [
        { name: 'Desktop', value: 45 },
        { name: 'Mobile', value: 35 },
        { name: 'Tablet', value: 20 }
      ],
      tableData: [
        { id: '#2145', user: 'John Doe', status: 'Active', revenue: '$1,250', date: '2024-01-15' },
        { id: '#2144', user: 'Jane Smith', status: 'Pending', revenue: '$890', date: '2024-01-14' },
        { id: '#2143', user: 'Mike Johnson', status: 'Active', revenue: '$2,100', date: '2024-01-13' },
        { id: '#2142', user: 'Sarah Wilson', status: 'Inactive', revenue: '$650', date: '2024-01-12' }
      ]
    })
  }, [])

  if (!data) return <div className="p-8">Loading...</div>

  const COLORS = ['#06b6d4', '#3b82f6', '#8b5cf6']

  return (
    <div className="p-8 space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="lg:col-span-2">
          <ChartCard title="Revenue & Target" subtitle="Monthly comparison">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={2} dot={{ fill: '#06b6d4', r: 4 }} />
                <Line type="monotone" dataKey="target" stroke="#3b82f6" strokeWidth={2} dot={{ fill: '#3b82f6', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Pie Chart */}
        <ChartCard title="Device Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Bar Chart */}
      <ChartCard title="Performance Metrics" subtitle="Last 6 months">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
            <Legend />
            <Bar dataKey="value" fill="#06b6d4" radius={[8, 8, 0, 0]} />
            <Bar dataKey="target" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Table */}
      <ChartCard title="Recent Transactions" subtitle="Last 4 orders">
        <Table
          columns={['id', 'user', 'status', 'revenue', 'date']}
          data={data.tableData}
        />
      </ChartCard>
    </div>
  )
}

export default Dashboard