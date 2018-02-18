import * as API from '../utils/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
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

export function voteOnPost(post) {
    return {
        type: VOTE_ON_POST,
        post
    };
}

export const fetchVoteOnPost = (postId, voteType) => dispatch => (
    API.voteOnPost(postId, voteType).then(result => dispatch(voteOnPost(result)))
);