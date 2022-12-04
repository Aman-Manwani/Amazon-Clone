import React from 'react'
import './Product.css'

function product() {
  return (
    <div className='product'> 
      <div className='product_info'>
        <p>The lean Startup</p>
        <p className='product_price'>
            <small>$</small>
            <strong>19.99</strong>
        </p>
        <div className='product_rating'>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
        </div>
      </div>
      <img src='Lean Startup.jpg' alt='Lean Statrup'/>
    </div>
  )
}

export default product
