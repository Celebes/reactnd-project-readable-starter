import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import Posts from "./Posts";
import Categories from "./Categories";
import NewPost from "./NewPost";

class CategoryPage extends Component {
    render() {
        const category = this.props.match.params.category;

        return (
            <div>
                <h1><b>/r/{category}</b></h1>
                <NewPost/>
                <h1>Categories:</h1>
                <Categories/>
                <h1>Posts:</h1>
                <Posts category={category}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default withRouter(connect(mapStateToProps)(CategoryPage));