import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from "../../actions";
import CommentForm from "./CommentForm";
import history from "../../history";

export class UnconnectedCommentInput extends Component {
  onSubmit = formValues => {
    const { userId, streamId } = this.props;
    this.props.createComment({ ...formValues, userId, streamId });
  };

  render() {
    return (
      <div data-test="component-comment-input">
        <CommentForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { comments: state.comments };
};

export default connect(
  mapStateToProps,
  { createComment }
)(UnconnectedCommentInput);
