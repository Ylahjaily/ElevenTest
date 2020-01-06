import React from 'react';
import './Signup.css';

class Signup extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            address : '',
            country : '',
            password : ''
        }
        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    signup(){
        let baseUrl = 'http://localhost:81/users/login';

        return new Promise((resolve,reject) => {
            fetch(baseUrl, {
                method : 'POST',

                body : JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }

            })
                .then((response) => response.json())
                .then((responseJson) => {
                    resolve(responseJson)
                })
                .catch((error) => {
                    reject(error);
                });
        })
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

                <label>firstname</label>
                <input type='text' name = 'firstname' placeholder='firstname' onChange={this.onChange}/>

                <label>lastname</label>
                <input type='text' name = 'lastname' placeholder='lastname' onChange={this.onChange} />

                <label>email</label>
                <input type='text' name = 'email' placeholder='email' onChange={this.onChange}/>

                <label>country</label>
                <input type='text' name = 'country' placeholder='country' onChange={this.onChange} />

                <label>adress</label>
                <input type='text' name = 'address' placeholder='address' onChange={this.onChange} />

                <label>password</label>
                <input type='password' name = 'password' placeholder='paswword' onChange={this.onChange} />

                <input type = 'submit' value ='Login' onClick={this.signup}/>
            </div>
        );
    }
}


export default Signup;
