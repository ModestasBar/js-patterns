import React from "react";
import { useStore } from "../store";
import Cart from "./Cart";

function Basket() {
  const { store } = useStore();
  return (
    <>
      <p>Basket component</p>
      {store.error ? <Cart /> : null}
      {store.data ? <h1>Data - {store.data}</h1> : null}
      {store.fetching ? <h1>Error</h1> : null}
    </>
  );
}

export default Basket;
