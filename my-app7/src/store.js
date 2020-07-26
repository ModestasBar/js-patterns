import React, { createContext, useContext, useReducer } from "react";

const StoreContext = createContext();

const initial = {
  data: null,
  fetching: false,
  error: false,
};

export const REQ_DATA = "REQ_DATA";
export const REQ_DATA_SUCCESS = "REQ_DATA_SUCCESS";
export const REQ_DATA_FAILURE = "REQ_DATA_FAILURE";

const reducer = (state, action) => {
  switch (action.type) {
    case REQ_DATA:
      return { ...state, fetching: true };
    case REQ_DATA_SUCCESS:
      return { ...state, fetching: false, data: action.payload, error: false };
    case REQ_DATA_FAILURE:
      return { ...state, error: true, data: null };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initial);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
