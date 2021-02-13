import React, { Component } from 'react'
import MenuItem from './MenuItem'
import clsx from 'clsx'

class Menu extends Component<any, any> {
  render() {
    return (
      <div
        className={clsx({
          'bg-black h-full fixed w-full transition-all z-50 text-white flex flex-col': true,
          'opacity-0 user-select-none': !this.props.open,
        })}>
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
