import React from 'react'

import './Menu.css'

export default function Menu({className}) {
  return (
    <ul className={className + ' menu'}>
      <li><a href="">Услуги</a></li>
      <li><a href="">О компании</a></li>
      <li><a href="">Партнеры</a></li>
      <li><a href="">Контакты</a></li>
    </ul>
  )
}
