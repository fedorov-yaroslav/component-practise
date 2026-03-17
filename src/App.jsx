import { useState, useEffect } from 'react'
import MiniShop from './components/MiniShop.jsx'

function App() {
  const products = [
    {id: 1, name: "iPhone 13", price: 600, description: 'Good phone' },
    {id: 2, name: 'MacBook Air', price: 900, description: 'Light Laptop' },
    {id: 3, name: 'Samsung Galaxy', price: 500, description: 'Android Phone' },
  ]

  return (
    <>
      <MiniShop products = {products}/>
    </>
  )
}

export default App
