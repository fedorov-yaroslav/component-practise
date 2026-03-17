import { useState } from "react";


function Card({product}){
  const [showDetails, setShowDetails] = useState(false)

  return (
      <>
        <p>Название: {product.name}</p>
        <p>Цена: {product.price}$</p>
        {showDetails && <p>{product.description}</p>}
        <button onClick={() => setShowDetails(prev => !prev)}>{showDetails ? 'Скрыть' : 'Подробнее'}</button>
      </>
  )
}

export default Card;