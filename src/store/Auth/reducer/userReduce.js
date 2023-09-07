import { produce } from "immer";
import actionTypes from "../actions/actionType";

const initialState = {
  userInfo: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    roleId: "",
    gender: "",
  },
};

const useReducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    if (type === actionTypes.CREATE_NEW_USER) {
      draft.userInfo = payload;
    }
    return draft;
  });
};

export default useReducer;
