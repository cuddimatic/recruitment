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
    icon: <img src={home} alt="home" />,
  },
  {
    label: "Listings",
    active: false,
    icon: <img src={briefcase} alt="briefcase" />,
  },
  {
    label: "Users",
    active: false,
    icon: <img src={users} alt="users" />,
  },
  {
    label: "Request",
    active: false,
    icon: <img src={request} alt="request" />,
  },
  {
    label: "Applications",
    active: false,
    icon: <img src={scroll} alt="scroll" />,
  },
  {
    label: "Tasks",
    active: false,
    icon: <img src={task} alt="task" />,
  },
];

const NavigationTabs = () => {
  return (
    <nav className="bg-white border-b border-slate-200 px-6 ">
      <div className="flex items-center justify-between py-3">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-xl transition-colors
              ${
                tab.active
                  ? "bg-[#176D5826] text-[#176D58]"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }
            `}
          >
            {tab.icon}
            <span className="text-sm font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationTabs;
