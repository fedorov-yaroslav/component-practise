import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar.jsx'

function App() {
  const [data, setData ] = useState([])
  const [input, setInput ] = useState('')

  useEffect(() => {
    async function fetchData(){
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await result.json()
      setData(users)
    }
    fetchData()
  },[])

  const filteredUsers = data.filter(user =>
      user.name.toLowerCase().includes(input.toLowerCase())
  )

  return (
    <>
      <input value={input} onChange={(e)=>setInput(e.target.value)} />
      {filteredUsers.map(user =>
      <p key = {user.id}>{user.name}</p>
      )}
    </>
  )
}

export default App
