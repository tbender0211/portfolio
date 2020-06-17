import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TopNav from '../components/TopNav/TopNav';
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
    }

    handleSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
        axios({
            method: "POST", 
            url:"http://localhost:3001/send", 
            data:  this.state
          }).then((response)=>{
            if (response.data.status === 'success'){
              alert("Message Sent."); 
              this.resetForm()
            }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        this.setState({name: '', email: '', message: ''})
    }
    render() {
        return (
            <Grid>
                <TopNav />
                <div className='Contact'>
                    <form id='contact-form' onSubmit={this.handleSubmit.bind(this)} method='POST'>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input type='text' className='form-control' value={this.state.name} onChange={this.onNameChange.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleInputEmail1'>Email address</label>
                            <input type='email' className='form-control' aria-describedby='emailHelp' value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='message'>Message</label>
                            <textarea className='form-control' rows='5' value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </Grid>
        )
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
    
}

export default Contact;