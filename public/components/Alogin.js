import React,{Component} from 'react';
import {Button, Label, Input} from 'reactstrap';
import AAppNavbar from "./AAppNavbar";

import {NavLink} from "react-router-dom";

class Alogin extends Component{
    constructor(props){
        super(props);
        this.state= {
            token: '',
            email: '',
            password: '',
            sessionLoginId:''
        };

    };
    //handle Submit
    handleSubmit(e) {
        const login = {
            "email": e.login.email,
            "password": e.login.password
        };
        //Session storage of login ID
        let sessionLoginId = e.login.email;
        sessionStorage.setItem("SESSIONLOGIN",sessionLoginId);
        console.log(sessionStorage.getItem("SESSIONLOGIN"));

        alert(login.email + ", " + login.password);

        fetch('http://localhost:3000/api/admins/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(login)
        }).then(response => {
            console.log(response);
            alert("Successful Login");
        }).catch(err => {
            console.log(err);
            alert("Unsuccessful Login");
        });
        this.props.history.push(`/ahome`);
    }

    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();
        const login_details = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        };
        this.handleSubmit({login: login_details});
    }

    render() {
        return (
            <div>
                <AAppNavbar/>
                <div className='container bg-light'>
                    <div className='row'>
                        <div className='card' style={{margin: 'auto'}}>
                            <div className='card-header'>
                                <h1 className='modal-header'>LOGIN</h1>
                            </div>
                            <div className='card-body'>

                                <br/><br/>
                                <form   onSubmit={value => this.handleOnSubmit(value)}>
                                    <Label htmlFor="email">Email: </Label>
                                    <Input type="text" className='form-control' name='email' id='email' required/>
                                    <Label htmlFor="password">Password: </Label>
                                    <Input type="password" className='form-control' name='password' id='password' required/>

                                    <br/><br/>
                                    <Button type='submit' color="dark" className="btn btn-outline-primary">Login</Button>


                                </form>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        );
    }
}
export default Alogin;