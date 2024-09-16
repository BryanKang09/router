import React from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductPage = () => {
  
    let [query,setQuery] = useSearchParams();
    console.log("aa", query.get('q'));
    
  return (
    <div>
      <h1> show all products </h1>

    </div>
  )
}

export default ProductPage
