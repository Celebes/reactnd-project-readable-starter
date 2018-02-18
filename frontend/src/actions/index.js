import * as API from '../utils/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

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
