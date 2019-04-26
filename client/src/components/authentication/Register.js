import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser} from "../../actions/authActions";
import TextFieldGroup from "../form-elements/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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
    if (prop.errors) {
      this.setState({ errors: prop.errors });
    }
  };

  change = changeValue => {
    this.setState({ [changeValue.target.name]: changeValue.target.value });
  };

  submit = summitValue => {
    summitValue.preventDefault();

    let registeredUser;
    registeredUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(registeredUser, this.props.history);
  };

  render = () => {
    let errors;
    ({errors} = this.state);

    return <div className="column is-half is-offset-one-quarter">
      <form noValidate onSubmit={this.submit}>
        <TextFieldGroup
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.change}
            error={errors.name}
        />
        <TextFieldGroup
            placeholder="Email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.change}
            error={errors.email}
            info="Please use a gravatar email."
        />
        <TextFieldGroup
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.change}
            error={errors.password}
        />
        <TextFieldGroup
            placeholder="Confirm Password"
            name="password2"
            type="password"
            value={this.state.password2}
            onChange={this.change}
            error={errors.password2}
        />

        <div className="control">
          <button type="submit" className="button is-primary">
            Register
          </button>
        </div>
      </form>
    </div>;
  };
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

let exportValue = connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
export default exportValue;