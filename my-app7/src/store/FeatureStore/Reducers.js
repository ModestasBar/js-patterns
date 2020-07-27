import { ADD_DATA, REMOVE_DATA } from "./Types";

const initialState = {
  data: null,
};

export default function featureStore(store = initialState, action) {
  switch (action.type) {
    case ADD_DATA:
      return { ...store, data: action.payload };
    case REMOVE_DATA:
      return { ...store, data: null };
    default:
      return store;
  }
}
