import { createStore, combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({
  reducer: reducer,
});
export const store = createStore(reducers);
