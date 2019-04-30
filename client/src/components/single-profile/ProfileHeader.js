import React, { Component } from "react";
import isEmpty from "../../utils/empty";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="">
        <div className="level">
          <div className="level-item has-text-centered">
            <figure className="image is-256x256">
              <img className="is-rounded" src={profile.user.avatar} alt="" />
            </figure>
          </div>
        </div>
        <h3 className="title is-3">{profile.user.name}</h3>
        <p>
          {profile.status}{" "}
          {isEmpty(profile.company) ? null : <span>at {profile.company}</span>}
        </p>
        <p>
          {isEmpty(profile.location) ? null : <span>{profile.location}</span>}
        </p>
        <div className="">
          {isEmpty(profile.website) ? null : (
            <a
              className=""
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe fa-2x" />
            </a>
          )}
          {isEmpty(profile.social && profile.social.twitter) ? null : (
            <a
              className=""
              href={profile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter fa-2x" />
            </a>
          )}
          {isEmpty(profile.social && profile.social.facebook) ? null : (
            <a
              className=""
              href={profile.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-2x" />
            </a>
          )}
          {isEmpty(profile.social && profile.social.linkedin) ? null : (
            <a
              className=""
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
          )}
          {isEmpty(profile.social && profile.social.youtube) ? null : (
            <a
              className=""
              href={profile.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube fa-2x" />
            </a>
          )}
          {isEmpty(profile.social && profile.social.instagram) ? null : (
            <a
              className=""
              href={profile.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x" />
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
