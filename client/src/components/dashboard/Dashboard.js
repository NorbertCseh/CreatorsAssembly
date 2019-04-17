import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";
import Experience from "./Experience";
import Education from "./Education";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <h5 className="title is-5">
              Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </h5>
            <ProfileActions />
            <div className="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child ">
                  <Experience experience={profile.experience} />
                </article>
              </div>
            </div>
            <div className="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child ">
                  <Education education={profile.education} />
                </article>
              </div>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <h3 className="title is-3">Welcome {user.name}</h3>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="button is-link">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="container">
        <h3 className="title is-3">Dashboard</h3>
        {dashboardContent}
        <div className="level">
          <div className="level-item level-right">
            <div className="buttons">
              <button
                onClick={this.onDeleteClick.bind(this)}
                className="button is-danger"
              >
                Delete My Account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
