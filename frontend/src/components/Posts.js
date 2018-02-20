import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {fetchPosts} from "../actions";
import {sortPostsByTimestamp, sortPostsByVoteScore} from "../utils/helper"
import Post from "./Post";

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

    render() {
        const {orderBy} = this.state;

        let posts = this.props.posts.filter(p => !p.deleted);
        posts = (orderBy === 'voteScore') ? sortPostsByVoteScore(posts) : sortPostsByTimestamp(posts);

        return (
            <div className="container">
                <div className="row">
                    <button className="btn btn-primary change-order-button"
                            onClick={() => this.changeOrderBy()}>
                        Order by: <b>{orderBy}</b>
                    </button>
                </div>
                {posts && posts.map(post => (
                    <Post key={post.id} post={post} detailsPage={false}/>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        categories: state.categories,
        posts: ownProps.category ? state.posts.filter(p => p.category === ownProps.category) : state.posts
    }
}

export default withRouter(connect(mapStateToProps)(Posts));