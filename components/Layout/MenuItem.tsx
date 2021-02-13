import React from 'react'
import Link from 'next/link'

const MenuItem: React.FC<{
  items: {
    label: string
    link: string
    nextLink?: boolean
  }[]
  label: string
  link?: string
}> = ({ items, label, link }) => {
  return (
    <div>
      <div>
        {link?.startsWith('/') ? (
          <Link href={link}>{label}</Link>
        ) : (
          <a href={link}>{label}</a>
        )}
      </div>
    </div>
  )
}

export default MenuItem
