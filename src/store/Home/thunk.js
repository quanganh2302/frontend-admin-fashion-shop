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
    let color = await homeServices.getColor();
    dispatch({
      type: actionTypes.FETCH_COLOR,
      payload: color.color,
    });
  } catch (e) {
    console.log(e);
  }
};

export const fetchSize = () => async (dispatch) => {
  try {
    let size = await homeServices.getSize();
    dispatch({
      type: actionTypes.FETCH_SIZE,
      payload: size.size,
    });
  } catch (e) {
    console.log(e);
  }
};

export const fetchTypeCustomer = () => async (dispatch) => {
  try {
    let type = await homeServices.getType();
    dispatch({
      type: actionTypes.FETCH_TYPE,
      payload: type.type,
    });
  } catch (e) {
    console.log(e);
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    let cate = await homeServices.getCategories();
    dispatch({
      type: actionTypes.FETCH_CATEGORY,
      payload: cate.cate,
    });
  } catch (e) {
    console.log(e);
  }
};

export const fetchTagProduct = () => async (dispatch) => {
  try {
    let tagProduct = await homeServices.getTagProduct();
    dispatch({
      type: actionTypes.FETCH_TAG_PRODUCT,
      payload: tagProduct.tag,
    });
  } catch (e) {
    console.log(e);
  }
};
