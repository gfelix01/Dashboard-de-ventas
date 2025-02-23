import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/Sidebar"
import Logo from "@/components/Logo"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sistema de Facturación & Control de Inventario",
  description: "Sistema para manejar ventas, gastos y stock en tiempo real para un pica pollo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="flex flex-col h-screen">
          <header className="bg-header-bg shadow p-4 flex items-center">
            <Logo />
            <h1 className="ml-4 text-xl font-bold">Sistema de Facturación & Control de Inventario</h1>
          </header>
          <div className="flex flex-1">
            <Sidebar className="sidebar" />
            <main className="flex-1 overflow-y-auto p-8">{children}</main>
          </div>
          <footer className="bg-footer-bg shadow p-4 text-center">
            © 2023 Sistema de Facturación & Control de Inventario
          </footer>
        </div>
      </body>
    </html>
  )
}

