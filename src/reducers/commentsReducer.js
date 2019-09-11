import _ from "lodash";
import {
  FETCH_COMMENTS,
  CREATE_COMMENT,
  FETCH_COMMENT
} from "../actions/types";
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, comments: action.payload };
    case CREATE_COMMENT:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_COMMENT:
      return { ...state, [action.payload.id]: action.payload };

    default:
      return state;
  }
};
