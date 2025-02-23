"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function VentasPage() {
  interface Venta {
    id: number;
    producto: string;
    cantidad: number;
    precio: number;
    fecha: string;
  }

  const [ventas, setVentas] = useState<Venta[]>([])
  const { register, handleSubmit, reset } = useForm<Omit<Venta, 'id' | 'fecha'>>()

  const onSubmit = (data: Omit<Venta, 'id' | 'fecha'>) => {
    const nuevaVenta = {
      id: Date.now(),
      ...data,
      fecha: new Date().toISOString().split("T")[0],
    }
    setVentas([...ventas, nuevaVenta])
    reset()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Registro de Ventas</h1>
      <Card>
        <CardHeader>
          <CardTitle>Nueva Venta</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input {...register("producto")} placeholder="Producto" required />
            <Input {...register("cantidad")} type="number" placeholder="Cantidad" required />
            <Input {...register("precio")} type="number" step="0.01" placeholder="Precio" required />
            <Button type="submit">Registrar Venta</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Ventas Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {ventas.map((venta) => (
              <li key={venta.id} className="flex justify-between items-center">
                <span>
                  {venta.producto} (x{venta.cantidad})
                </span>
                <span>${(venta.cantidad * venta.precio).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

