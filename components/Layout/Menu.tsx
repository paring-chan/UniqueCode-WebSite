import React, { Component } from 'react'
import MenuItem from './MenuItem'

class Menu extends Component<any, any> {
  render() {
    return (
      <div className="bg-black h-full fixed w-full z-50 text-white flex flex-col text-3xl font-bold">
        <div className="w-full h-20" />
        <div
          style={{
            alignItems: 'center',
          }}
          className="h-full px-8 flex">
          <MenuItem
            items={[
              {
                label: 'FreeAI',
                link: '/projects/freeai',
                nextLink: true,
              },
            ]}
            label="Projects"
          />
        </div>
      </div>
    )
  }
}

export default Menu
