import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aboutpage = () => {

  const navigate = useNavigate();
  
  const goToHomepage=()=>{
      navigate("/")

  }
  return (
    <div>
      <h1>about</h1>
      <button onClick = {goToHomepage}>goToHomepage</button>
    </div>
  )
}

export default Aboutpage
