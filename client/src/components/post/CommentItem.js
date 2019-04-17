import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/postActions";

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <article className="media">
        <figure className="media-left">
          <p class="image is-64x64">
            <img src={comment.avatar} alt="" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <div className="level">
              <div className="level-item level-left">
                <strong>{comment.name}</strong>
              </div>
            </div>
            <div className="level">
              <div className="level-item level-left">{comment.text}</div>
            </div>
          </div>
        </div>
        {comment.user === auth.user.id ? (
          <div className="media-right">
            <button
              onClick={this.onDeleteClick.bind(this, postId, comment._id)}
              type="button"
              className="delete"
            />
          </div>
        ) : null}
      </article>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
