import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function LowStockAlert() {
  // En una implementación real, estos datos vendrían de la base de datos
  const lowStockItems = [
    { id: 1, name: "Harina", quantity: 5 },
    { id: 2, name: "Pollo", quantity: 10 },
    { id: 3, name: "Aceite", quantity: 2 },
    { id: 4, name: "Sal", quantity: 1 },
    { id: 5, name: "Azúcar", quantity: 3 },
    { id: 6, name: "Pimienta", quantity: 4 },
    { id: 7, name: "Ajo", quantity: 2 },
    { id: 8, name: "Cebolla", quantity: 3 },
    { id: 9, name: "Pasta de Tomate", quantity: 1 },
    { id: 10, name: "Salsa de Soya", quantity: 2 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          Alerta de Stock Bajo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {lowStockItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <span>{item.name}</span>
              <span className="font-bold text-red-500">{item.quantity} unidades</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

