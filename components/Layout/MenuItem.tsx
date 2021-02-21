import React from 'react'
import Link from 'next/link'

const MenuItem: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <Link href={href}>
      <div className="w-1/4 text-center cursor-pointer hover:text-gray-300 transition-all">
        {children}
      </div>
    </Link>
  )
}

export default MenuItem
