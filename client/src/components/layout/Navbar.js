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
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div>
        <Link className="navbar-item" to="/feed">
          My Feed
        </Link>
        <Link className="navbar-item" to="/dashboard">
          My Profile
        </Link>
        <a
          href=""
          onClick={this.onLogoutClick.bind(this)}
          className="navbar-item"
        >
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: "25px", marginRight: "5px" }}
          />{" "}
          Logout
        </a>
      </div>
    );

    const guestLinks = (
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <Link className="button is-primary" to="/register">
              Sign Up
            </Link>
            <Link className="button is-light" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    );

    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div className="navbar-menu" id="navbarBasicExample">
          <div className="navbar-start">
            <Link className="navbar-item" to="/profiles">
              {" "}
              Developers
            </Link>
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
