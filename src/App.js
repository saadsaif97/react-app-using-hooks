import Parent from './components/Parent'
import UserContextProvider from './contexts/userContext'

import './App.css'

function App() {
  return (
    <div className='container'>
      <h2 style={{ margin: '10px auto', maxWidth: '400px' }}>
        Created by saad saif
      </h2>
      <UserContextProvider>
        <Parent />
      </UserContextProvider>
    </div>
  )
}

export default App
