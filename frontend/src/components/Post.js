import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import {fetchVoteOnPost} from "../actions";
import {timestampToDate} from "../utils/helper";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class Post extends Component {
    vote(postId, voteType) {
        this.props.dispatch(fetchVoteOnPost(postId, voteType));
    }

    render() {
        const {post, detailsPage} = this.props;

        return (
            <div key={post.id} className="row post">
                <div className="col-1 text-center">
                    <button className="icon-btn" onClick={() => this.vote(post.id, 'upVote')}>
                        <FaArrowUp/>
                    </button>
                    <h2 className="vote-score">{post.voteScore}</h2>
                    <button className="icon-btn" onClick={() => this.vote(post.id, 'downVote')}>
                        <FaArrowDown/>
                    </button>
                </div>
                <div className="col">
                    <div>
                        {
                            detailsPage ?
                                <h3>{post.title}</h3> :
                                <Link to={`${post.category}/${post.id}`}><h3>{post.title}</h3></Link>
                        }
                        <div>
                            Posted by <b>{post.author}</b> {/*space*/}
                            on <b>{timestampToDate(post.timestamp)}</b> {/*space*/}
                            in <b>{post.category}</b>
                        </div>
                        {detailsPage && <div>
                            <pre>{post.body}</pre>
                        </div>}
                        <div><b>{post.commentCount}</b> comments |</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect()(Post));