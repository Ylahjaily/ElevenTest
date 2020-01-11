import axios from 'axios';

export const SET_USERS = 'SET_USERS';

export const setUsers = (users) => {
    return {
        type : SET_USERS,
        users
    }
}

export const fetchUsers = () =>{
    return dispatch => {
        console.log('fetch_user')
        axios.get(`http://localhost:81/api/users`).then(response =>
            dispatch(setUsers(response.data))
        )
    }
}

export const signUp = (data) => {
    return dispatch => {
        return fetch('http://localhost:81/register',{
            method : 'POST',
            body : JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}
