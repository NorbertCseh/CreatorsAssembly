import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../form-elements/TextFieldGroup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  };

  componentWillReceiveProps = prop => {
    if (prop.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (prop.errors) {
      this.setState({ errors: prop.errors });
    }
  };
  state;

  submit = submitValue => {
    submitValue.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  change = changeValue => {
    this.setState({ [changeValue.target.name]: changeValue.target.value });
  };

  render = () => {
    let errors;
    ({ errors } = this.state);

    return (
      <div className="column is-half is-offset-one-quarter">
        <form onSubmit={this.submit}>
          <TextFieldGroup
            placeholder="Email Address"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.change}
            error={errors.email}
          />

          <TextFieldGroup
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.change}
            error={errors.password}
          />
          <div className="control">
            <button type="submit" className="button is-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  };
}

Login["propTypes"] = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

let mapStateToProps;
mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

let exportValue = connect(
  mapStateToProps,
  { loginUser }
)(Login);
export default exportValue;
