import filter from "../assets/filter.svg";
import trend from "../assets/trend.svg";
import frame from "../assets/frame.svg";
import calculator from "../assets/calculator.svg";
import overlay from "../assets/overlay.png";

interface BudgetModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BudgetModal = ({ open, onOpenChange }: BudgetModalProps) => {
  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40 pointer-events-auto"
        onClick={() => onOpenChange(false)}
      />

      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div
          className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-slate-800 p-8 flex flex-col items-center justify-center relative">
            <div className="p-10" />
            <div className="absolute bottom-0">
              <img src={overlay} alt="overlay" />
            </div>
            <div className="z-40">
              <img src={calculator} alt="calculator" />
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex gap-4 items-center">
              <div className="flex-shrink-0 mt-1 text-lg">
                <img src={filter} alt="filter" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">
                  Set up annual budgets by account category
                </h3>
                <p className="text-sm text-slate-600">
                  Allocate funds across income and expense lines with full
                  visibility.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex-shrink-0 mt-1 text-lg">
                <img src={trend} alt="trend" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">
                  Track actuals vs budget in real time
                </h3>
                <p className="text-sm text-slate-600">
                  See how your community is performing against plan, month by
                  month.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex-shrink-0 mt-1 text-lg">
                <img src={frame} alt="frame" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">
                  Adjust figures and forecast with ease
                </h3>
                <p className="text-sm text-slate-600">
                  Edit amounts, apply percentage changes, or roll forward last
                  year's data—all in one place.
                </p>
              </div>
            </div>

            {/* Create Budget Button */}
            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 text-base font-medium rounded-3xl transition-colors">
              Create Budget
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetModal;
