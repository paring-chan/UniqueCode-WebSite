import React, { Component } from 'react'

class Menu extends Component<any, any> {
  render() {
    return (
      <div className="bg-black h-full fixed w-full z-50 text-white flex flex-col text-xl">
        <div className="w-full h-20" />
        <div
          style={{
            alignItems: 'center',
          }}
          className="h-full px-8">
          test
        </div>
      </div>
    )
  }
}

export default Menu
