import React from "react";
import { useDispatch } from "react-redux";
import { addData, removeData } from "./store/FeatureStore/Actions";

function App() {
  const dispatch = useDispatch();

  const addToCart = () => dispatch(addData("cart added!"));
  const removeFromCart = () => dispatch(removeData());
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => addToCart()}>Add to cart!</button>
        <button onClick={() => removeFromCart()}>Remove from cart!</button>
        <h1>Hello world!</h1>
      </header>
    </div>
  );
}

export default App;
