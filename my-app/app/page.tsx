import DashboardSummary from "@/components/DashboardSummary"
import RecentSales from "@/components/RecentSales"
import LowStockAlert from "@/components/LowStockAlert"

export default function Home() {
  return (
    /**
     * Home component serves as the main dashboard page, displaying summary, recent sales, and low stock alerts.
     */
    <div>
      <header className="flex items-center justify-between">
        <h1 className="dashboard-title">Dashboard</h1>
      </header>
      <DashboardSummary />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentSales />
        <LowStockAlert />
      </div>
    </div>
  )
}
