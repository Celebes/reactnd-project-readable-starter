import React, {Component} from 'react';
import {fetchComments, fetchDeleteComment, fetchVoteOnComment} from "../actions";
import {timestampToDate} from "../utils/helper";
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import NewComment from "./NewComment";
import {withRouter} from "react-router";
import {connect} from "react-redux";

class Comments extends Component {
    componentDidMount() {
        this.props.dispatch(fetchComments(this.props.postId))
    }

    vote(commentId, voteType) {
        this.props.dispatch(fetchVoteOnComment(commentId, voteType));
    }

    deleteComment = (comment) => {
        this.props.dispatch(fetchDeleteComment(comment));
    }

    render() {
        const {comments} = this.props;

        return (
            <div className="container">
                <NewComment postId={this.props.postId}/>
                {comments && comments.map(c => (
                    <div key={c.id} className="row comment">
                        <div className="col-1 text-center">
                            <button className="icon-btn" onClick={() => this.vote(c.id, 'upVote')}>
                                <FaArrowUp/>
                            </button>
                            <h2 className="vote-score">{c.voteScore}</h2>
                            <button className="icon-btn" onClick={() => this.vote(c.id, 'downVote')}>
                                <FaArrowDown/>
                            </button>
                        </div>
                        <div className="col">
                            <div><b>{c.author}</b> posted on <b>{timestampToDate(c.timestamp)}</b></div>
                            <div>
                                <pre>
                                    {c.body}
                                </pre>
                            </div>
                            <div>
                                {/*<button className="btn btn-primary btn-sm" onClick={() => this.openEditModal(post)}>edit</button> | /!*space*!/*/}
                                <button className="btn btn-danger btn-sm" onClick={() => this.deleteComment(c)}>delete</button> | {/*space*/}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments.filter(c => !c.deleted)
    }
}

export default withRouter(connect(mapStateToProps)(Comments));