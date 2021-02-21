import React from 'react'
import MenuItem from './MenuItem'
import Logo from '../../assets/img/logo.png'

const LayoutHeader = () => {
  return (
    <div
      className="bg-header-black fixed top-0 left-0 w-full text-white flex z-50"
      style={{ height: 44, justifyContent: 'center', alignItems: 'center' }}>
      <div className="w-full flex container">
        <MenuItem href="/">
          <div className="flex justify-center">
            <img src={Logo} className="h-6 mr-2" alt="logo" />
            UniqueCode
          </div>
        </MenuItem>
        <MenuItem href="/projects">Projects</MenuItem>
        <MenuItem href="/members">Members</MenuItem>
        <MenuItem href="/recruit">Recruit</MenuItem>
      </div>
    </div>
  )
}

export default LayoutHeader
