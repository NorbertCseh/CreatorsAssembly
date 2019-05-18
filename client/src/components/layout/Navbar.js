import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <div className="navbar-item">
        <div className="buttons">
          <Link className="button is-primary has-text-black" to="/feed">
            My Feed
          </Link>
          <Link className="button is-primary has-text-black" to="/dashboard">
            My Profile
          </Link>
          <button
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="button is-danger"
          >
            Logout
          </button>
        </div>
      </div>
    );

    const guestLinks = (
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link className="button is-primary has-text-black" to="/register">
              Sign Up
            </Link>
            <Link className="button is-light has-text-black" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    );

    return (
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Creator Finder
          </a>

          <button
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div className="navbar-menu" id="navbarBasicExample">
          <div className="navbar-start">
            <div className="buttons">
              <Link className="button is-primary has-text-black" to="/profiles">
                {" "}
                Developers
              </Link>
            </div>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
