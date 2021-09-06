import {CREATE_POST, DELETE_POST, EDIT_POST, FETCH_POSTS} from "./types";

const initialState = {
    posts: [
        {
            id: 1630394554061,
            title: "Lorem ipsum dolor sit amet",
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nunc, volutpat tristique malesuada eget, interdum in orci. Morbi egestas orci a leo tempor posuere. Maecenas consectetur tincidunt ligula vel scelerisque. Fusce tortor velit, pharetra nec pretium nec, fringilla at lacus. Morbi blandit nulla vitae nisl euismod, id posuere purus imperdiet.'
        },
        {
            id: 1630394553061,
            title: "Donec quam lorem",
            content: 'Donec quam lorem, tempor ac ornare eget, ultrices ac erat. Praesent ultrices metus nec nisl rutrum, at blandit eros pharetra. Quisque maximus id felis auctor posuere. '
        },
        {
            id: 1630393553061,
            title: "Nam sed nisl",
            content: 'Nam sed nisl ac orci tempor dignissim ut ut purus. Pellentesque lectus sem, elementum eget massa eu, lobortis vestibulum purus. Aenean vulputate pellentesque risus, vel pulvinar nibh mattis quis. Aliquam ut molestie lorem. '
        },

    ],
    fetchedPosts: []
}
let newPost = [];
export const postReducer = (
    state = initialState,
    action) => {
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat(action.payload)}
        //return {...state, posts: [...state.posts, action.payload]}
        case EDIT_POST:
            newPost = state.posts.map(post => {
                if (post.id === action.payload.id) {
                    post.title = action.payload.title;
                    post.content = action.payload.content;
                }
                return post
            })
            return {...state, posts: newPost}
        case DELETE_POST:
            newPost = state.posts.filter(post => post.id !== action.payload);
            return {...state, posts: newPost}

        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload}

        default:
            return state;
    }
}