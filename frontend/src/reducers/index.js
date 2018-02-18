import {RECEIVE_CATEGORIES, RECEIVE_POSTS, VOTE_ON_POST} from "../actions";
import {combineReducers} from 'redux';

function categories(state = [], action) {
    console.log('categories reducer -> action', action);
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}

function posts(state = [], action) {
    console.log('posts reducer -> action', action);
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case VOTE_ON_POST:
            return state.map(post => post.id === action.post.id ? action.post : post) // replacing old post with voted one
        default:
            return state;
    }
}

export default combineReducers({categories, posts});