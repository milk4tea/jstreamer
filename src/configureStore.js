import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const middlewares = [ReduxThunk];
const createStoreWithMiddleware = composeEnhancers(
  applyMiddleware(...middlewares)
)(createStore);

export default createStoreWithMiddleware(rootReducer);
