import React from 'react'
import './productList.css'
import Product from '../Product/Product'

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-text">
            <h1 className="pl-title">
                Create & Inspire
            </h1>
            <div className="pl-desc">
                This is a place to take a look at beautiful models
                waiting for you and your pipi.
            </div> 
            </div>
            <div className="pl-list">
            <Product/>
            <Product/>
            <Product/>
            </div>
        </div>
    )
}

export default ProductList
