import arrowRight from "@/assets/arrowRight.svg";
import house from "@/assets/house.svg";
import profile from "@/assets/profile.svg";

const ListingsOverview = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <img src={house} alt="house" />
          <h3 className="font-semibold text-slate-900">
            Listings Overview
          </h3>
        </div>

        <button className="text-[#4545FE] text-sm font-medium flex items-center gap-1 hover:underline">
          View all
          <img src={arrowRight} alt="arrowRight" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 grid grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-slate-600">Total</p>
          <p className="text-2xl font-bold text-slate-900">1.8k</p>
        </div>
        <div>
          <p className="text-sm text-slate-600">Active</p>
          <p className="text-2xl font-bold text-slate-900">80</p>
        </div>
        <div>
          <p className="text-sm text-slate-600">Archived</p>
          <p className="text-2xl font-bold text-slate-900">1k</p>
        </div>
      </div>
    </div>
  );
};


const UsersOverview = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <img src={profile} alt="profile" />
          <h3 className="font-semibold text-slate-900">
            Users Overview
          </h3>
        </div>

        <button className="text-[#4545FE] text-sm font-medium flex items-center gap-1 hover:underline">
          View all
          <img src={arrowRight} alt="arrowRight" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 grid grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-slate-600">Total</p>
          <p className="text-2xl font-bold text-slate-900">20.7k</p>
        </div>
        <div>
          <p className="text-sm text-slate-600">Riders</p>
          <p className="text-2xl font-bold text-slate-900">8.5k</p>
        </div>
        <div>
          <p className="text-sm text-slate-600">Subscribers</p>
          <p className="text-2xl font-bold text-slate-900">7.5k</p>
        </div>
      </div>
    </div>
  );
};


const OverviewCards = () => {
  return (
    <div className="space-y-4">
      <ListingsOverview />
      <UsersOverview />
    </div>
  );
};

export default OverviewCards;
