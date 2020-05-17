import api from "../../../services/api";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { addToCartSuccess } from "./actions";

function* addToCart({ id }) {  
  const response = yield call(api.get, `/products/${api}`);

  yield put(addToCartSuccess(response.data));
}

export default all([  
  takeLatest("@cart/ADD_REQUEST", addToCart)
]);