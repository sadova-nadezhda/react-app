import React from 'react'

import './AboutCard.css'

export default function About({title}) {
  return (
    <div className="about__card">
      <p>{title}</p>
    </div>
  )
}
