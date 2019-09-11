import React from "react";
import { Field, reduxForm } from "redux-form";

class CommentForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} autoComplete="off"></textarea>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui reply form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className="field">
          <Field
            name="comment"
            component={this.renderInput}
            label="Enter a comment"
          />
        </div>
        <button
          data-test="submit-button"
          className="ui blue labeled submit icon button"
        >
          <i className="icon edit"></i> Add Reply
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.comment) {
    errors.title = "You must enter a comment";
  }

  return errors;
};

export default reduxForm({
  form: "commentForm",
  validate
})(CommentForm);
