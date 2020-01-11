import axios from 'axios';

const postUser = (data) => {
    const options = {
        url: 'http://localhost:81/register',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',

        },
        data: data
    }

    axios(options).then(response => {
        sessionStorage.setItem('userdata',JSON.stringify(response.data))
        const userSession = (JSON.parse(sessionStorage.userdata))
        console.log(userSession.id)
    })

}


const postMessage = (message) => {
    const options = {
        url: 'http://localhost:81/api/message/post',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
        data: message
    }

    axios(options).then(response => {
        console.log(response)
    })

}

export default postUser
