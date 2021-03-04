import React, { createContext, useReducer } from 'react'
import userReducer from './userReducer'

export const UserContext = createContext(0)

let users = [
  { id: 7, name: 'Abdullah', age: 6 },
  { id: 1, name: 'Arshad', age: 38 },
  { id: 2, name: 'Zubair', age: 32 },
  { id: 3, name: 'Saad', age: 24 },
  { id: 4, name: 'Muaz', age: 20 },
  { id: 5, name: 'Hammad', age: 15 },
  { id: 6, name: 'Hanzla', age: 8 },
]

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, users)

  // create user
  function createUser(newUser) {
    dispatch({
      type: 'ADD',
      payload: newUser,
    })
  }
  // delete user
  function deleteUser(id) {
    dispatch({
      type: 'DELETE',
      payload: id,
    })
  }
  // sort user
  function sortUserByAgeDes() {
    dispatch({
      type: 'SORT_AGE_DES',
    })
  }
  // sort user
  function sortUserByAgeAsc() {
    dispatch({
      type: 'SORT_AGE_ASC',
    })
  }

  return (
    <UserContext.Provider
      value={{
        users: state,
        createUser,
        deleteUser,
        sortUserByAgeDes,
        sortUserByAgeAsc,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
