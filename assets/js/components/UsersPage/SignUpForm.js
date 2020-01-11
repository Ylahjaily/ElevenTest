import React  from 'react';
import {connect} from "react-redux";
import {signUp} from '../../actions/usersActions';
import {Redirect} from 'react-router-dom'

class SignUpForm extends React.Component
{

    constructor(props){
        super(props)
        this.state = {
            name : '',
            email : '',
            password : '',
            errors : {},
            loading : false,
            done : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        if(!!this.state.errors[e.target.name])
        {
            let errors = Object.assign({},this.state.errors)
            delete errors[e.target.name]
            this.setState({
                [e.target.name] : e.target.value,
                errors
            })
        } else {
            this.setState({[e.target.name] : e.target.value})
        }
    }

    handleSubmit(e){
        console.log(this.state)
        e.preventDefault()

        // Data Validation

        let errors = {};
        if(this.state.name === '') errors.name = 'name cannot be Empty'
        if(this.state.email === '') errors.email = 'email cannot be Empty'
        if(this.state.password === '') errors.password = 'password cannot be Empty'
        this.setState({ errors })

        const isValid = Object.keys(errors).length === 0

        // If no errors => send data

        if(isValid)
        {
            const {name,email,password} = this.state
            this.setState({loading : true})
            // Load data
            this.props.signUp({name,email,password})
                .then(
                    // Success Response Case

                    () => {this.setState({done : true})},

                    // Error Response Case

                    (err) => err.response.json().then(({errors}) => this.setState({errors, loading : false}))
                )
        }
    }

    render()
    {
        const form =  (

            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>

                <label htmlFor='name'>Name</label>
                <input type='text' id ='name' name='name' onChange={this.handleChange}/>

                <label htmlFor='email'>email</label>
                <input type='text'  id ='email' name='email' onChange={this.handleChange}/>

                <label htmlFor='password'>password</label>
                <input type='text'  id ='password' name='password' onChange={this.handleChange}/>

                <input type='submit' value='submit'/>
            </form>

        )
        return (
            <div>
            {this.state.done ? <Redirect to={'/'}/>: form}
            </div>
        )
    }
}

export default connect(null, {signUp})(SignUpForm)
