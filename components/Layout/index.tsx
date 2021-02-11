import React from 'react'
import LayoutHeader from './LayoutHeader'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <LayoutHeader />
      {children}
    </div>
  )
}

export default Layout
