const AUTH_HEADER = {
    headers: {'Authorization': 'whatever-you-want'}
};

export function fetchCategories() {
    console.log('fetchCategories!');
    return fetch('http://localhost:3001/categories', AUTH_HEADER)
        .then((res) => res.json())
        .then(result => console.log('result', result));
}