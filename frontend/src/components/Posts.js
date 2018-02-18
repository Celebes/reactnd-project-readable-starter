import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {fetchPosts, fetchVoteOnPost} from "../actions";
import {timestampToDate, sortPostsByTimestamp, sortPostsByVoteScore} from "../utils/helper"
import {Link} from 'react-router-dom';
import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';

class Posts extends Component {
    state = {
        orderBy: 'voteScore' // or 'timestamp'
    }

    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }

    changeOrderBy() {
        const {orderBy} = this.state;
        const newOrderBy = orderBy === 'voteScore' ? 'timestamp' : 'voteScore'
        this.setState({
            orderBy: newOrderBy
        })
    }

    getCategoryPathFromName(categoryName) {
        const {categories} = this.props;
        const category = categories.find(c => c.name === categoryName);
        return '/' + (category ? category.path : categoryName);
    }

    vote(postId, voteType) {
        this.props.dispatch(fetchVoteOnPost(postId, voteType));
    }

    render() {
        let {posts} = this.props;
        const {orderBy} = this.state;

        posts = orderBy === 'voteScore' ? sortPostsByVoteScore(posts) : sortPostsByTimestamp(posts);

        return (
            <div className="container">
                <div className="row">
                    <button className="btn btn-primary change-order-button"
                            onClick={() => this.changeOrderBy()}>
                        Order by: <b>{orderBy}</b>
                    </button>
                </div>
                {posts && posts.map(p => (
                    <div key={p.id} className="row post">
                        <div className="col-1 text-center">
                            <button className="icon-btn" onClick={() => this.vote(p.id, 'upVote')}>
                                <FaArrowUp/>
                            </button>
                            <h2 className="vote-score">{p.voteScore}</h2>
                            <button className="icon-btn" onClick={() => this.vote(p.id, 'downVote')}>
                                <FaArrowDown/>
                            </button>
                        </div>
                        <div className="col">
                            <div>
                                <h3>{p.title}</h3>
                                <div>
                                    Posted by <b>{p.author}</b> {/*space*/}
                                    on <b>{timestampToDate(p.timestamp)}</b> {/*space*/}
                                    in <Link to={this.getCategoryPathFromName(p.category)}><b>{p.category}</b></Link>
                                </div>
                                <div><b>{p.commentCount}</b> comments | </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    console.log('Posts state', state);
    console.log('ownProps state', ownProps);
    return {
        categories: state.categories,
        posts: ownProps.category ? state.posts.filter(p => p.category === ownProps.category) : state.posts
    }
}

export default withRouter(connect(mapStateToProps)(Posts));