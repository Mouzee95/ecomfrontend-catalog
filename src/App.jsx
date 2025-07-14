
import { useState, useEffect } from 'react'
import './App.css'
import ProductList from './ProductList';

function App() {
  const [products, setProducts]=useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  },[]);


  return (
    <div className="container"> 
      <div>
        {products.length ? (
          <ProductList products = {products}/>
        ): (
          <p>No products available</p>
        )}
      </div>
     
    </div>
  )
}

export default App
