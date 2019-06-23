import React,{Component} from 'react';
import {Label, Input,Button} from 'reactstrap';
import icon from "../images/admin.png";
import AAppNavbar from "./AAppNavbar";
import {NavLink} from "react-router-dom";

class Aregistration extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            phone: ''
        }
    };

    //handle Submit
    handleSubmit(e) {

        const admin = {
            "username": e.admin.username,
            "password": e.admin.password,
            "email": e.admin.email,
            "phone": e.admin.phone
        };
        alert(admin.username + ", " + admin.password + ", " + admin.email + ",  " + admin.phone);

        fetch('http://localhost:3000/api/admins/register-admin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
    }

    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();

        const admin_details = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };

        this.handleSubmit({admin: admin_details});
    }




    render() {
        return (
            <div>
                <AAppNavbar/>
                <div className='container bg-light' height="100%">

                    <div>
                        <ul className="nav nav-tabs nav-justified">
                            <li className="nav-item">
                                <NavLink to="/aregistration" className="nav-link" exact activeStyle={{color:'black'}}>Add Admin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aregistration" className="nav-link" exact activeStyle={{color:'black'}}>Admin List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/approvedCourses" className="nav-link" exact activeStyle={{color:'black'}}>Add Instructor</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aregistration" className="nav-link" exact activeStyle={{color:'black'}}>Instructor List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/myprofile" className="nav-link" exact activeStyle={{color:'black'}}>Add Course</NavLink>
                            </li>


                            <form>
                                <input type="search" placeholder="  Search a Course"/>
                                <button type="submit" className="btn-primary">Search</button>
                            </form>
                        </ul>
                    </div>




                    <div className='row'>
                        <div className='card' style={{margin: 'auto'}}>
                            <div className='card-header'>
                                <h1 className='modal-header'>ADMIN REGISTRATION</h1>
                            </div>
                            <div className='card-body'>
                                <img src={icon} width = "30%"  height="30%" alt="graph" align="center" />
                                <form onSubmit={value => this.handleOnSubmit(value)}>
                                    <Label htmlFor="username">Username: </Label>
                                    <Input type="text" className='form-control' name='username' id='username' required/>
                                    <Label htmlFor="password">Password: </Label>
                                    <Input type="password" className='form-control' name='password' id='password' required/>
                                    <Label htmlFor="email">Email: </Label>
                                    <Input type="email" className='form-control' name='email' id='email' required/>
                                    <Label htmlFor="phone">Phone: </Label>
                                    <Input type="text" className='form-control' name='phone' id='phone' required/><br/>
                                    <div className='form-group'>
                                        <Button type='submit' color="dark">Register</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Aregistration;