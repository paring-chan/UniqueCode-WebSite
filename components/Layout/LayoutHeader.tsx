import React, { Component } from 'react'
import Link from 'next/link'
import styles from '../../styles/layout.module.css'
import Menu from './Menu'

class LayoutHeader extends Component<
  {
    fullpage?: boolean
  },
  {
    navBorder: boolean
  }
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
  }

  render() {
    return (
      <>
        <div
          className={`bg-white h-16 fixed border-b bg-opacity-70 z-50 w-full left-0 top-0 transition-all ${
            styles.header__bg
          } ${
            this.state.navBorder ? 'border-gray-300' : 'border-transparent'
          }`}>
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
            <div>메뉴</div>
          </div>
        </div>
        <Menu />
      </>
    )
  }
}

export default LayoutHeader
