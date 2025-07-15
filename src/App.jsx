
import { useState, useEffect } from 'react'
import './App.css'
import ProductList from './ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");


  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
    // Fetch categories
    fetch('http://localhost:8080/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSearchChange = (event)=>{
    setSearchItem(event.target.value);
  }


  return (
    <div className="container">
      <h1 className="my-4">Product List</h1>
      <div className="row align-items mb-3">
          <div className='col-md-4 col-sm-12 mb-12'>
            <p>Category Filter</p>
          </div>
          <div>
            <input type="text" className='form-control' placeholder='Search product'  onChange={handleSearchChange}/>
            
            
          </div>
      </div>
      <div>
        {products.length ? (
          <ProductList products={products} />
        ) : (
          <p>No products available</p>
        )}
      </div>

    </div>
  )
}

export default App
