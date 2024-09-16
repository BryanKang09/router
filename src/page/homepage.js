import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  const goProductPage = ()=>{
    navigate('/products/q=pants')
  }
  
  return (
    <div>
      <h1>homepage</h1>
      <Link to='/about'>Go to Aboutpage</Link>
      <button onClick={goProductPage}>go to productpage</button>
    </div>
  )
}

export default Homepage
