import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id} className="">
        <h5 className="title is-5">{exp.company}</h5>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position:</strong> {exp.title}
        </p>
        {exp.location === "" ? null : (
          <p>
            <strong>Location: </strong> {exp.location}
          </p>
        )}
        {exp.description === "" ? null : (
          <p>
            <strong>Description: </strong> {exp.description}
          </p>
        )}
      </li>
    ));

    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree:</strong> {edu.degree}
        </p>
        <p>
          <strong>Field Of Study:</strong> {edu.fieldofstudy}
        </p>
        <p>
          {edu.description === "" ? null : (
            <span>
              <strong>Description: </strong> {edu.description}
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div>
        <div className="has-text-black">
          <h4 className="title is-4">Experience</h4>
          {expItems.length > 0 ? (
            <ul className="">{expItems}</ul>
          ) : (
            <p className="center">No Experience Listed</p>
          )}
        </div>
        <hr />
        <div className="has-text-black">
          <h4 className="title is-4">Education</h4>
          {eduItems.length > 0 ? (
            <ul className="">{eduItems}</ul>
          ) : (
            <p className="center">No Education Listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
