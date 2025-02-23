import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RecentSales() {
  // En una implementación real, estos datos vendrían de la base de datos
  const recentSales = [
    { id: 1, product: "Pollo Frito", amount: 25.99, date: "2023-05-01" },
    { id: 2, product: "Papas Fritas", amount: 5.99, date: "2023-05-01" },
    { id: 3, product: "Refresco", amount: 2.5, date: "2023-05-01" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ventas Recientes</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {recentSales.map((sale) => (
            <li key={sale.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{sale.product}</p>
                <p className="text-sm text-gray-500">{sale.date}</p>
              </div>
              <span className="font-bold">${sale.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

