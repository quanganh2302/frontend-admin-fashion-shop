import actionTypes from "../actions/actionTypes";
import { produce } from "immer";

const initialState = {
  allCode: "",
  gender: [],
  role: [],
  color: [],
};

const homeReducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    if (type === actionTypes.FETCH_GENDER) {
      draft.gender = payload;
    } else if (type === actionTypes.FETCH_ROLE) {
      draft.role = payload;
    } else if (type === actionTypes.FETCH_COLOR) {
      draft.color = payload;
    }
    return draft;
  });
};

export default homeReducer;
