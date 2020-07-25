import { useReducer, useEffect } from "react";

const initial = {
  data: null,
  fetching: false,
  error: false,
};

export const REQ_DATA = "REQ_DATA";
export const REQ_DATA_SUCCESS = "REQ_DATA_SUCCESS";
export const REQ_DATA_FAILURE = "REQ_DATA_FAILURE";

export default function useDataFetching() {
  const reducer = (state, action) => {
    switch (action.type) {
      case REQ_DATA:
        return { ...state, fetching: true };
      case REQ_DATA_SUCCESS:
        return { ...state, fetching: false, data: action.payload };
      case REQ_DATA_FAILURE:
        return { ...state, error: true, data: null };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initial);

  return [state, dispatch];
}
