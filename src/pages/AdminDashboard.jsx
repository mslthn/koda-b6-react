import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import { BsPersonCheck } from "react-icons/bs";
import { CgGlassAlt } from "react-icons/cg";
import { FiTruck } from "react-icons/fi";

const salesData = [
  { date: "16 Jan", value: 120000 },
  { date: "17 Jan", value: 180000 },
  { date: "18 Jan", value: 150000 },
  { date: "19 Jan", value: 200000 },
  { date: "20 Jan", value: 170000 },
  { date: "21 Jan", value: 230000 },
  { date: "22 Jan", value: 280000 },
  { date: "23 Jan", value: 420000 },
];

const topProducts = [
  { rank: 1, name: "Caramel Macchiato", sold: "300 Cup", revenue: "Rp69.000.000" },
  { rank: 2, name: "Hazelnut Latte", sold: "200 Cup", revenue: "Rp58.000.000" },
  { rank: 3, name: "Kopi Susu", sold: "100 Cup", revenue: "Rp47.000.000" },
  { rank: 4, name: "Espresso Supreme", sold: "90 Cup", revenue: "Rp44.000.000" },
  { rank: 5, name: "Caramel Velvet Latte", sold: "80 Cup", revenue: "Rp41.000.000" },
  { rank: 6, name: "Hazelnut Dream Brew", sold: "70 Cup", revenue: "Rp34.000.000" },
  { rank: 7, name: "Vanilla Silk Mocha", sold: "60 Cup", revenue: "Rp33.000.000" },
  { rank: 8, name: "Dark Roast Delight", sold: "50 Cup", revenue: "Rp22.000.000" },
  { rank: 9, name: "Ethiopian Yirgacheffe Euphoria", sold: "40 Cup", revenue: "Rp21.000.000" },
  { rank: 10, name: "Indonesian Sumatra Reserve", sold: "30 Cup", revenue: "Rp11.000.000" },
];

function StatCard({ title, value, change, positive, background, icon }) {
  return (
    <div className={`rounded-2xl p-5 flex items-center justify-between text-white ${background} shadow-lg`}>
      <div>
        <div className="flex flex-row items-center gap-2">
            <div className="text-3xl opacity-80 bg-white rounded-full p-2">{icon}</div>
            <p className="text-white/80 text-md font-medium mb-1">{title}</p>
        </div>
        <div className="flex flex-row gap-3">
            <p className="text-3xl font-bold tracking-tight">{value}</p>
            <p className="text-white/80 text-xs mt-1">
                {positive ? "▲" : "▼"} {change}
            </p>
        </div>
      </div>
    </div>
  );
}

function SalesChart() {
  const formatY = (val) => {
    if (val >= 1000000) return `${val / 1000000}00k`;
    if (val >= 1000) return `${val / 1000}k`;
    return val;
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h2 className="text-sm font-semibold text-gray-800">Total Penjualan</h2>
          <p className="text-xs text-gray-400">1000 hasil | 16 – 23 January 2023</p>
        </div>
        <button className="flex items-center gap-1 text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
          📅 16 – 23 January 2023 ▾
        </button>
      </div>

      <div className="h-48 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={salesData} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={formatY}
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              formatter={(val) => [`Rp${val.toLocaleString("id-ID")}`, "Penjualan"]}
              contentStyle={{
                background: "#1f2937",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "12px",
              }}
              cursor={{ stroke: "#22c55e", strokeWidth: 1, strokeDasharray: "4 4" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={2.5}
              fill="url(#salesGradient)"
              dot={false}
              activeDot={{ r: 4, fill: "#22c55e", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function ProductTable() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mt-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-800">Produk Terlaris</h2>
        <button className="flex items-center gap-1 text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
          📅 16 – 23 January 2023 ▾
        </button>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left text-xs text-gray-400 font-medium pb-3 w-8">No</th>
            <th className="text-left text-xs text-gray-400 font-medium pb-3">Nama Produk</th>
            <th className="text-left text-xs text-gray-400 font-medium pb-3">Terjual</th>
            <th className="text-left text-xs text-gray-400 font-medium pb-3">Keuntungan</th>
          </tr>
        </thead>
        <tbody>
          {topProducts.map((p) => (
            <tr
              key={p.rank}
              className="border-b border-gray-50 hover:bg-amber-50/40 transition-colors"
            >
              <td className="py-3 text-xs text-gray-400">{p.rank}</td>
              <td className="py-3 text-xs text-gray-700">{p.name}</td>
              <td className="py-3 text-xs text-gray-500">{p.sold}</td>
              <td className="py-3 text-xs font-semibold text-green-500">{p.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// MAIN DASHBOARD PAGE
function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <AdminNavbar />
      <AdminSidebar active={activeMenu} setActive={setActiveMenu} />

      {/* Main Content */}
      <main className="ml-60 pt-25 p-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          <StatCard
            title="Order On Progress"
            value="200"
            change="+10.5%"
            positive={true}
            background="bg-[#6FC276]"
            icon= {<CgGlassAlt color='orange'/>}
          />
          <StatCard
            title="Order Shipping"
            value="100"
            change="+5.8%"
            positive={true}
            background="bg-[#6C69D4]"
            icon= {<FiTruck color='orange'/>}
          />
          <StatCard
            title="Order Queue"
            value="50"
            change="+3.1%"
            positive={true}
            background="bg-[#C56FBC]"
            icon= {<BsPersonCheck color='orange'/>}
          />
        </div>

        {/* Chart */}
        <SalesChart />

        {/* Table */}
        <ProductTable />
      </main>
    </div>
  );
}

export default AdminDashboard