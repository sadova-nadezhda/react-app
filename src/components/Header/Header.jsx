import React from 'react'
import './Header.css'

import logo from '/logo.svg'
import Menu from '../Menu/Menu'

export default function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__container">
        <div className="header__row">
          <a className="header__logo" href="/">
            <img src={logo} alt="header logo" />
          </a>
          <div className="header__info">
            <a href="mailto:info@tlcgroup.kz">info@tlcgroup.kz</a>
            <a href="tel:+7 707 180 32 22">+7 707 180 32 22</a>
          </div>
        </div>
        <div className="header__row">
          <nav className="header__nav">
            <Menu className="header__menu"  />
          </nav>
          <a className="header__link">Заказать звонок</a>
        </div>
        </div>
      </div>
    </header>
  )
}
