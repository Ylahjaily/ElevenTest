import React  from 'react';
import './Home.css';
import {Link, Switch, Route} from 'react-router-dom'
import UsersPage from "../UsersPage/UsersPage";
import SignUpForm from "../UsersPage/SignUpForm";
import PostsPage from "../PostPage/PostsPage";
import AddNewPostForm from "../PostPage/AddNewPostForm";

class Home extends React.Component
{
    render()
    {
        return (
            <div>

                <h1>Home page</h1>

                <Link to={'/users'}> Users</Link>
                <Link to={'/signup'}> Sign up</Link>
                <Link to={'/post/new'}> Add post</Link>
                <Link to={'/posts'}>Posts </Link>


                <Switch>
                    <Route path="/users" component={UsersPage} />
                    <Route path="/signup" component={SignUpForm} />
                    <Route path="/post/new" component={AddNewPostForm} />
                    <Route path="/posts" component={PostsPage} />
                </Switch>
            </div>
        )
    }
}

export default Home;
