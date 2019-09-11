import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import CommentInput from "./CommentInput";
import { createComment } from "../../actions";
import { CREATE_COMMENT } from "../../actions/types";
import CommentForm from "./CommentForm";
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

const initialState = {
  comments: [
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
};

describe("render", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(initialState);
  });
  it("renders component without error", () => {
    const component = findByTestAttr(wrapper, "component-comment-input");
    expect(component).toHaveLength(1);
  });
  it("renders CommentForm", () => {
    const commentForm = wrapper.find(CommentForm);
    expect(commentForm).toHaveLength(1);
  });
});

describe("createComment action dispatcher", () => {
  let store;
  const formData = {
    userId: 1,
    streamId: 1,
    comment: "test comment"
  };
  beforeEach(() => {
    store = storeFactory(initialState);
  });
  it("updates state correctly for adding comment", () => {
    // store.dispatch(createComment(formData));
    // const newState = store.getState();
    // expect(newState.comments).toHaveLength(3);
  });
});
