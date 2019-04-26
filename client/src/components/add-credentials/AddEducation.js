import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import TextFieldGroup from "../form-elements/TextFieldGroup";
import TextAreaFieldGroup from "../form-elements/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEducation } from "../../actions/profileActions";

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      fieldofstudy: "",
      from: "",
      to: "",
      current: false,
      description: "",
      errors: {},
      disabled: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addEducation(eduData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="level">
          <div className="level-item level-left">
            <h1 className="title is-3">Add Education</h1>
          </div>
          <div className="level-item level-right">
            <Link to="/dashboard" className="button is-danger has-text-black">
              Go Back
            </Link>
          </div>
        </div>
        <small>* mandatory</small>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="* School"
            name="school"
            value={this.state.school}
            onChange={this.onChange}
            error={errors.school}
          />
          <TextFieldGroup
            placeholder="* Degree or Certification"
            name="degree"
            value={this.state.degree}
            onChange={this.onChange}
            error={errors.degree}
          />
          <TextFieldGroup
            placeholder="* Field of Study"
            name="fieldofstudy"
            value={this.state.fieldofstudy}
            onChange={this.onChange}
            error={errors.fieldofstudy}
          />
          <TextFieldGroup
            name="from"
            type="date"
            value={this.state.from}
            onChange={this.onChange}
            error={errors.from}
          />
          <TextFieldGroup
            name="to"
            type="date"
            value={this.state.to}
            onChange={this.onChange}
            error={errors.to}
            disabled={this.state.disabled ? "disabled" : ""}
          />
          <div className="field">
            <input
              type="checkbox"
              className="checkbox"
              name="current"
              value={this.state.current}
              checked={this.state.current}
              onChange={this.onCheck}
              id="current"
            />
            <label htmlFor="current" className="checkbox">
              Current Job
            </label>
          </div>
          <TextAreaFieldGroup
            placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            error={errors.description}
            info="Tell us what you learned!"
          />
          <div class="control">
            <button type="submit" class="button is-link has-text-black">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addEducation }
)(withRouter(AddEducation));
