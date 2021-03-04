import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/userContext'
import User from './User'

const Child = () => {
  const {
    users,
    createUser,
    deleteUser,
    sortUserByAgeDes,
    sortUserByAgeAsc,
  } = useContext(UserContext)

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let id = Math.random() * 100000
    let newUser = {
      id,
      name,
      age: +age,
    }

    createUser(newUser)

    setName('')
    setAge(0)
  }

  let searchedUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      {/* form to add user */}
      <form className='userForm' onSubmit={handleSubmit}>
        <h3>Create a user</h3>
        <input
          type='text'
          value={name}
          name='name'
          onChange={(e) => setName(e.target.value)}
          placeholder='user name...'
        />
        <input
          type='number'
          value={age}
          name='age'
          onChange={(e) => setAge(e.target.value)}
          placeholder='age'
        />
        <input type='submit' value='Create User' />
      </form>

      {/* filters */}
      <h3>Filters</h3>
      <div className='filters'>
        <button onClick={() => sortUserByAgeAsc()}>↑ Sort by age</button>
        <button onClick={() => sortUserByAgeDes()}>↓ Sort by age</button>
        <form className='searchBox'>
          <input
            type='text'
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search by name...'
          />
        </form>
      </div>
      <hr />

      {/* rendering the users */}

      {/* if any input value, print filtered users */}

      {query.length && searchedUsers.length
        ? searchedUsers.map((user) => (
            <User user={user} key={user.id} handleDelete={deleteUser} />
          ))
        : query.length && !searchedUsers.length
        ? 'No match found'
        : null}

      {/* if no input, print all users */}
      {!query.length
        ? users.map((user) => (
            <User user={user} key={user.id} handleDelete={deleteUser} />
          ))
        : null}
    </div>
  )
}

export default Child
