import * as API from '../utils/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    };
}

export const fetchCategories = () => dispatch => (
    API.fetchCategories()
        .then(result => dispatch(receiveCategories(result)))
);

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    };
}

export const fetchPosts = () => dispatch => (
    API.fetchPosts()
        .then(result => dispatch(receivePosts(result)))
);