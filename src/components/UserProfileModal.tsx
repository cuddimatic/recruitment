interface UserProfileDropdownProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const UserProfileDropdown = ({ open, onOpenChange }: UserProfileDropdownProps) => {
  const menuItems = [
    { icon: "👥", label: "Teams" },
    { icon: "🏗️", label: "Snagging" },
    { icon: "💬", label: "Feedback" },
    { icon: "📍", label: "Geo-Bucket" },
    { icon: "🔐", label: "Change password" },
  ];

  if (!open) return null;

  return (
    <>
      {/* Overlay to close dropdown */}
      <div
        className="fixed inset-0 z-40"
        onClick={() => onOpenChange(false)}
      />
      
      <div className="absolute top-12 right-0 w-64 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center text-white text-lg font-semibold">
              D
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Dylan Frank</h3>
              <p className="text-sm text-slate-600">dylan96@mail.com</p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full px-6 py-3 flex items-center gap-4 text-left hover:bg-slate-50 transition-colors"
              onClick={() => onOpenChange(false)}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-slate-900 font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        <button 
          className="w-full px-6 py-3 flex items-center gap-4 text-left hover:bg-red-50 transition-colors border-t border-slate-200"
          onClick={() => onOpenChange(false)}
        >
          <span className="text-lg">🚪</span>
          <span className="text-red-600 font-medium text-sm">Logout</span>
        </button>
      </div>
    </>
  );
};

export default UserProfileDropdown;
