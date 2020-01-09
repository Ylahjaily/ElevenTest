import React  from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Login from "../Login/Login";
import Signup from '../Signup/Signup';
import Users from "../Users/Users";
import Forum from "../Forum/Forum";
import './Home.css';

class Home extends React.Component
{
    render()
    {
        return (
            <div>
                <nav>
                    <Link className={"nav-link"} to={"/login"}> Login </Link>
                    <Link className={"nav-link"} to={"/signup"}> Sign Up </Link>
                    <Link className={"nav-link"} to={"/astronautes"}> Astronautes </Link>
                    <Link className={"nav-link"} to={"/astrochat"}> AstroChat </Link>
                </nav>

                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/astronautes" component={Users} />
                    <Route path="/astrochat" component={Forum} />
                </Switch>
            </div>
        )
    }
}

export default Home;
