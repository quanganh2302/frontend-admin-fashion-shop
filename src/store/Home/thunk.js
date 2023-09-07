import axios from "axios";
import https from "../../axios";
import homeServices from "./reducer/homeServices";
import actionTypes from "./actions/actionTypes";

export const fetchAllCode = (type) => async (dispatch) => {
  try {
    const res = await homeServices.getAllCode(type);
    // dispatch({
    //   type: actionTypes.FETCH_GENDER,
    //   payload: res,
    // });
  } catch (e) {
    console.log(e);
  }
};

export const fetchGender = () => async (dispatch) => {
  try {
    let res = await homeServices.getAllCode("gender");
    dispatch({
      type: actionTypes.FETCH_GENDER,
      payload: res,
    });
  } catch (e) {
    console.log(e);
  }
};

export const fetchRole = () => async (dispatch) => {
  try {
    let res = await homeServices.getAllCode("role");
    dispatch({
      type: actionTypes.FETCH_ROLE,
      payload: res,
    });
  } catch (e) {
    console.log(e);
  }
};

export const fetchColor = () => async (dispatch) => {
  try {
    let color = await homeServices.getColor("color");
    dispatch({
      type: actionTypes.FETCH_COLOR,
      payload: color.color,
    });
  } catch (e) {
    console.log(e);
  }
};
