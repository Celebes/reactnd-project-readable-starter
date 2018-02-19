import {RECEIVE_CATEGORIES, RECEIVE_POSTS, VOTE_ON_POST, RECEIVE_POST, EDIT_POST} from "../actions";
import {combineReducers} from 'redux';
import {replacePostById} from "../utils/helper";

function categories(state = [], action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}

function posts(state = [], action) {
    console.log('posts reducer, state = ', state, 'action = ', action);
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_POST:
            const postInState = state.find(post => post.id === action.post.id);
            if (postInState) {
                return replacePostById(state, action.post);
            } else {
                return [action.post, ...state];
            }
        case VOTE_ON_POST:
            return replacePostById(state, action.post);
        case EDIT_POST:
            return replacePostById(state, action.post);
        default:
            return state;
    }
}

export default combineReducers({categories, posts});