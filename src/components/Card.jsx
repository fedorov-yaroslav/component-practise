import { useState } from "react";


function Card({product}){
  const [showDetails, setShowDetails] = useState(false)
  const [quanity, setQuantity] = useState(0)

  return (
      <div className='card'>
        <p>Название: {product.name}</p>
        <p>Цена: {product.price}$</p>
        {showDetails && <p>{product.description}</p>}
        <button onClick={() => setShowDetails(prev => !prev)}>{showDetails ? 'Скрыть' : 'Подробнее'}</button>
        <button onClick = {() => setQuantity(prev => prev + 1)}>Add to Cart</button>
        <p>Количество: {quanity}</p>
        <button onClick = {() => setQuantity(0)}>Удалить продукт</button>
      </div>
  )
}

export default Card;