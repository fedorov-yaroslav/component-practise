import { useState } from 'react'

function MiniShop(){
  const [ detailed, setDetailed] = useState(false)

  return (
      <div className = 'card'>
        <p>Название: {}</p>
        <p>Цена: ${}</p>
        <button onClick = {() => setDetailed(prev => !prev)}>{detailed ? 'Скрыть' : 'Подробнее'}</button>
      </div>
  )
}

export default MiniShop;