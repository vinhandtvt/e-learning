import { combineReducers, createStore, applyMiddleware } from "redux";
import { courses } from "./reducers";
// import { danhMucKhoaHoc } from "./layDanhMucKhoaHocReducers";
import reduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  courses,
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
