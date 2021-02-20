import React from 'react'

const MenuItem = ({ children }) => {
  return (
    <div className="w-1/4 text-center cursor-pointer hover:text-gray-300 transition-all">
      {children}
    </div>
  )
}

export default MenuItem
