import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import {Link} from "react-router-dom";
import {addLike, deletePost, removeLike} from "../../actions/postActions";

class PostItem extends Component {
    onDeleteClick(id) {
        this.props.deletePost(id);
    }

    onLikeClick(id) {
        this.props.addLike(id);
    }

    onUnlikeClick(id) {
        this.props.removeLike(id);
    }

    findUserLike(likes) {
        const {auth} = this.props;
        if (likes.filter(like => like.user === auth.user.id).length > 0) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const {post, auth, showActions} = this.props;

        return (
            <article className="media">
                <figure className="media-left">
                    <p className="image is-128x128">
                        <img src={post.avatar}/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <div className="level">
                            <div className="level-item level-left">
                                <strong>{post.name}</strong>
                            </div>
                        </div>
                        <div className="level">
                            <div className="level-item level-left">{post.text}</div>
                        </div>
                    </div>
                    {showActions ? (
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <div className="level-item">
                                    <div className="buttons">
                                        <button
                                            onClick={this.onLikeClick.bind(this, post._id)}
                                            type="button"
                                            className="button is-primary is-small"
                                        >
                                            <i
                                                className={classnames("fas fa-thumbs-up", {
                                                    "text-info": this.findUserLike(post.likes)
                                                })}
                                            />
                                            <span className="badge badge-light">
                        {post.likes.length}
                      </span>
                                        </button>
                                        <button
                                            onClick={this.onUnlikeClick.bind(this, post._id)}
                                            type="button"
                                            className="button is-danger is-small"
                                        >
                                            <i className="text-secondary fas fa-thumbs-down"/>
                                        </button>
                                        <Link
                                            to={`/post/${post._id}`}
                                            className="button is-info is-small"
                                        >
                                            Comments
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    ) : null}
                </div>

                {post.user === auth.user.id ? (
                    <div className="media-right">
                        <button
                            onClick={this.onDeleteClick.bind(this, post._id)}
                            type="button"
                            className="delete"
                        />
                    </div>
                ) : null}
            </article>
        );
    }
}

PostItem.defaultProps = {
    showActions: true
};

PostItem.propTypes = {
    deletePost: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {deletePost, addLike, removeLike}
)(PostItem);
