import React from 'react'

import Button from '../Button/Button'

import './TabSection.css'

export default function TabSection({active, onChange}) {
  return (
    <section className="tab section">
      <div className="container">
        <div className="tab__container">
          <div className="tab__list">
            <Button isActive={active === 'main'} onClick= {()=> onChange('main')}>Главная</Button>
            <Button isActive={active === 'feedback'} onClick= {()=> onChange('feedback')}>Обратная связь</Button>
            <Button isActive={active === 'effect'} onClick= {()=> onChange('effect')}>Эффект</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
