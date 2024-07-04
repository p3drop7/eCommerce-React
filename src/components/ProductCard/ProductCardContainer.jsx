import React from 'react'
import ProductCard from './ProductCard'
import "./ProductCard.css"

function ProductCardContainer({products}) {
    console.log(products)
  return (
    <section className='ProductCardContainer'>
        {
            products 
                ? products.map(item => <ProductCard key={item.id} item={item} /> )
                : "Loading ..."
        }
    </section>
  )
}

export default ProductCardContainer