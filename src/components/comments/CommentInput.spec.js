import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import CommentInput from "./CommentInput";

/**
 * Factory function to create a ShallowWrapper for the CommentInput component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<CommentInput store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      comments: {
        1: [
          {
            id: 1,
            streamId: 1,
            userId: 1,
            comments: "test comment"
          },
          {
            id: 2,
            streamId: 1,
            userId: 1,
            comments: "test comment 2"
          }
        ]
      }
    };
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-comment-input");
    expect(component).toHaveLength(1);
  });
  it("renders input box", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    expect(inputBox).toHaveLength(1);
  });
  it("renders submit button", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton).toHaveLength(1);
  });
});

describe("update state", () => {
  it("", () => {});
});
