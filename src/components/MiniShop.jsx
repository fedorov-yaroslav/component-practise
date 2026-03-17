import { useState } from 'react'
import Card from './Card'

function MiniShop({products}){
  const [input, setInput] = useState('')

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(input.toLowerCase()))

  return (
      <>
        <input
            className='searchBar'
            placeholder='Поиск продукта'
            type="text"
            value = {input}
            onChange = {(e) => setInput(e.target.value)}
        />
        {filteredProducts.map((product) =>
            <Card
                key={product.id}
                product = {product}
            />
        )}
      </>
  )
}

export default MiniShop;