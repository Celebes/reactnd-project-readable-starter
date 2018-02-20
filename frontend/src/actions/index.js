import * as API from '../utils/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const EDIT_POST = 'EDIT_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_ON_POST = 'VOTE_ON_POST';

export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    };
}

export const fetchCategories = () => dispatch => (
    API.fetchCategories().then(result => dispatch(receiveCategories(result)))
);

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    };
}

export const fetchPosts = () => dispatch => (
    API.fetchPosts().then(result => dispatch(receivePosts(result)))
);

export function receivePost(post) {
    return {
        type: RECEIVE_POST,
        post
    };
}

export const fetchPost = (postId) => dispatch => (
    API.fetchPost(postId).then(result => dispatch(receivePost(result)))
);

export function voteOnPost(post) {
    return {
        type: VOTE_ON_POST,
        post
    };
}

export const fetchVoteOnPost = (postId, voteType) => dispatch => (
    API.voteOnPost(postId, voteType).then(result => dispatch(voteOnPost(result)))
);

export function editPost(post) {
    return {
        type: EDIT_POST,
        post
    };
}

export const fetchEditPost = (postId, newTitle, newBody) => dispatch => (
    API.editPost(postId, newTitle, newBody).then(result => dispatch(editPost(result)))
);

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    };
}

export const fetchAddPost = (post) => dispatch => (
    API.addPost(post).then(result => dispatch(addPost(result)))
);

export function deletePost(post) {
    return {
        type: DELETE_POST,
        post
    };
}

export const fetchDeletePost = (post) => dispatch => (
    API.deletePost(post).then(result => dispatch(deletePost(result)))
);