import React  from 'react';
import {connect} from "react-redux";
import {addPost} from '../../actions/postsActions';
import {Redirect} from 'react-router-dom'

class AddNewPostForm extends React.Component
{

    constructor(props){
        super(props)
        this.state = {
            wording : '',
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
        if(this.state.wording === '') errors.name = 'Message cannot be Empty'
        this.setState({ errors })

        const isValid = Object.keys(errors).length === 0

        // If no errors => send data

        if(isValid)
        {
            const {wording} = this.state
            this.setState({loading : true})
            // Load data
            this.props.addPost({wording})
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

                <label htmlFor='wording'>Message</label>
                <input type='text' id ='wording' name='wording' onChange={this.handleChange}/>

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

export default connect(null, {addPost})(AddNewPostForm)
