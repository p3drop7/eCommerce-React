

function ProductCard({item}) {
  return (
    <>
        <div>{item.title}</div>
        <div>{item.price}</div>
        <img src={item.image} alt={item.title}/>
    
    </>
  )
}

export default ProductCard