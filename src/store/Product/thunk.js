import actionTypes from "./actions/actionTypes";
import productServices from "./reducer/productServices";

// export const createColorTable = (data) => async (dispatch) => {
//   try {
//     let res = await productServices.handleCreateColorTable(data);
//     if (res && res.errCode === 0) {
//       dispatch({
//         type: actionTypes.CREATE_COLOR_TABLE_SUCCESS,
//         payload: res,
//       });
//     } else {
//       dispatch({
//         type: actionTypes.CREATE_COLOR_TABLE_FALSE,
//       });
//     }
//   } catch (e) {
//     console.log(e);
//     dispatch({
//       type: actionTypes.CREATE_COLOR_TABLE_FALSE,
//     });
//   }
// };

export const createNewProduct = (data) => async (dispatch) => {
  try {
    let res = await productServices.handleCreateNewProduct(data);
    if (res && res.errCode === 0) {
      dispatch({
        type: actionTypes.CREATE_NEW_PRODUCT_SUCCESS,
        payload: res,
      });
    } else {
      dispatch({
        type: actionTypes.CREATE_NEW_PRODUCT_FALSE,
      });
    }
  } catch (e) {
    console.log(e);
    dispatch({
      type: actionTypes.CREATE_NEW_PRODUCT_FALSE,
    });
  }
};

export const fetchProduct = () => async (dispatch) => {
  try {
    let res = await productServices.handleFetchProduct();
    console.log(res)
    if (res && res.errCode === 0) {
      dispatch({
        type: actionTypes.FETCH_PRODUCT_SUCCESS,
        payload: res.data
      });
    } else {
      dispatch({
        type: actionTypes.FETCH_PRODUCT_FALSE,
      });
    }
  } catch (e) {
    console.log(e);
    dispatch({
      type: actionTypes.FETCH_PRODUCT_FALSE,
    });
  }
};
