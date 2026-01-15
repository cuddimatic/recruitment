import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const BAR_COLORS = {
  blue: "#3b82f6",
  green: "#22c55e",
  red: "#ef4444",
  darkGreen: "#14B8A6",
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
  { value: "₦50,000,000.00", label: "MRR", change: "+2.5%", colorKey: "green" },
  {
    value: "₦200,000,000.00",
    label: "Commission Revenue",
    change: "+0.5%",
    colorKey: "darkGreen",
  },
  { value: "₦100,000,000.00", label: "GMV", change: "-0.5%", colorKey: "red" },
];

const SalesOverview = () => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <div className="p-4 md:p-6">
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
              Sales Overview
            </h2>
            <p className="text-xs text-slate-600 md:text-sm">
              Showing overview Jan 2022 - Sep 2022
            </p>
          </div>

          <button className="self-start rounded-full border border-slate-300 px-4 py-2 text-xs text-slate-900 transition-colors hover:bg-slate-50 md:px-6 md:text-sm">
            View Transactions
          </button>
        </div>

        <div className="mb-6 flex flex-wrap justify-end gap-2">
          {["1 Week", "1 Month", "1 Year"].map((label, i) => (
            <button
              key={label}
              className={`rounded px-3 py-1 text-xs md:text-sm ${
                i === 2
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="h-[220px] w-full md:h-[250px] lg:flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barGap={2}>
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 10 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748b", fontSize: 10 }}
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

          <div className="grid w-full grid-cols-2 gap-3 md:gap-4 lg:max-w-[450px]">
            {stats.map((stat, index) => {
              const color =
                BAR_COLORS[stat.colorKey as keyof typeof BAR_COLORS];

              return (
                <div
                  key={index}
                  className="rounded-lg border border-slate-200 p-3 md:p-4"
                >
                  <p
                    className="truncate text-sm font-bold md:text-lg"
                    style={{ color }}
                  >
                    {stat.value}
                  </p>

                  <div className="mt-1 flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
                    <span className="text-xs text-slate-600 md:text-sm">
                      {stat.label}
                    </span>

                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color }}
                    >
                      <span
                        className="h-2 w-2 rounded-full"
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
