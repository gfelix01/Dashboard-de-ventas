import DashboardSummary from "@/components/DashboardSummary"
import RecentSales from "@/components/RecentSales"
import LowStockAlert from "@/components/LowStockAlert"

interface LogoProps {
  className?: string;
}



export default function Home() {
  return (
    <div className="space-y-6 p-6 bg-gray-100 min-h-screen">
      <header className="flex items-center justify-between">

        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </header>
      <DashboardSummary />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentSales />
        <LowStockAlert />
      </div>
    </div>
  )
}
