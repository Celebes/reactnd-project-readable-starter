import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import Comments from "./Comments";

class PostDetails extends Component {
    render() {
        const postId = this.props.match.params.postId;

        return (
            <div>
                <h1>Comments:</h1>
                <Comments postId={postId}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default withRouter(connect(mapStateToProps)(PostDetails));