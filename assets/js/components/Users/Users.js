import React from 'react';
import axios from 'axios';

class Users extends React.Component
{

    getUsers()
    {
        axios.get(`http://localhost:81/users/api`).then(response => {
            console.log(response)
        })
    }

    render()
    {
        return (
            <div>
                <h1>Users</h1>
                <button onClick = {this.getUsers}>
                    See Users
                </button>
            </div>
        );
    }
}

export default Users;
