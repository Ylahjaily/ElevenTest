import React  from 'react';
import PropTypes from 'prop-types';
import PostCard from "./PostCard";


export default function PostsList({posts}) {
    const emptyMessage = (<p>There are no posts yet</p>)

    const postsList = (
        <div>
        { posts.map(post => <PostCard post={post}  key ={post.id}/>) }
        </div>
    )
    return (
        <div>
            {posts.length === 0 ? emptyMessage : postsList }
        </div>
    )
}

PostsList.propTypes = {
    posts : PropTypes.array.isRequired
}
