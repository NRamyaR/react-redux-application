import { combineReducers } from "redux";
import { productReducers, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProduct: productReducers,
  product: selectedProductReducer,
});
export default reducers;
