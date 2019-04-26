import React, { Component } from "react";
import isEmpty from "../../utils/empty";
import { Link } from "react-router-dom";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="">
        <div className="level">
          <div class="level-item has-text-centered">
            <figure class="image is-256x256">
              <img className="is-rounded" src={profile.user.avatar} alt="" />
            </figure>
          </div>
        </div>
        <p className="is-size-7">
          <h3 className="title is-3">{profile.user.name}</h3>
        </p>
        <p>
          {profile.status}{" "}
          {isEmpty(profile.company) ? null : <span>at {profile.company}</span>}
        </p>
        <p>{isEmpty(profile.location) ? null : <p>{profile.location}</p>}</p>
        <div className="">
          {isEmpty(profile.website) ? null : (
            <a className="" href={profile.website} target="_blank">
              <i className="fas fa-globe fa-2x" />
            </a>
          )}
          {isEmpty(profile.social && profile.social.twitter) ? null : (
            <a className="" href={profile.social.twitter} target="_blank">
              <i className="fab fa-twitter fa-2x" />
            </a>
          )}
          {isEmpty(profile.social && profile.social.facebook) ? null : (
            <a className="" href={profile.social.facebook} target="_blank">
              <i className="fab fa-facebook fa-2x" />
            </a>
          )}
          {isEmpty(profile.social && profile.social.linkedin) ? null : (
            <a className="" href={profile.social.linkedin} target="_blank">
              <i className="fab fa-linkedin fa-2x" />
            </a>
          )}
          {isEmpty(profile.social && profile.social.youtube) ? null : (
            <a className="" href={profile.social.youtube} target="_blank">
              <i className="fab fa-youtube fa-2x" />
            </a>
          )}
          {isEmpty(profile.social && profile.social.instagram) ? null : (
            <a className="" href={profile.social.instagram} target="_blank">
              <i className="fab fa-instagram fa-2x" />
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
