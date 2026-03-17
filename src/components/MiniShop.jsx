import { useState } from 'react'
import Card from './Card'

function MiniShop({products}){

  return (
      <>
        {products.map((product) =>
            <Card
                key={product.id}
                product = {product}
            />
        )}
      </>
  )
}

export default MiniShop;