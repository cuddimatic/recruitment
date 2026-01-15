import { useState, useRef } from "react";

interface CalendarDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface DayCell {
  day: number;
  isCurrentMonth: boolean;
  date: Date;
}

const DAYS = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

const CalendarDrawer = ({ open, onOpenChange }: CalendarDrawerProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

  const touchStartX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextMonth();
    if (diff < -50) prevMonth();

    touchStartX.current = null;
  };

  const formatMonth = (date: Date) =>
    date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

  const prevMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );

  const nextMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );

  const isSameDay = (a?: Date | null, b?: Date | null) =>
    a && b && a.getTime() === b.getTime();

  const isInRange = (date: Date) =>
    rangeStart &&
    rangeEnd &&
    date >= rangeStart &&
    date <= rangeEnd;

  const getDaysInMonth = (date: Date): DayCell[] => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startWeekday = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const days: DayCell[] = [];

    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startWeekday - 1; i >= 0; i--) {
      days.push({
        day: prevMonthLastDay - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthLastDay - i),
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        date: new Date(year, month, i),
      });
    }

    while (days.length < 42) {
      const nextDay = days.length - daysInMonth - startWeekday + 1;
      days.push({
        day: nextDay,
        isCurrentMonth: false,
        date: new Date(year, month + 1, nextDay),
      });
    }

    return days;
  };

  const days = getDaysInMonth(currentDate);

  const onSelectDate = (date: Date) => {
    if (!rangeStart || rangeEnd) {
      setRangeStart(date);
      setRangeEnd(null);
    } else if (date < rangeStart) {
      setRangeStart(date);
    } else {
      setRangeEnd(date);
    }
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => onOpenChange(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-[450px] bg-black border-l border-slate-800 z-50 transform transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <button onClick={() => onOpenChange(false)} className="text-white p-2">
              ←
            </button>
            <h2 className="text-white font-semibold text-lg">Calendar</h2>
          </div>
          <button onClick={() => onOpenChange(false)} className="text-white p-2">
            ✕
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 py-4">
          <button onClick={prevMonth} className="text-white p-2">◀</button>
          <span className="text-white font-medium text-lg min-w-[180px] text-center">
            {formatMonth(currentDate)}
          </span>
          <button onClick={nextMonth} className="text-white p-2">▶</button>
        </div>

        <div className="flex-1 px-4 flex flex-col">
          <div className="grid grid-cols-7 border-b border-slate-800 pb-2 mb-2">
            {DAYS.map((day) => (
              <div key={day} className="text-xs text-slate-400 text-center">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 grid-rows-6 flex-1">
            {days.map((day, index) => {
              const selected =
                isSameDay(day.date, rangeStart) ||
                isSameDay(day.date, rangeEnd);

              return (
                <button
                  key={index}
                  onClick={() => onSelectDate(day.date)}
                  className={`h-full border-b border-r border-slate-800 p-2 flex items-start justify-start transition hover:bg-slate-800
                    ${isInRange(day.date) ? "bg-blue-600/20" : ""}
                  `}
                >
                  <span
                    className={`w-7 h-7 flex items-center justify-center rounded-full text-sm
                      ${
                        selected
                          ? "bg-blue-600 text-white font-medium"
                          : day.isCurrentMonth
                          ? "text-white"
                          : "text-slate-500"
                      }
                    `}
                  >
                    {day.day}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarDrawer;
