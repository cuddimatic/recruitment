import { useState } from "react";
import BudgetModal from "./BudgetModal";
import CalendarDrawer from "./CalendarDrawer";
import UserProfileDropdown from "./UserProfileModal";
import budget from "../assets/budget.svg";
import logo from "../assets/logo.svg";
import calendar from "../assets/calendar.svg";
import search from "../assets/search.svg";
import wallet from "../assets/wallet.svg";
import cart from "../assets/cart.svg";

const DashboardHeader = () => {
  const [budgetModalOpen, setBudgetModalOpen] = useState(false);
  const [calendarDrawerOpen, setCalendarDrawerOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);

  return (
    <>
      <header className="h-16 bg-emerald-800 px-6 flex items-center justify-between relative">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex items-center gap-1 relative gap-4">
          <button
            className="w-10 h-10 text-white/80 hover:text-white hover:bg-white/10 rounded flex items-center justify-center transition-colors"
            onClick={() => setBudgetModalOpen(true)}
          >
            <img src={budget} alt="budget" />
          </button>

          <button
            className="w-10 h-10 text-white/80 hover:text-white hover:bg-white/10 rounded flex items-center justify-center transition-colors"
            onClick={() => setCalendarDrawerOpen(true)}
          >
            <img src={calendar} alt="calendar" />
          </button>

          <button
             disabled
             className="
               w-10 h-10
               rounded
               flex items-center justify-center
               transition-colors
               text-white/40
               bg-transparent
               cursor-not-allowed
               opacity-50
               disabled:hover:bg-transparent
               disabled:hover:text-white/40
             "
          >
            <img src={search} alt="search" />
          </button>

          <button
            disabled
            className="
              w-10 h-10
              rounded
              flex items-center justify-center
              transition-colors
              text-white/40
              bg-transparent
              cursor-not-allowed
              opacity-50
              disabled:hover:bg-transparent
              disabled:hover:text-white/40
            "
          >
            <img src={wallet} alt="wallet" />
          </button>

          <button
            disabled
            className="
              w-10 h-10
              rounded
              flex items-center justify-center
              transition-colors
              text-white/40
              bg-transparent
              cursor-not-allowed
              opacity-50
              disabled:hover:bg-transparent
              disabled:hover:text-white/40
            "
          >
            <img src={cart} alt="cart" />
          </button>

          <div className="relative ml-2">
            <button
              className="w-9 h-9 rounded-full bg-white hover:opacity-80 transition-opacity flex items-center justify-center text-white font-semibold text-sm"
              onClick={() => setUserProfileOpen(!userProfileOpen)}
            >
              <p className="text-sm text-slate-600">D</p>
            </button>

            <UserProfileDropdown
              open={userProfileOpen}
              onOpenChange={setUserProfileOpen}
            />
          </div>
        </div>
      </header>

      <BudgetModal open={budgetModalOpen} onOpenChange={setBudgetModalOpen} />
      <CalendarDrawer
        open={calendarDrawerOpen}
        onOpenChange={setCalendarDrawerOpen}
      />
    </>
  );
};

export default DashboardHeader;
