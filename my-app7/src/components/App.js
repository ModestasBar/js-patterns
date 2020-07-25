import React, { useReducer, useEffect } from "react";
import Cart from "./Cart";
import Basket from "./Basket";
import useDataFetching, {
  REQ_DATA,
  REQ_DATA_FAILURE,
  REQ_DATA_SUCCESS,
} from "../hooks/useDataFetching";

function App() {
  const [state, dispatch] = useDataFetching();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: REQ_DATA });
    }, 1000);
    setTimeout(() => {
      dispatch({ type: REQ_DATA_SUCCESS, payload: "Fetched DATA!" });
    }, 2000);
    setTimeout(() => {
      dispatch({ type: REQ_DATA_FAILURE });
    }, 3000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {console.log(state)}
        {state.data ? <h1>{state.data}</h1> : null}
        {state.fetching ? <h1>Is fetching</h1> : null}
        {state.error ? <h1>is Error!</h1> : null}
        <Cart />
        <Basket />
      </header>
    </div>
  );
}

export default App;
