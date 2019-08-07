import { createStore, applyMiddleware } from "redux";
import { apiMiddleware } from "redux-api-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers from "./reducers";

const logger = ({ getState, dispatch }) => next => action => {
  next(action);
};

const middlewares = [logger, thunk, apiMiddleware];
const composedMiddlewares =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducers, composedMiddlewares);

export default store;
