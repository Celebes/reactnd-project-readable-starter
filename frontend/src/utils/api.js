const AUTH_HEADER = {
    headers: {'Authorization': 'whatever-you-want'}
};

const ROOT_URL = 'http://localhost:3001';

export function fetchCategories() {
    return fetch(`${ROOT_URL}/categories`, AUTH_HEADER)
        .then((res) => res.json())
        .then((json) => json.categories);
}

export function fetchPosts() {
    return fetch(`${ROOT_URL}/posts`, AUTH_HEADER)
        .then((res) => res.json());
}

export function fetchComments(postId) {
    return fetch(`${ROOT_URL}/posts/${postId}/comments`, AUTH_HEADER)
        .then((res) => res.json());
}

export function voteOnPost(postId, voteType) {
    console.log('api -> voteOnPost', postId, voteType);
    return fetch(`${ROOT_URL}/posts/${postId}`, {
        headers: {
            'Authorization': 'whatever-you-want',
            'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({option: voteType})
    }).then((res) => res.json());
}

export function voteOnComment(commentId, voteType) {
    console.log('api -> voteOnPost', commentId, voteType);
    return fetch(`${ROOT_URL}/comments/${commentId}`, {
        headers: {
            'Authorization': 'whatever-you-want',
            'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({option: voteType})
    }).then((res) => res.json());
}