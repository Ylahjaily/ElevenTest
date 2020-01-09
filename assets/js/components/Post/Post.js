import React from 'react';
import './Post.css';

class Post extends React.Component
{
    render()
    {
        if(this.props.item === undefined)
        {
            return (<div></div>)
        }
        return (
            <div className = "post-card">
                <h1>{this.props.item.wording}</h1>
                <p>{this.props.item.post_author.name}</p>
            </div>
        )
    }
}

export default Post;
