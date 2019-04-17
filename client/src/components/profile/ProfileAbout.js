import React, { Component } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name;

    // Skill List
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="">
        <i className="fa fa-check" /> {skill}
      </div>
    ));

    return (
      <div className="columns">
        <div className="column has-text-black">
          <h3 className="title is-3">{firstName}'s Bio</h3>
          <hr />
          <p className="has-text-justified">
            {isEmpty(profile.bio) ? (
              <span>{firstName} does not have a bio</span>
            ) : (
              <span>{profile.bio}</span>
            )}
          </p>
        </div>
        <div className="column is-2 has-text-black">
          <h5 className="title is-5">Skills:</h5>
          <div className="">{skills}</div>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
