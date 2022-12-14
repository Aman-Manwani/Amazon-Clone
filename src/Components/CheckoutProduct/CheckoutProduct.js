import React from 'react'
import "./CheckoutProduct.css"
import { StoreContext } from '../StateProvider/stateProvider';
import { useContext } from 'react';

function CheckoutProduct({id,title,image,price,rating}) {
  
  const {state, dispatch} = useContext(StoreContext);

  const removeFromBasket = () =>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    })
  }
  
  return (
    <div className='checkoutProduct'>
        <img src={image} alt='product image' className='checkoutProduct_image'/>
        <div className='checkoutProduct_info'>
            <p className='checkoutproduct_title'>{title}</p>
            <p className='checkoutProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
            {
                Array(rating)
                .fill()
                .map((_,i)=>{
                  return(
                    <p key={i}>⭐</p>
                  )
                }
                )
            }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
