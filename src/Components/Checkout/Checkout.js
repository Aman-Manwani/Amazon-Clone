import React, { useContext } from "react";
import { StoreContext } from "../StateProvider/stateProvider";
import Header from "../Header/Header";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const { state, dispatch } = useContext(StoreContext);
  const { basket } = state;
  console.log(basket);
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout_ad" />
          <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket?.map(item => {
            console.log(item);
            return (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
            )
          })}
        </div>
        </div>
        <div className="checkout_right">
          {/* <h1>SubTotal</h1> */}
          <Subtotal/>
        </div>
      </div>
    </>
  );
}

export default Checkout;
