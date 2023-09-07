import actionTypes from "../actions/actionTypes";
import { produce } from "immer";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    if (type === actionTypes.FETCH_PRODUCT_SUCCESS) {
      draft.products = payload;
    }
    return draft;
  });
};

export default productReducer;
