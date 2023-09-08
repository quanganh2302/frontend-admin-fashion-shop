import actionTypes from "../actions/actionTypes";
import { produce } from "immer";

const initialState = {
  allCode: "",
  gender: [],
  role: [],
  color: [],
  size: [],
  type: [],
  categories: [],
  tagProduct: [],
};

const homeReducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    if (type === actionTypes.FETCH_GENDER) {
      draft.gender = payload;
    } else if (type === actionTypes.FETCH_ROLE) {
      draft.role = payload;
    } else if (type === actionTypes.FETCH_COLOR) {
      draft.color = payload;
    } else if (type === actionTypes.FETCH_SIZE) {
      draft.size = payload;
    } else if (type === actionTypes.FETCH_TYPE) {
      draft.type = payload;
    } else if (type === actionTypes.FETCH_CATEGORY) {
      draft.categories = payload;
    } else if (type === actionTypes.FETCH_TAG_PRODUCT) {
      draft.tagProduct = payload;
    }
    return draft;
  });
};

export default homeReducer;
