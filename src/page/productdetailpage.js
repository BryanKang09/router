import React from 'react'

import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {

    const {id} = useParams();
    console.log({id})

    return (
        <div>
        <h1> show product details    </h1>
        </div>
    )
}

export default ProductDetailPage
