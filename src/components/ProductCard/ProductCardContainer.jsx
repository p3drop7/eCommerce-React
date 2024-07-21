import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import ProductCard from './ProductCard'
import "./ProductCard.css"

function ProductCardContainer({products}) {

  const { addItem } = useContext(CartContext)

  return (
    <section className='ProductCardContainer'>
        {
            products 
                ? products.map(item => <ProductCard
                      key={item.id} 
                      item={item} 
                      addItem={addItem}
                    /> )
                : "Loading ..."
        }
    </section>
  )
}

export default ProductCardContainer