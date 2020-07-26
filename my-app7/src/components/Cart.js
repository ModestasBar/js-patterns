import React, { useEffect } from "react";
import { useStore, REQ_DATA_SUCCESS } from "../store";

function Cart() {
  const { dispatch } = useStore();
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: REQ_DATA_SUCCESS, payload: "CART" });
    }, 5000);
  }, []);
  return (
    <>
      <p>Cart component</p>
      <h1>FETCHING FROM CARD</h1>;
    </>
  );
}

export default Cart;
