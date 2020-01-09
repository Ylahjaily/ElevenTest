import React from 'react';
import axios from 'axios';
import Userslist from "../UsersList/Userslist";

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
            this.setState({
                'items': response.data,
                'isLoaded': true,
                'error': null
            })
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error : error
            })
        })
    }

    render()
    {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>
        }
        else if (!isLoaded) {
            return (<div>Loading ...</div>)
        }
        return (
            <div>
                <Userslist items = {items} />
            </div>
        );
    }
}

export default Users;
