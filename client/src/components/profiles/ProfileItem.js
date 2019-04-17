import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="column is-10 is-offset-1">
        <div className="card">
          <div className="card-content">
            <div className="columns">
              <div className="column">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-96x96">
                      <img
                        src={profile.user.avatar}
                        alt="Placeholder image"
                        className="is-rounded"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{profile.user.name}</p>
                  </div>
                </div>
                <div className="content">
                  <p>
                    {profile.status}{" "}
                    {isEmpty(profile.company) ? null : (
                      <span>at {profile.company}</span>
                    )}
                  </p>
                  <p>
                    {isEmpty(profile.location) ? null : (
                      <span>{profile.location}</span>
                    )}
                  </p>
                  <Link
                    to={`/profile/${profile.handle}`}
                    className="button is-primary"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <h3>
                    <strong>Skills:</strong>
                  </h3>
                  <ul>
                    {profile.skills.slice(0, 7).map((skill, index) => (
                      <li key={index}>
                        <i className="fa fa-check pr-1" /> {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
