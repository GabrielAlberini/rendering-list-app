// hooks -> anzuelo
import { useState, useEffect } from 'react';

const ProductsSection = () => {
  // destructuring
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

 return (
  <section>
    {
      products.map((product) => {
        return (
          <div style={{width: "250px"}} key={product.id}>
            <img style={{width: "80px"}} src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p>Rate: {product.rating.rate}</p>
            <p>Stock: {product.rating.count}</p>
          </div>
        )
      })
    }
  </section>
 )
}

export { ProductsSection }