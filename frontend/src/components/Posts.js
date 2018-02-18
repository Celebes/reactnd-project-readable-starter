import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {fetchPosts} from "../actions";
import {timestampToDate} from "../utils/helper"
import {Link} from 'react-router-dom';

class Posts extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }

    getCategoryPathFromName(categoryName) {
        const {categories} = this.props;
        const category = categories.find(c => c.name === categoryName);
        return '/' + (category ? category.path : categoryName);
    }

    render() {
        const {posts} = this.props;

        return (
            <div className="container">
                {posts && posts.map(p => (
                    <div key={p.id} className="row">
                        <div className="post">
                            <h3>{p.title}</h3>
                            <div>
                                Posted by <b>{p.author}</b> {/*space*/}
                                on <b>{timestampToDate(p.timestamp)}</b> {/*space*/}
                                in <Link to={this.getCategoryPathFromName(p.category)}><b>{p.category}</b></Link>
                            </div>
                            <div></div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    console.log('Posts state', state);
    console.log('ownProps state', ownProps);
    return {
        categories: state.categories,
        posts: ownProps.category ? state.posts.filter(p => p.category === ownProps.category) : state.posts
    }
}

export default withRouter(connect(mapStateToProps)(Posts));