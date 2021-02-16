import React, { Component } from 'react'
import MenuItem from './MenuItem'
import clsx from 'clsx'

class Menu extends Component<any, any> {
  render() {
    return (
      <div
        className={clsx({
          'bg-black h-full fixed w-full z-50 transition-all text-white flex flex-col': true,
          'opacity-0 invisible pointer-events-none': !this.props.open,
          'opacity-100 visible': this.props.open,
        })}>
        <div className="w-full h-20" />
        <div
          style={{
            alignItems: 'center',
          }}
          className="h-full flex">
          <div
            className="p-12 h-full flex gap-12 w-full"
            style={{
              overflow: 'auto',
              alignItems: 'center',
              // justifyContent: 'center'
            }}>
            <MenuItem
              items={[
                {
                  label: 'FreeAI',
                  link: '/projects/freeai',
                  nextLink: true,
                },
                {
                  label: 'StrawberryDonut',
                  link: '/projects/strawberrydonut',
                  nextLink: true,
                },
                {
                  label: 'OliveToast',
                  link: '/projects/olivetoast',
                  nextLink: true,
                },
                {
                  label: 'MiniBOT',
                  link: '/projects/minibot',
                  nextLink: true,
                },
              ]}
              label="Projects"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
