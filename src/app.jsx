import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class App extends Component {

    constructor(){
        super()
        this.state = {
            fullName:'',
            userName:'',
            email:'',
            password:''
        }

        this.changeFullName = this.changeFullName.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(event){
        event.preventDefault() // preventing from default behaviour of form after submission

        const registered = {
            fullName: this.state.fullName,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered) // registered data will be sent to the server db
        .then(res => console.log(res.data))

        //after sending data to db ehat front end will do

        this.setState({
            fullName:'',
            userName:'',
            email:'',
            password:''
        })
    }

    changeFullName(event){
        this.setState({
            fullName: event.target.value
        })
    }
      
    changeUserName(event){
        this.setState({
            userName: event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email: event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password: event.target.value
        })
    }
    render(){
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type="text"
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                             />

                            <input type="text"
                            placeholder='Userame'
                            onChange={this.changeUserName}
                            value={this.state.userName}
                            className='form-control form-group'
                             />

                            <input type="text"
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                             />

                            <input type="password"
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.changePassword}
                            className='form-control form-group'
                             />  

                             <input type="Submit"
                             className='btn btn-danger btn-block'
                             defaultValue='Submit' 
                             />                          
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;