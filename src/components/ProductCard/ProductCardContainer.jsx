import React from 'react'
import ProductCard from './ProductCard'

function ProductCardContainer({products}) {
    console.log(products)
  return (
    <div>
        {
            products 
                ? products.map(item => <ProductCard key={item.id} item={item} /> )
                : "Loading ..."
        }
    </div>
  )
}

export default ProductCardContainer