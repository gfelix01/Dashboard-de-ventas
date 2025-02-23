"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function ReportesPage() {
  type Periodo = "diario" | "semanal" | "mensual";
  const [periodoSeleccionado, setPeriodoSeleccionado] = useState<Periodo>("diario")

  // Datos de ejemplo (en una implementación real, estos datos vendrían de  = useState("diario")

  const datosVentas: Record<Periodo, { labels: string[], datasets: { label: string, data: number[], backgroundColor: string }[] }> = {
    diario: {
      labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
      datasets: [
        {
          label: "Ventas Diarias",
          data: [1200, 1900, 1500, 1800, 2200, 2500, 2100],
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    },
    semanal: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      datasets: [
        {
          label: "Ventas Semanales",
          data: [8000, 9500, 10200, 11000],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
        },
      ],
    },
    mensual: {
      labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
      datasets: [
        {
          label: "Ventas Mensuales",
          data: [35000, 38000, 42000, 40000, 45000, 48000],
          backgroundColor: "rgba(255, 159, 64, 0.5)",
        },
      ],
    },
  }

  const opciones = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Reporte de Ventas ${periodoSeleccionado.charAt(0).toUpperCase() + periodoSeleccionado.slice(1)}`,
      },
    },
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Reportes de Ventas</h1>
      <Card>
        <CardHeader>
          <CardTitle>Seleccionar Período</CardTitle>
        </CardHeader>
        <CardContent>
          <Select onValueChange={(value: string) => setPeriodoSeleccionado(value as Periodo)} defaultValue={periodoSeleccionado}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Seleccionar período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="diario">Diario</SelectItem>
              <SelectItem value="semanal">Semanal</SelectItem>
              <SelectItem value="mensual">Mensual</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Gráfico de Ventas</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar options={opciones} data={datosVentas[periodoSeleccionado]} />
        </CardContent>
      </Card>
    </div>
  )
}

