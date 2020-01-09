import axios from 'axios';

const postUser = (userdata) => {
    const options = {
        url: 'http://localhost:81/register',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',

        },
        data: userdata
    };

    axios(options).then(response => {
        console.log(response)
    })

}

export default postUser