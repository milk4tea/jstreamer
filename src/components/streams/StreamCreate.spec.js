import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import StreamCreate, { UnconnectedStreamCreate } from "./StreamCreate";
import StreamForm from "./StreamForm";

/**
 * Factory function to return a "ShallowWrapper" with a specific redux store
 * @function setup
 * @param {Object} initialState - Redux state specific for StreamCreate Component
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<UnconnectedStreamCreate store={store} />);
  return wrapper;
};

const initialState = {
  streams: {
    1: {
      id: 1,
      userId: 1,
      title: "My channel 1",
      description: "My channel 1"
    },
    2: {
      id: 2,
      userId: 2,
      title: "My channel 2",
      description: "My channel 2"
    }
  }
};

describe("StreamCreate Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(initialState);
  });
  it("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-stream-create");
    expect(component).toHaveLength(1);
  });
  it("renders a stream form", () => {
    const streamForm = wrapper.find(StreamForm);
    expect(streamForm).toHaveLength(1);
  });
});
