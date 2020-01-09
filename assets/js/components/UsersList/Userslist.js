import React from 'react';
import User from "../User/User";

class Userslist extends React.Component
{
    render()
    {
        return (
            <div>
                {this.props.items.map(item => {
                    return (<User item ={item} key ={item.id} />)
                })}
            </div>
        )
    }
}

export default Userslist;
