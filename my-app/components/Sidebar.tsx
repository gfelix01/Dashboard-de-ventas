import Link from "next/link";
import { Home, ShoppingCart, Package, BarChart2 } from "lucide-react";

const navItems = [
  { href: "/", icon: Home, label: "Inicio" },
  { href: "/ventas", icon: ShoppingCart, label: "Ventas" },
  { href: "/inventario", icon: Package, label: "Inventario" },
  { href: "/reportes", icon: BarChart2, label: "Reportes" },
];

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav className="space-y-4">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link key={href} href={href} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

