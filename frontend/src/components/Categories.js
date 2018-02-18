import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {fetchCategories} from "../actions";
import {Link} from 'react-router-dom';

class Categories extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCategories());
    }

    render() {
        let {categories} = this.props;
        categories = [{name: 'all', path: ''}, ...categories];

        return (
            <div className="categories">
                {categories.map(category => (
                    <Link key={category.name} to={`/${category.path}`}>
                        <button type="button"
                                className="btn btn-primary">{category.name}</button>
                    </Link>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

export default withRouter(connect(mapStateToProps)(Categories));