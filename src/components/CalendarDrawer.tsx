import { useState } from "react";

interface CalendarDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CalendarDrawer = ({ open, onOpenChange }: CalendarDrawerProps) => {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 10, 16));
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days: { day: number; isCurrentMonth: boolean; isToday: boolean }[] = [];

    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        isToday: i === currentDate.getDate(),
      });
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    return days;
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const days = getDaysInMonth(currentDate);

  const weeks: typeof days[] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => onOpenChange(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-[450px] bg-slate-900 border-l border-slate-700 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-row items-center justify-between px-4 py-3 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenChange(false)}
              className="text-white hover:bg-slate-800 p-2 rounded"
            >
              ←
            </button>
            <h2 className="text-white text-lg font-semibold">Calendar</h2>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="text-white hover:bg-slate-800 p-2 rounded"
          >
            ✕
          </button>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-center gap-6 py-4">
          <button
            onClick={prevMonth}
            className="text-white hover:bg-slate-800 p-2 rounded"
          >
            ◀
          </button>
          <span className="text-white font-medium text-lg min-w-[180px] text-center">
            {formatMonth(currentDate)}
          </span>
          <button
            onClick={nextMonth}
            className="text-white hover:bg-slate-800 p-2 rounded"
          >
            ▶
          </button>
        </div>

        <div className="px-4 flex-1">
          {/* Days of Week Header */}
          <div className="grid grid-cols-7 border-b border-slate-700 pb-2 mb-2">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center text-xs text-slate-400 font-medium"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="contents">
                {week.map((day, dayIndex) => (
                  <button
                    key={`${weekIndex}-${dayIndex}`}
                    onClick={() => {
                      if (day.isCurrentMonth) {
                        setSelectedDate(day.day);
                      }
                    }}
                    className="aspect-square border-b border-r border-slate-800 p-1 flex items-start justify-start hover:bg-slate-800 transition-colors disabled:cursor-not-allowed"
                    disabled={!day.isCurrentMonth}
                  >
                    <span
                      className={`
                        w-7 h-7 flex items-center justify-center text-sm rounded-full
                        ${selectedDate === day.day && day.isCurrentMonth
                          ? "bg-blue-600 text-white font-medium"
                          : day.isToday
                            ? "bg-indigo-500 text-white font-medium"
                            : day.isCurrentMonth
                              ? "text-white"
                              : "text-slate-500"
                        }
                      `}
                    >
                      {day.day}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarDrawer;
