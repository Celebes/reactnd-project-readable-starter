import * as API from '../utils/api';

// categories
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

// posts
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const EDIT_POST = 'EDIT_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const VOTE_ON_POST = 'VOTE_ON_POST';

// comments
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_ON_COMMENT = 'VOTE_ON_COMMENT';

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

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    };
}

export const fetchAddComment = (comment) => dispatch => (
    API.addComment(comment).then(result => dispatch(addComment(result)))
);

export function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    };
}

export const fetchComments = (postId) => dispatch => (
    API.fetchComments(postId).then(result => dispatch(receiveComments(result)))
);

export function voteOnComment(comment) {
    return {
        type: VOTE_ON_COMMENT,
        comment
    };
}

export const fetchVoteOnComment = (commentId, voteType) => dispatch => (
    API.voteOnComment(commentId, voteType).then(result => dispatch(voteOnComment(result)))
);

export function deleteComment(comment) {
    return {
        type: DELETE_COMMENT,
        comment
    };
}

export const fetchDeleteComment = (comment) => dispatch => (
    API.deleteComment(comment).then(result => dispatch(deleteComment(result)))
);

export function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        comment
    };
}

export const fetchEditComment = (commentId, timestamp, newBody) => dispatch => (
    API.editComment(commentId, timestamp, newBody).then(result => dispatch(editComment(result)))
);