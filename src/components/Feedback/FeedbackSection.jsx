import React, { useState, useRef } from 'react'

import classes from './FeedbackSection.module.css'
import Button from '../Button/Button'

function StateVsRef() {
  const input = useRef()
  const [show, setShow] = useState(false)

  function handleKeyDown(e) {
    if(e.key === 'Enter') {
      setShow(true)
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current?.value} </h3>
      <br />
      <input 
        ref={input} 
        type="text" 
        onKeyDown={handleKeyDown}
        className={classes.feedback__input} 
      />
    </div>
  )
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: true,
    list: 'var1',
  })

  // const [name, setName] = useState('')
  // const [hasError, setHasError] = useState(false)
  // const [list, setList] = useState('var1')

  const handleNameChange = (e) => {
    // setName(e.target.value)
    // setHasError(e.target.value.trim().length === 0)
    setForm(prev => ({
      ...prev, 
      name : e.target.value,
      hasError: e.target.value.trim().length === 0,
    }))
  }

  // const handleListChange = (e) => {
  //   setList(e.target.value)
  // }

  // const toggleError = () => {
  //   setHasError((prev) => !prev)
  // }

  return (
    <section className="section feedback">
      <div className="container">
        <div className="feedback__container">
          <h2 className="title">Feedback</h2>
          <form className={classes.feedback__form} style={{marginBottom: '50px'}}>
            <input type="text" name="name" id="name" className={classes.feedback__input} placeholder="Имя" value={form.name} onChange={handleNameChange} style={{
              border: form.hasError ? '1px solid red' : null,
            }} />
            <select id="" className={classes.feedback__input} value={form.list} onChange={(e) => setForm((prev) => ({...prev, list: e.target.value}))}>
              <option value="var1">Variable 1</option>
              <option value="var2">Variable 2</option>
              <option value="var3">Variable 3</option>
            </select>

            <pre>
              {
                JSON.stringify(form)
              }
            </pre>

            <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
          </form>
          <StateVsRef />
        </div>
      </div>
    </section>
  )
}
