"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function InventarioPage() {
  const [inventario, setInventario] = useState([
    { id: 1, producto: "Pollo", cantidad: 50, precioUnitario: 5 },
    { id: 2, producto: "Harina", cantidad: 100, precioUnitario: 2 },
    { id: 3, producto: "Aceite", cantidad: 20, precioUnitario: 3 },
  ])
  const { register, handleSubmit, reset } = useForm<{ producto: string; cantidad: string; precioUnitario: string }>()

  const onSubmit = (data: { producto: string; cantidad: string; precioUnitario: string }) => {
    const nuevoProducto = {
      id: Date.now(),
      ...data,
      cantidad: Number.parseInt(data.cantidad),
      precioUnitario: Number.parseFloat(data.precioUnitario),
    }
    setInventario([...inventario, nuevoProducto])
    reset()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Control de Inventario</h1>
      <Card>
        <CardHeader>
          <CardTitle>Añadir Producto</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input {...register("producto")} placeholder="Producto" required />
            <Input {...register("cantidad")} type="number" placeholder="Cantidad" required />
            <Input {...register("precioUnitario")} type="number" step="0.01" placeholder="Precio Unitario" required />
            <Button type="submit">Añadir al Inventario</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Inventario Actual</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Producto</TableHead>
                <TableHead>Cantidad</TableHead>
                <TableHead>Precio Unitario</TableHead>
                <TableHead>Valor Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventario.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.producto}</TableCell>
                  <TableCell>{item.cantidad}</TableCell>
                  <TableCell>${item.precioUnitario.toFixed(2)}</TableCell>
                  <TableCell>${(item.cantidad * item.precioUnitario).toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

