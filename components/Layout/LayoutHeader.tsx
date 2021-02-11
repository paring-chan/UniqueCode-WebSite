import React, { Component } from 'react'

class LayoutHeader extends Component<any, any> {
  render() {
    return (
      <div className="bg-white h-16 border-b">
        <div
          className="flex px-4 container mx-auto h-full"
          style={{ alignItems: 'center' }}>
          <div className="text-xl font-bold">UniqueCode</div>
          <div className="flex-grow" />
          <div>메뉴</div>
        </div>
      </div>
    )
  }
}

export default LayoutHeader
