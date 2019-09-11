import React, { Component } from "react";
import { connect } from "react-redux";

export class UnconnectedCommentInput extends Component {
  render() {
    return (
      <div data-test="component-comment-input">
        <form className="ui reply form">
          <div className="field">
            <textarea data-test="input-box" name="comment"></textarea>
          </div>
          <button
            data-test="submit-wbutton"
            className="ui blue labeled submit icon button"
          >
            <i className="icon edit"></i> Add Reply
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(UnconnectedCommentInput);
