import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';

export interface IProduct {
  id:number;
  title:string;
  price:number;
}


function App() {

  
  const [products, setProducts] = useState<IProduct[]>([
    {
      id:1,
      title: "Iphone",
      price:3000,
    },
    {
      id:2,
      title: "Iphone2",
      price:3000
    },
    {
      id:3,
      title: "Iphone2",
      price:3000
    }
  ])
  

  const handleAddToCart = (id: number) => {
    console.log(id)
  }

  return (
    <div>
      {
        products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))
      }
    </div>
  );
}

export default App;
