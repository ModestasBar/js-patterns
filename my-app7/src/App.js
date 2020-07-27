import React from "react";
import { useDispatch } from "react-redux";
import {
  addData,
  removeData,
  asyncAddData,
} from "./store/FeatureStore/Actions";

function App() {
  const dispatch = useDispatch();

  const addToCart = () => dispatch(addData("cart added!"));
  const removeFromCart = () => dispatch(removeData());
  const asyncData = () => dispatch(asyncAddData("Async data"));
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => addToCart()}>Add to cart!</button>
        <button onClick={() => removeFromCart()}>Remove from cart!</button>
        <button onClick={() => asyncData("async data!")}>
          Async add data!
        </button>
        <h1>Hello world!</h1>
      </header>
    </div>
  );
}

export default App;
