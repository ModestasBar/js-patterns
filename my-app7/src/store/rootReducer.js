import { combineReducers } from "redux";
import { createStore } from "redux";
import featureStore from "./FeatureStore/Reducers";
const rootReducer = combineReducers({
  featureStore,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
