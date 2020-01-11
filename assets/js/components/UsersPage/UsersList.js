import React  from 'react';
import PropTypes from 'prop-types'
import UserCard from './UserCard'


export default function UsersList({users}) {
    const emptyMessage = (<p>There are no users yet</p>)

    const usersList = (
        <div>
        { users.map(user => <UserCard user={user}  key ={user.id}/>) }
        </div>
    )
    return (
        <div>
            {users.length === 0 ? emptyMessage : usersList }
        </div>
    )
}

UsersList.propTypes = {
    users : PropTypes.array.isRequired
}
