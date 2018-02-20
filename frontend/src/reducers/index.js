import {
    RECEIVE_CATEGORIES,
    RECEIVE_POSTS,
    VOTE_ON_POST,
    RECEIVE_POST,
    EDIT_POST,
    ADD_POST,
    DELETE_POST,
    RECEIVE_COMMENTS,
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
    VOTE_ON_COMMENT
} from "../actions";
import {combineReducers} from 'redux';
import {replaceObjectInArrayById} from "../utils/helper";

function categories(state = [], action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}

function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_POST:
            const postInState = state.find(post => post.id === action.post.id);
            if (postInState) {
                return replaceObjectInArrayById(state, action.post);
            } else {
                return [action.post, ...state];
            }
        case VOTE_ON_POST:
            return replaceObjectInArrayById(state, action.post);
        case EDIT_POST:
            return replaceObjectInArrayById(state, action.post);
        case ADD_POST:
            return [...state, action.post];
        case DELETE_POST:
            return state.filter(p => p.id !== action.post.id);
        default:
            return state;
    }
}

function comments(state = [], action) {
    console.log('comments reducer, state=', state, 'action=', action);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
        case ADD_COMMENT:
            return [...state, action.comment];
        case EDIT_COMMENT:
            return replaceObjectInArrayById(state, action.comment);
        case DELETE_COMMENT:
            return state.filter(c => c.id !== action.comment.id);
        case VOTE_ON_COMMENT:
            return replaceObjectInArrayById(state, action.comment);
        default:
            return state;
    }
}

export default combineReducers({categories, posts, comments});