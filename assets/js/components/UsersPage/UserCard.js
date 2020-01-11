import React  from 'react';
import PropTypes from "prop-types";

export default function UserCard({user})
{
    return (
        <div>
            <p>{user.name}</p>
        </div>
    )
}

UserCard.proptypes = {
    user : PropTypes.object.isRequired
}

