export const FETCH_ASTRONAUTES = 'FETCH_ASTRONAUTES';
export const FETCH_ASTRONAUTE = 'FETCH_ASTRONAUTE';

const baseUrl ='http://localhost:81'

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

export const fetchAstronautes = () => {
    return dispatch => {
        fetch(`${baseUrl}` + '/api/astronautes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => dispatch(setAstronautes(data)))
    }
}

export const fetchAstronaute = (id) => {
    return dispatch => {
        fetch(`${baseUrl}`+'/api/astronautes/'+`${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => dispatch(setAstronaute(data)))
    }
}

export const addAstronaute = (data) => {
    return dispatch => {
        return fetch(`${baseUrl}`+'/api/new/astronaute',{
            method : 'POST',
            body : JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
            },
        })
    }
}

