import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const configureStore = () => {
  const enhancer = compose(applyMiddleware(thunk));

  const store = createStore(reducers, enhancer);

  return store;
};

export default configureStore;