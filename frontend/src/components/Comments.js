import React, {Component} from 'react';
import {fetchComments, voteOnComment} from "../utils/api";
import {timestampToDate} from "../utils/helper";
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';

class Comments extends Component {
    state = {
        comments: []
    }

    componentDidMount() {
        fetchComments(this.props.postId).then(result => this.setState({comments: result}));
    }

    vote(commentId, voteType) {
        voteOnComment(commentId, voteType).then(updatedComment => this.setState({
            comments: this.state.comments.map(c => c.id === updatedComment.id ? updatedComment : c) // replacing old post with voted one
        }));
    }

    render() {
        const comments = this.state.comments.filter(c => !c.deleted);

        return (
            <div className="container">
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
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Comments;