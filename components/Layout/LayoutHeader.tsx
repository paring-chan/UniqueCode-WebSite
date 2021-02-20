import React from 'react'
import MenuItem from './MenuItem'

const LayoutHeader = () => {
  return (
    <div
      className="bg-header-black fixed top-0 left-0 w-full text-white flex z-50"
      style={{ height: 44, justifyContent: 'center', alignItems: 'center' }}>
      <div className="w-full flex container mx-4">
        <MenuItem>UniqueCode</MenuItem>
        <MenuItem>UniqueCode</MenuItem>
        <MenuItem>UniqueCode</MenuItem>
        <MenuItem>UniqueCode</MenuItem>
      </div>
    </div>
  )
}

export default LayoutHeader
