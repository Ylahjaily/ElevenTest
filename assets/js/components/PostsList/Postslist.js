import React from 'react';
import Post from "../Post/Post";


class Postslist extends React.Component
{
    render()
    {
        return (
            <div>
                {this.props.items.map(item => {
                    return (<Post item ={item} key ={item.id} />)
                })}
            </div>
        )
    }
}

export default Postslist;
