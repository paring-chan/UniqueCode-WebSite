import React from 'react'
import LayoutHeader from './LayoutHeader'

const Layout: React.FC<{
  noSpacing?: boolean
  noHeader?: boolean
}> = ({ children, noSpacing, noHeader }) => {
  return (
    <div>
      {!noHeader && <LayoutHeader />}
      {!noSpacing && <div className="w-full h-16" />}
      {children}
    </div>
  )
}

export default Layout
