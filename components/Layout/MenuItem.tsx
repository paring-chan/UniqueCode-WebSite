import React from 'react'

const MenuItem: React.FC<{
  items: {
    label: string
    link: string
    nextLink?: boolean
  }[]
  label: string
  link?: string
}> = ({ items }) => {
  return <div>item</div>
}

export default MenuItem
