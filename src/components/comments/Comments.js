import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../actions";
import CommentInput from "./CommentInput";

class Comments extends Component {
  updateHandler = () => {
    this.setState({
      now: new Date()
    });
  };

  componentDidMount() {
    this.props.fetchComments();
  }

  renderComments(comments) {
    return comments.map(comment => {
      return (
        <div className="comment" key={comment.id}>
          <a className="avatar" href="#">
            {comment.id % 2 === 0 ? (
              <img
                src="https://semantic-ui.com/images/avatar/small/matt.jpg"
                alt="avatar"
              ></img>
            ) : (
              <img
                src="https://semantic-ui.com/images/avatar/small/jenny.jpg"
                alt="avatar"
              ></img>
            )}
          </a>
          <div className="content">
            <a className="author" href="#">
              {comment.id % 2 === 0 ? "Matt" : "Jenny"}
            </a>
            <div className="metadata">{`${comment.time} ${comment.date}`}</div>
            <div className="text">{comment.comment}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { userId, streamId } = this.props;
    if (!this.props.comments) {
      return (
        <div className="ui comments" data-test="component-comments">
          <h3 className="ui dividing header">Comments</h3>
          <CommentInput
            userId={userId}
            streamId={streamId}
            updateHandler={this.updateHandler}
          />
        </div>
      );
    }
    return (
      <div className="ui comments" data-test="component-comments">
        <h3 className="ui dividing header">Comments</h3>
        {this.renderComments(this.props.comments)}
        <CommentInput
          userId={userId}
          streamId={userId}
          updateHandler={this.updateHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.comments;
};

export default connect(
  mapStateToProps,
  { fetchComments }
)(Comments);
