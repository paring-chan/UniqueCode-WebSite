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
            overflow: 'auto',
          }}
          className="h-full p-8 flex justify-center md:justify-start">
          <div className="gap-12 flex flex-col md:flex-row">
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
