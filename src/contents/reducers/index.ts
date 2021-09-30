import { combineReducers } from "redux";
import theme from "../reducers/ThemeReducer";

const appReducers = combineReducers({
  theme,
});

const rootReducer = (state: any, action: any) => {
  let newState = state;

  return appReducers(newState, action);
};

export default rootReducer;