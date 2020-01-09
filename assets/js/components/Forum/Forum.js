import React from 'react';
import axios from 'axios';
import Postslist from "../PostsList/Postslist";

class Forum extends React.Component
{

    constructor(props){
        super(props)
        this.state = {
            error : null,
            isLoaded : false,
            items : []
        }
        this.getPosts = this.getPosts.bind(this);
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts()
    {
        axios.get(`http://localhost:81/api/posts`).then(response => {
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
                <Postslist items = {items} />
            </div>
        );
    }
}

export default Forum;
