import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import Posts from "./Posts";
import Categories from "./Categories";

class MainPage extends Component {
    render() {
        const {categories} = this.props;

        return (
            <div>
                <h1><b>/r/all</b></h1>
                <h1>Categories:</h1>
                <Categories/>
                <h1>Posts:</h1>
                <Posts/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('MainPage state', state);
    return {
        posts: state.posts
    }
}

export default withRouter(connect(mapStateToProps)(MainPage));