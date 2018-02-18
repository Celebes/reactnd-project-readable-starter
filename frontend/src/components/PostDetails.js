import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'

class PostDetails extends Component {
    render() {
        console.log('PostDetails props', this.props);

        return (
            <div>
                post
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default withRouter(connect(mapStateToProps)(PostDetails));