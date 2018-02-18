import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCategories} from "../actions";
import MainPage from "./MainPage";
import CategoryPage from "./CategoryPage";
import {Route, Link} from 'react-router-dom';
import {withRouter} from 'react-router'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchCategories());
    }

    render() {
        const {categories} = this.props;

        return (
            <div className="container">
                <nav className="navbar navbar-light bg-faded">
                    <Link to="/" className="navbar-brand">Readable</Link>
                </nav>
                <Route exact path="/" render={() => (
                    <MainPage categories={categories}/>
                )}/>
                {categories.map(category => (
                    <Route key={category.name} path={`/${category.path}`} render={() => (
                        <CategoryPage category={category.name}/>
                    )}/>
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        categories: state.categories
    }
}

export default withRouter(connect(mapStateToProps)(App));
