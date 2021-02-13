import React from 'react'
import LayoutHeader from './LayoutHeader'

const Layout: React.FC<{
  spacing?: boolean
}> = ({ children, spacing }) => {
  return (
    <div>
      <LayoutHeader />
      {spacing && <div className="w-full h-16" />}
      {children}
    </div>
  )
}

export default Layout
