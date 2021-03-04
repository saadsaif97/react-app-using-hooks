export default function userReducer(users, action) {
  switch (action.type) {
    case 'DELETE':
      let filteredUsers = users.filter((user) => user.id !== action.payload)
      //  returning the state after filter
      return [...filteredUsers]
    case 'ADD':
      // returning the state after adding
      return [action.payload, ...users]
    case 'SORT_AGE_DES':
      // returning the state after sorting by age
      return [...users.sort((a, b) => b.age - a.age)]
    case 'SORT_AGE_ASC':
      // returning the state after sorting by age
      return [...users.sort((a, b) => a.age - b.age)]

    default:
      break
  }
}
