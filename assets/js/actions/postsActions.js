import axios from 'axios';

export const SET_POSTS = 'SET_POSTS';

export const setPosts = (posts) => {
    return {
        type : SET_POSTS,
        posts
    }
}

export const fetchPosts = () =>{
    return dispatch => {
        console.log('fetch_posts')
        axios.get(`http://localhost:81/api/posts`).then(response =>
            dispatch(setPosts(response.data))
        )
    }
}

export const addPost = (data) => {
    return dispatch => {
        return fetch('http://localhost:81/api/post/new',{
            method : 'POST',
            body : JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}
