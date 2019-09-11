import moxios from "moxios";
import _ from "lodash";
import streams from "../apis/streams";
import { storeFactory } from "../../test/testUtils";
import {
  fetchStreams,
  fetchStream,
  createStream,
  editStream,
  deleteStream
} from "./";

const sampleStreams = {
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
};
const formValues = {
  title: "Test channel",
  dscription: "Test description"
};
describe("action creators", () => {
  let store;
  beforeEach(() => {
    store = storeFactory({ streams: sampleStreams });
    moxios.install(streams);
  });
  afterEach(() => {
    store = null;
    moxios.uninstall(streams);
  });
  it("`fetchStreams` action adds streams data to the redux store", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: sampleStreams
      });
    });

    return store.dispatch(fetchStreams()).then(() => {
      const newState = store.getState();
      expect(newState.streams).toEqual(_.mapKeys(sampleStreams, "id"));
    });
  });
  it("`fetchStream` action adds stream data to the redux store", () => {
    const id = 1;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: sampleStreams[id]
      });
    });
    return store.dispatch(fetchStream(id)).then(() => {
      const { streams } = store.getState();
      expect(streams[id]).toEqual(sampleStreams[id]);
    });
  });
  it("`createStream` action adds a new stream to the redux store", () => {
    const testStream = {
      id: 1,
      userId: 1,
      title: formValues.title,
      description: formValues.description
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: testStream
      });
    });
    return store.dispatch(createStream(formValues)).then(() => {
      const { streams } = store.getState();
      expect(streams[1]).toEqual(testStream);
    });
  });
  it("`editStream` action update a stream in the redux store", () => {
    const id = 1;
    const testStream = {
      id: 1,
      userId: 1,
      title: formValues.title,
      description: formValues.description
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: testStream
      });
    });
    return store.dispatch(editStream(id, formValues)).then(() => {
      const { streams } = store.getState();
      expect(streams[id]).toEqual(testStream);
    });
  });
  it("`deleteStream` action delete a stream from the redux store", () => {
    const id = 1;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {}
      });
    });
    return store.dispatch(deleteStream(id)).then(() => {
      const { streams } = store.getState();
      expect(streams[id]).toBeUndefined();
    });
  });
});
