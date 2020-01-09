import React from 'react';
import './User.css';

class User extends React.Component
{
    render()
    {
        if(this.props.item === undefined)
        {
            return (<div></div>)
        }
        return (
            <div className = "user-card">
                <h1>{this.props.item.name}</h1>
                <h2>{this.props.item.email}</h2>
            </div>
        )
    }
}

export default User;
