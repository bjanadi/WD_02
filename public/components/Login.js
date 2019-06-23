import React,{Component} from 'react';
import {Button, Label, Input} from 'reactstrap';
import icon from "../images/humanicon.png";
import AppNavbar from "./home/AppNavbar";
import {NavLink} from "react-router-dom";

class Login extends Component{
    constructor(props){
        super(props);
        this.state= {
            token: '',
            studentId: '',
            password: '',
            sessionLoginId:''
        };

    };
    //handle Submit
    handleSubmit(e) {
        const login = {
            "studentId": e.login.studentId,
            "password": e.login.password
        };
        //Session storage of login ID
        let sessionLoginId = e.login.studentId;
        sessionStorage.setItem("SESSIONLOGIN",sessionLoginId);
        console.log(sessionStorage.getItem("SESSIONLOGIN"));

        alert(login.studentId + ", " + login.password);

        fetch('http://localhost:3000/api/students/login', {
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
        this.props.history.push(`/lhome`);

    }

    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();
        const login_details = {
            studentId: document.getElementById('studentId').value,
            password: document.getElementById('password').value,
        };
        this.handleSubmit({login: login_details});
    }

    render() {
        return (
            <div>
            <AppNavbar/>
            <div className='container bg-light'>
                <div className='row'>
                    <div className='card' style={{margin: 'auto'}}>
                        <div className='card-header'>
                            <h1 className='modal-header'>LOGIN</h1>
                        </div>
                        <div className='card-body'>
                            <img src={icon} width = "80%"  height="60%" alt="graph" />
                            <br/><br/>
                            <form onSubmit={value => this.handleOnSubmit(value)}>
                                <Label htmlFor="ITNumber">IT Number: </Label>
                                <Input type="text" className='form-control' name='studentId' id='studentId' required/>
                                <Label htmlFor="password">Password: </Label>
                                <Input type="password" className='form-control' name='password' id='password' required/>
                                <Button type='submit' color="dark" className="btn btn-block">Login</Button>
                                <br/>
                                <NavLink to="/register">
                                    New User?
                                </NavLink>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        );
    }
}
export default Login;