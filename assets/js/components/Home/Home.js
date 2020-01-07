import React  from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Login from "../Login/Login";
import Signup from '../Signup/Signup';
import Users from "../Users/Users";
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
                </nav>

                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/astronautes" component={Users} />
                </Switch>
            </div>
        )
    }
}

export default Home;
