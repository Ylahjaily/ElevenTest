import React  from 'react';
import {connect} from "react-redux";
import {addAstronaute} from '../../actions/astronautesActions';
import {Redirect} from 'react-router-dom'

class AstronauteForm extends React.Component
{

    constructor(props){
        super(props)
        this.state = {
            name : '',
            age : '',
            description : '',
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

        let errors = {};
        if(this.state.name === '') errors.name = 'name cannot be Empty'
        if(this.state.age === '') errors.age = 'age cannot be Empty'
        if(this.state.description === '') errors.description = 'description cannot be Empty'
        this.setState({ errors })

        const isValid = Object.keys(errors).length === 0

        if(isValid)
        {
            const {name,age,description} = this.state
            this.setState({loading : true})
            this.props.addAstronaute({name,age,description})
                .then(
                    () => {this.setState({done : true})},
                    (err) => err.response.json().then(({errors}) => this.setState({errors, loading : false}))
                )
        }
    }

    render()
    {
        const form =  (

            <form onSubmit={this.handleSubmit}>
                <h1>Add a new Astronaute !</h1>

                <label htmlFor='name'>Name</label>
                <input type='text' id ='name' name='name' onChange={this.handleChange}/>

                <label htmlFor='age'>Age</label>
                <input type='number'  id ='age' name='age' onChange={this.handleChange}/>

                <label htmlFor='description'>Description</label>
                <input type='text'  id ='description' name='description' onChange={this.handleChange}/>

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

export default connect(null, {addAstronaute})(AstronauteForm)
