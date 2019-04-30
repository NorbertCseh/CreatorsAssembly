import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <section className="hero is-black is-fullheight  has-bg-img">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">
              <strong>Creator Finder</strong>, find and connect creators around
              you!
            </h1>
            <hr />
            <div className="buttons">
              <Link className="button is-primary has-text-black" to="/register">
                Sign Up
              </Link>
              <Link className="button is-light" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
