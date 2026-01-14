import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const BAR_COLORS = {
  blue: "#3b82f6",
  green: "#22c55e",
  red: "#ef4444",
  darkGreen: "#14B8A6"
};

const chartData = [
  { month: "Jan", green: 25, blue: 15, red: 8 },
  { month: "Feb", green: 30, blue: 20, red: 12 },
  { month: "Mar", green: 28, blue: 18, red: 10 },
  { month: "Apr", green: 35, blue: 25, red: 14 },
  { month: "May", green: 32, blue: 22, red: 11 },
  { month: "Jun", green: 38, blue: 28, red: 16 },
  { month: "Jul", green: 42, blue: 30, red: 18 },
  { month: "Aug", green: 48, blue: 35, red: 20 },
  { month: "Sep", green: 45, blue: 32, red: 17 },
];

const stats = [
  {
    value: "₦120,000,000.00",
    label: "Total Inflow",
    change: "+2.5%",
    colorKey: "blue",
  },
  {
    value: "₦50,000,000.00",
    label: "MRR",
    change: "+2.5%",
    colorKey: "green",
  },
  {
    value: "₦200,000,000.00",
    label: "Commission Revenue",
    change: "+0.5%",
    colorKey: "darkGreen",
  },
  {
    value: "₦100,000,000.00",
    label: "GMV",
    change: "-0.5%",
    colorKey: "red",
  },
];

const SalesOverview = () => {
  return (
    <div className="bg-white rounded-lg border border-slate-200">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Sales Overview
            </h2>
            <p className="text-sm text-slate-600">
              Showing overview Jan 2022 - Sep 2022
            </p>
          </div>
          <button className="px-6 py-2 border border-slate-300 text-slate-900 rounded-full hover:bg-slate-50 transition-colors">
            View Transactions
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-end gap-2 mb-6">
          <button className="px-3 py-1 text-sm text-slate-500 hover:bg-slate-100 rounded">
            1 Week
          </button>
          <button className="px-3 py-1 text-sm text-slate-500 hover:bg-slate-100 rounded">
            1 Month
          </button>
          <button className="px-3 py-1 text-sm bg-slate-100 text-slate-900 rounded">
            1 Year
          </button>
        </div>

        <div className="flex gap-6">
          {/* Chart */}
          <div className="flex-1 h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barGap={2}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 12 }}
                  tickFormatter={(value) => `${value}m`}
                />
                <Bar
                  dataKey="blue"
                  fill={BAR_COLORS.blue}
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  dataKey="green"
                  fill={BAR_COLORS.green}
                  radius={[2, 2, 0, 0]}
                />
                <Bar
                  dataKey="red"
                  fill={BAR_COLORS.red}
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 w-[450px]">
            {stats.map((stat, index) => {
              const color =
                BAR_COLORS[stat.colorKey as keyof typeof BAR_COLORS];

              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-lg p-4"
                >
                  <p className="text-lg font-bold" style={{ color }}>
                    {stat.value}
                  </p>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-slate-600">{stat.label}</span>

                    <span
                      className="text-xs flex items-center gap-1"
                      style={{ color }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      {stat.change}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
