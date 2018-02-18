import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import Posts from "./Posts";

class CategoryPage extends Component {
    render() {
        const {category} = this.props;

        return (
            <div>
                <h1>Category: <b>{category}</b></h1>
                <Posts category={category}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default withRouter(connect(mapStateToProps)(CategoryPage));