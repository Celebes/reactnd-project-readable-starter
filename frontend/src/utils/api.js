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

export function fetchPost(postId) {
    console.log('fetchPost', postId);
    return fetch(`${ROOT_URL}/posts/${postId}`, AUTH_HEADER)
        .then((res) => res.json());
}

export function addPost(newPost) {
    console.log('api -> addPost', newPost);
    return fetch(`${ROOT_URL}/posts`, {
        headers: {
            'Authorization': 'whatever-you-want',
            'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newPost)
    }).then((res) => res.json());
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

export function editPost(postId, newTitle, newBody) {
    console.log('api -> editPost', postId, newTitle, newBody);
    return fetch(`${ROOT_URL}/posts/${postId}`, {
        headers: {
            'Authorization': 'whatever-you-want',
            'content-type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({title: newTitle, body: newBody})
    }).then((res) => res.json());
}

export function deletePost({id}) {
    console.log('api -> deletePost', id);
    return fetch(`${ROOT_URL}/posts/${id}`, {
        headers: {
            'Authorization': 'whatever-you-want'
        },
        method: 'DELETE'
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

export function addComment(newComment) {
    console.log('api -> addComment', newComment);
    return fetch(`${ROOT_URL}/comments`, {
        headers: {
            'Authorization': 'whatever-you-want',
            'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newComment)
    }).then((res) => res.json());
}

export function deleteComment({id}) {
    console.log('api -> deleteComment', id);
    return fetch(`${ROOT_URL}/comments/${id}`, {
        headers: {
            'Authorization': 'whatever-you-want'
        },
        method: 'DELETE'
    }).then((res) => res.json());
}

export function editComment(commentId, timestamp, newBody) {
    console.log('api -> editComment', commentId, timestamp, newBody);
    return fetch(`${ROOT_URL}/comments/${commentId}`, {
        headers: {
            'Authorization': 'whatever-you-want',
            'content-type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({timestamp: timestamp, body: newBody})
    }).then((res) => res.json());
}