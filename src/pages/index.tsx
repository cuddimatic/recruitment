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
      
      <main className="p-6">
        <h1 className="text-2xl font-semibold text-foreground mb-6">Welcome, Ahmed</h1>
        
        <div className="flex gap-6 mb-6">
          <div className="flex-1">
            <SalesOverview />
          </div>
          
          <div className="w-[500px]">
            <OverviewCards />
          </div>
        </div>
        
        <PropertyListings />
      </main>
    </div>
  );
};

export default Index;
