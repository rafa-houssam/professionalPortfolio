'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navlink = ({link}) => {
  const pathname=usePathname()
  return (
    <Link className={`rounded p-1 ${pathname==link.name && "text-white bg-black"}`} href={link.url}>{link.name}</Link>
  )
}

export default Navlink