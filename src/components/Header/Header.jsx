import React from 'react'
import { styled } from 'styled-components'
import classes from './Header.module.css'

import logo from '/logo.svg'
import Menu from '../Menu/Menu'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export default function Header() {
  return (
    <header className={classes.header}>
      <div className="container">
        <HeaderContainer>
            <div className={classes.header__row}>
              <a className={classes.header__logo} href="/">
                <img src={logo} alt="header logo" />
              </a>
              <div className={classes.header__info}>
                <a href="mailto:info@tlcgroup.kz">info@tlcgroup.kz</a>
                <a href="tel:+7 707 180 32 22">+7 707 180 32 22</a>
              </div>
            </div>
            <div className={classes.header__row}>
              <nav className={classes.header__nav}>
                <Menu className="header__menu"  />
              </nav>
              <a className={classes.header__link}>Заказать звонок</a>
            </div>
          </HeaderContainer>
      </div>
    </header>
  )
}
