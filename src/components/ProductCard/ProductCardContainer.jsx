import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import ProductCard from './ProductCard'
import "./ProductCard.css"

function ProductCardContainer({products}) {

  const { addItem, removeOneItem } = useContext(CartContext)

  return (
    <section className='ProductCardContainer'>
        {
            products 
                ? products.map(item => <ProductCard
                    key={item.id} 
                    item={item} 
                    addItem={addItem}
                    removeOneItem={removeOneItem}
                    /> )
                : "Loading ..."
        }
    </section>
  )
}

export default ProductCardContainer