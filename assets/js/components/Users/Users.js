import React from 'react';
import axios from 'axios';

class Users extends React.Component
{

    constructor(props){
        super(props)
        this.state = {
            error : null,
            isLoaded : false,
            items : []
        }
        this.getUsers = this.getUsers.bind(this);

    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers()
    {
        axios.get(`http://localhost:81/api/users`).then(response => {
            console.log(response)
            this.setState({
                'items' : response.data,
                'isLoaded' : true,
                'error' : null
            })
            console.log(this.state.items)
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
