import React from 'react'

import './Button.css'

export default function Button({children, onClick, isActive}) {
  return <button className={isActive ? "button button-light active" : "button button-light"} onClick={onClick}>{children}</button>
}

// export default function Button({children, onClick, isActive}) {
//   console.log('App Component Render')
//   let classes = 'button button-light'
//   if (isActive) classes += ' active'
//   return <button className={isActive ? "button button-light active" : "button button-light"} onClick={onClick}>{children}</button>
// }
