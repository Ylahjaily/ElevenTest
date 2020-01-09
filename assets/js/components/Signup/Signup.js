import React from 'react';
import './Signup.css';
import postUser from "../../services/postData";

class Signup extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            email : '',
            password : ''
        }
        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    signup(){
        postUser(this.state)
    }

    onChange(e){
        console.log('change')
        this.setState({[e.target.name] : e.target.value})
        console.log(this.state)
    }

    render()
    {
        return (
            <div>
                <h1>Sign up</h1>

                <label>Name</label>
                <input type='text' name = 'name' placeholder='name' onChange={this.onChange}/>

                <label>email</label>
                <input type='text' name = 'email' placeholder='email' onChange={this.onChange}/>

                <label>password</label>
                <input type='password' name = 'password' placeholder='paswword' onChange={this.onChange} />

                <input type = 'submit' value ='Sign Up' onClick={this.signup}/>
            </div>
        );
    }
}

export default Signup;

