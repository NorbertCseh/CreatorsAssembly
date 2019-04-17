import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push("/not-found");
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="level">
            <div className="level-right">
              <div className="level-item">
                <Link
                  to="/profiles"
                  className="button is-danger has-text-black"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-primary has-text-centered has-text-black">
                    <ProfileHeader profile={profile} />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-primary">
                    {profile.githubusername ? (
                      <ProfileGithub username={profile.githubusername} />
                    ) : null}
                  </article>
                </div>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-primary">
                  <ProfileAbout profile={profile} />
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-primary">
                <div class="content">
                  <ProfileCreds
                    education={profile.education}
                    experience={profile.experience}
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      );
    }

    return <div className="">{profileContent}</div>;
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
