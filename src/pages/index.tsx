import DashboardHeader from "@/components/DashboardHeader";
import NavigationTabs from "@/components/NavigationTabs";
import SalesOverview from "@/components/SalesOverview";
import OverviewCards from "@/components/OverviewCards";
import PropertyListings from "@/components/PropertyListings";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <NavigationTabs />

      <main className="px-4 py-6 md:p-6">
        <h1 className="mb-6 text-xl font-semibold text-foreground md:text-2xl">
          Welcome, Ahmed
        </h1>

        <section className="mb-6 flex flex-col gap-6 lg:flex-row">
          <div className="w-full lg:flex-1">
            <SalesOverview />
          </div>

          <div className="w-full lg:max-w-[500px]">
            <OverviewCards />
          </div>
        </section>

        <section>
          <PropertyListings />
        </section>
      </main>
    </div>
  );
};

export default Index;
