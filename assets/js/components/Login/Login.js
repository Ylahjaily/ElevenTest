import React  from 'react';
import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';

import Signup from '../Signup/Signup';
import './Login.css';

class Login extends React.Component
{
    render()
    {
        return (
            <div>
                <h1>Login</h1>

                <label>adress</label>
                <input type='email' name = 'email' placeholder='email'  />

                <label>password</label>
                <input type='password' name = 'password' placeholder='paswword' />

                <input type = 'submit' value ='Login' onClick={this.signup}/>
            </div>
        )
    }
}

export default Login;
