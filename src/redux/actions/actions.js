import {
    CREATE_POST, DELETE_POST,
    EDIT_POST,
    FETCH_POSTS, HIDE_COLLAPSE,
    HIDE_ERROR,
    HIDE_LOADER,
    SHOW_COLLAPSE,
    SHOW_ERROR,
    SHOW_LOADER
} from "../types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post       //этот пост обрабатывается в postReducer в case CREATE_POST => (action.payload)
    }
}

export function editPost(post) {
    return {
        type: EDIT_POST,
        payload: post       //этот пост обрабатывается в postReducer в case EDIT_POST => (action.payload)
    }
}

export function deletePost(postId) {
    return {
        type: DELETE_POST,
        payload: postId       //этот пост обрабатывается в postReducer в case EDIT_POST => (action.payload)
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showCollapse() {
    return {
        type: SHOW_COLLAPSE
    }
}

export function hideCollapse() {
    return {
        type: HIDE_COLLAPSE
    }
}

export function showErrorHide300sec(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ERROR,
            payload: text
        })

        setTimeout(() => {
            dispatch(hideError())
        }, 3000)
    }
}

export function showError(text) {
    return {
        type: SHOW_ERROR,
        payload: text
    }
}

export function hideError(text) {
    return {
        type: HIDE_ERROR
    }
}

export function fetchPosts() {
    return async dispatch => {
        try {
            dispatch(showLoader());
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const json = await response.json();
            setTimeout(() => {
                dispatch({type: FETCH_POSTS, payload: json})
                dispatch(hideLoader());
            }, 500);
        } catch (e) {
            dispatch(showErrorHide300sec('Bad load fetch posts'));
            dispatch(hideLoader());
        }

    }
}
