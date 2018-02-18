import React, {Component} from 'react';
import {connect} from 'react-redux';
import MainPage from "./MainPage";
import CategoryPage from "./CategoryPage";
import {Route, Link} from 'react-router-dom';
import {withRouter} from 'react-router'
import PostPage from "./PostPage";

class App extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-light bg-faded">
                    <Link to="/" className="navbar-brand"><b>Readable</b></Link>
                </nav>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/:category" component={CategoryPage}/>
                <Route path="/:category/:postId" component={PostPage}/>
            </div>
        );
    }
}

export default withRouter(connect()(App));
