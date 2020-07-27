import { ADD_DATA, REMOVE_DATA } from "./Types";

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
