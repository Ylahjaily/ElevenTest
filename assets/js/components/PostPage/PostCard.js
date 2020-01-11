import React  from 'react';
import PropTypes from "prop-types";

export default function PostCard({post})
{
    return (
        <div>
            <p>{post.wording}</p>
        </div>
    )
}

PostCard.proptypes = {
    post : PropTypes.object.isRequired
}

