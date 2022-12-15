import React, { useContext } from "react";
import img from "./kindle.jpg";
import { StoreContext } from "../StateProvider/stateProvider";
import Header from "../Header/Header";
import "./Checkout.css";

function Checkout() {
  const { state, dispatch } = useContext(StoreContext);
  const { basket } = state;
  return (
    <>
      <Header />
      <div className="checkout">
        <img src={img} alt="" className="checkout_ad" />
        {
            basket?.length===0 ?(
                <div>
                    <h1 className="shopping_head">Your Shopping Basket Is Empty</h1>
                </div>
            ) : (
                <div>
                    <h1 className="shopping_head">Your Shopping Basket</h1>
                </div>
            )
        }
      </div>
    </>
  );
}

export default Checkout;
