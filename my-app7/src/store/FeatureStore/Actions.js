import { ADD_DATA, REMOVE_DATA, ASYNC_ADD_DATA } from "./Types";

export function addData(data) {
  return {
    type: ADD_DATA,
    payload: data,
  };
}
export function removeData() {
  return {
    type: REMOVE_DATA,
  };
}

export function asyncAddData(data) {
  return (dispatch, getState) => {
    if (!getState().featureStore.data) {
      setTimeout(() => {
        alert("Wait 1 sec to fetch data");
        dispatch({
          type: ASYNC_ADD_DATA,
          payload: data,
        });
      }, 1000);
    } else {
      alert("data already fetched!");
    }
  };
}
