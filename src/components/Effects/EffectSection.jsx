import React, { useEffect, useState, useCallback } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import useInput from '../../hooks/useInput'

export default function EffectSection() {
  const input = useInput()
  const [isModal, setIsModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

    // Не верная логика
    // async function fetchUsers() {
    //   setLoading(true)
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //   const users = await response.json()
    //   setUsers(users)
    //   setLoading(false)
    // }

    // Variable 2
    const fetchUsers = useCallback(async ()=>{
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      setUsers(users)
      setLoading(false)
    }, [])


  useEffect(()=>{
    // Variable 1
    // async function fetchUsers() {
    //   setLoading(true)
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //   const users = await response.json()
    //   setUsers(users)
    //   setLoading(false)
    // }

    fetchUsers()
  }, [fetchUsers])

  return (
    <section className="effect section">
      <div className="container">
        <div className="effect__container">
          <h2 className="title">Effect</h2>

          <Button onClick={()=>setIsModal(true)}>Открыть инфо</Button>
          <br/>
          <Modal open={isModal}>
            <h3>Hello Modal</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, neque ab. Maiores quaerat tenetur aliquid molestiae aut, temporibus ipsum, alias deleniti facilis fuga nihil, repellendus corporis quidem ex eius cum.</p>
            <Button onClick={()=>setIsModal(false)}>Close</Button>
          </Modal>
          {loading && <p>Loading...</p>}
          {!loading && <>
            <input type="text" {...input} />
            <br/><br/>
            <ul>{users.filter(user => user.name.toLowerCase().includes(input.value.toLowerCase())).map((user) => (<li key={user.id}>{user.name}</li>))}</ul>
          </>}
        </div>
      </div>
    </section>
  )
}
