import React, { useEffect } from "react";
import Basket from "./Basket";
import {
  useStore,
  REQ_DATA,
  REQ_DATA_FAILURE,
  REQ_DATA_SUCCESS,
} from "../store";

function App() {
  const { dispatch } = useStore();

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: REQ_DATA });
    }, 1000);
    setTimeout(() => {
      dispatch({ type: REQ_DATA_SUCCESS, payload: "APP" });
    }, 5000);
    setTimeout(() => {
      dispatch({ type: REQ_DATA_FAILURE });
    }, 9000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Basket />
      </header>
    </div>
  );
}

export default App;
