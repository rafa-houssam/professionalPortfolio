// components/Navbar.jsx
'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800">MyShop</div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/cart" className="flex items-center space-x-1">
            <ShoppingCart size={20} />
            <span>Cart</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
