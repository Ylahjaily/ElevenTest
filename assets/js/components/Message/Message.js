import React from 'react';
import './Message.css';
//import postMessage from "../../services/postData";
import axios from "axios";

class Message extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            wording : '',
        }
        this.sendMessage = this.sendMessage.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    sendMessage(){

        if(this.state.wording){
            {
                console.log(this.state)
                const options = {
                    url: 'http://localhost:81/api/message/post',
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8',
                    },
                    data: this.state
                }

                axios(options).then(response => {
                    console.log(response)
                })
            }
        }

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
                <label>Write something</label>
                <input type='textarea' name = 'wording' placeholder='message' onChange={this.onChange}/>
                <input type = 'submit' value ='Send' onClick={this.sendMessage}/>
            </div>
        );
    }
}

export default Message;

