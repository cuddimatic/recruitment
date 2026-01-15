import briefcase from "../assets/case.svg";
import home from "../assets/home.svg";
import users from "../assets/users.svg";
import request from "../assets/request.svg";
import scroll from "../assets/scroll.svg";
import task from "../assets/task.svg";

const tabs = [
  {
    label: "Dashboard",
    active: true,
    icon: <img src={home} alt="home" className="h-5 w-5" />,
  },
  {
    label: "Listings",
    active: false,
    icon: <img src={briefcase} alt="briefcase" className="h-5 w-5" />,
  },
  {
    label: "Users",
    active: false,
    icon: <img src={users} alt="users" className="h-5 w-5" />,
  },
  {
    label: "Request",
    active: false,
    icon: <img src={request} alt="request" className="h-5 w-5" />,
  },
  {
    label: "Applications",
    active: false,
    icon: <img src={scroll} alt="scroll" className="h-5 w-5" />,
  },
  {
    label: "Tasks",
    active: false,
    icon: <img src={task} alt="task" className="h-5 w-5" />,
  },
];

const NavigationTabs = () => {
  return (
    <nav className="border-b border-slate-200 bg-white">
      {/* Scroll container */}
      <div className="overflow-x-auto">
        {/* Tabs */}
        <div className="flex w-max gap-2 px-4 py-3 md:w-full md:justify-between md:px-6">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`
                flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors
                ${
                  tab.active
                    ? "bg-[#176D5826] text-[#176D58]"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }
              `}
            >
              {tab.icon}
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationTabs;
