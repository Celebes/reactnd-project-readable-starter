import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router'

class MainPage extends Component {
    render() {
        const {categories} = this.props;

        return (
            <div>
                <h1>MainPage</h1>
                <h1>Categories:</h1>
                <div className="categories">
                    {categories.map(category => (
                        <Link key={category.name} to={`/${category.path}`}>
                            <button type="button"
                                    className="btn btn-primary">{category.name}</button>
                        </Link>
                    ))}
                </div>
                <h1>Posts:</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default withRouter(connect(mapStateToProps)(MainPage));