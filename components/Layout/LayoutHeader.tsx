import React, { Component } from 'react'
import Link from 'next/link'
import styles from '../../styles/layout.module.css'
import Menu from './Menu'
import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons'

class LayoutHeader extends Component<
  {
    fullpage?: boolean
  },
  any
> {
  handleScroll = () => {
    if (window.pageYOffset > 0) {
      if (!this.state.navBorder) {
        this.setState({ navBorder: true })
      }
    } else {
      if (this.state.navBorder) {
        this.setState({ navBorder: false })
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  state = {
    navBorder: false,
    menu: false,
  }

  render() {
    return (
      <>
        <div
          className={`bg-white h-16 fixed border-b ${
            this.state.menu ? 'bg-opacity-100' : 'bg-opacity-70 delay-200'
          } w-full left-0 top-0 ${styles.header__bg} ${
            this.state.navBorder ? 'border-gray-300' : 'border-transparent'
          }`}
          style={{
            zIndex: 99999,
          }}>
          <div
            className="flex px-4 container mx-auto h-full"
            style={{ alignItems: 'center' }}>
            {this.props.fullpage ? (
              <a
                href={this.props.fullpage ? '/#sec1' : '/'}
                className="text-xl font-bold">
                UniqueCode
              </a>
            ) : (
              <Link href="/">
                <a
                  href={this.props.fullpage ? '/#sec1' : '/'}
                  className="text-xl font-bold">
                  UniqueCode
                </a>
              </Link>
            )}
            <div className="flex-grow" />
            <div>
              <div onClick={() => this.setState({ menu: !this.state.menu })}>
                {this.state.menu ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <MenuIcon fontSize="large" />
                )}
              </div>
            </div>
          </div>
        </div>
        <Menu open={this.state.menu} />
      </>
    )
  }
}

export default LayoutHeader
