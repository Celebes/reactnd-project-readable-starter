import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'

class CategoryPage extends Component {
    render() {
        const {category} = this.props;

        return (
            <h1>CategoryPage - {category}</h1>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default withRouter(connect(mapStateToProps)(CategoryPage));