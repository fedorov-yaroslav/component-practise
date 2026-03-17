import { useState, useEffect } from 'react'
import UserDirectory from "./components/UserDirectory.jsx";

function App() {
  const users = [
    {
      id: 1,
      name: "Alex",
      age: 25,
      profession: "Frontend developer",
      bio: "Likes React"
    },
    {
      id: 2,
      name: "Maria",
      age: 30,
      profession: "Designer",
      bio: "Figma expert"
    },
    {
      id: 3,
      name: "John",
      age: 28,
      profession: "Backend developer",
      bio: "Node.js"
    }
  ]

  return (
    <>
      <UserDirectory users = {users} />
    </>
  )
}

export default App
