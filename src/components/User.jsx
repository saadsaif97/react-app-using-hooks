import React from 'react'

const User = ({ user, handleDelete }) => {
  return (
    <>
      <div className='block'>
        <h3>Name: {user.name}</h3>
        <p>Age: {user.age}</p>
        <span className='delete' onClick={() => handleDelete(user.id)}>
          X
        </span>
      </div>
    </>
  )
}

export default User
