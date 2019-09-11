import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "../src/reducers";
import { middlewares } from "../src/configureStore";

/**
 * Create a testing store with imported reducers, middlewares and initial state.
 * globals: rootReducer, middlewares.
 * @function storeFactory
 * @param {object} initalState - Initial state for store.
 * @returns {Store} - Redux store
 */
export const storeFactory = initalState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initalState);
};

/**
 * Return node(s) with give data-test attribute.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme Shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
