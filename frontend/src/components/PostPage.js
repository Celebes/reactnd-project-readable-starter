import React, {Component} from 'react';
import Comments from "./Comments";
import Post from "./Post";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {fetchPost} from "../actions";

class PostPage extends Component {
    constructor(props) {
        super(props);
        props.dispatch(fetchPost(props.match.params.postId));
    }

    render() {
        const {post} = this.props;

        return (
            post ?
                <div>
                    <Post post={post} detailsPage={true}/>
                    <h1>Comments:</h1>
                    <Comments postId={post.id}/>
                </div>
                : <div>Loading</div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        post: state.posts.find(p => p.id === ownProps.match.params.postId)
    }
}

export default withRouter(connect(mapStateToProps)(PostPage));