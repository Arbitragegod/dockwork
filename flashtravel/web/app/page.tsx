import { Dashboard } from "./components/Dashboard";
import { sampleDeals, dashboardStats } from "@/lib/sample-deals";

export default function HomePage() {
  return <Dashboard deals={sampleDeals} stats={dashboardStats} />;
}
