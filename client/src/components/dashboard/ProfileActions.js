import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="buttons has-text-black">
      <Link to="/edit-profile" className="button is-info">
        Edit Profile
      </Link>
      <Link to="/add-experience" className="button is-info">
        Add Experience
      </Link>
      <Link to="/add-education" className="button is-info">
        Add Education
      </Link>
    </div>
  );
};

export default ProfileActions;
