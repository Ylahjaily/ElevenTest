import axios from 'axios';

export const FETCH_ASTRONAUTES = 'FETCH_ASTRONAUTES';
export const FETCH_ASTRONAUTE = 'FETCH_ASTRONAUTE';

export const setAstronautes = (astronautes) => {
    return {
        type : FETCH_ASTRONAUTES,
        astronautes
    }
}

export const setAstronaute = (astronaute) => {
    return {
        type : FETCH_ASTRONAUTE,
        astronaute
    }
}

export const fetchAstronautes = () =>{
    return dispatch => {
        axios.get(`http://localhost:81/api/astronautes`).then(response =>
            dispatch(setAstronautes(response.data))
        )
    }
}

export const fetchAstronaute = (id) =>{
    return dispatch => {
        axios.get(`http://localhost:81/api/astronautes/${id}`).then(response =>
            dispatch(setAstronaute(response.data))
        )
    }
}

export const addAstronaute = (data) => {
    return dispatch => {
        return fetch('http://localhost:81/api/new/astronaute',{
            method : 'POST',
            body : JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}

