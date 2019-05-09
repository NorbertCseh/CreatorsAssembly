import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "6f187da838f9d343f8cb",
      clientSecret: "72caccd250a16cacc5bd23ebec250d0d33321c61",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div key={repo.id} className="level">
        <div className="level-item level-left">
          <Link to={repo.html_url} className="button is-dark" target="_blank">
            {repo.name}
          </Link>
        </div>
      </div>
    ));

    return (
      <div ref="myRef" className="has-text-black">
        <h4 className="title is-4">Github Repos:</h4>
        <hr />
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;
