import React,{Component} from 'react';
import LNavigation from './LNavigation';
import LAppNavbar from "./LAppNavbar";
import "../css/myprofile.css";
import {ListGroup, ListGroupItem} from 'reactstrap';
import {NavLink} from "react-router-dom"
import icon from "../images/humanicon.png";


class MyProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentDetails:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/students/get-details/'+ sessionStorage.getItem("SESSIONLOGIN"))
            .then( res => {
                return res.json();
            })
            .then(json => {
                console.log(json);
                this.setState({
                    studentDetails:json
                })
            })
    }

    render() {
        return (
            <div>
                <LAppNavbar/>
                <div className='container bg-light'>

                    <LNavigation/>
                    <div className='row' align="center">
                        <div className='card' style={{margin: 'auto'}}>
                            <div className='card-header'>
                                <h1 className='modal-header'>STUDENT PORTAL</h1>
                            </div>
                    <ListGroup>
                        <br />
                        <img src={icon} width = "60%"  height="60%" alt="graph" />
                        <br /><br /><br />

                        {this.state.studentDetails.map( studentDetails => (
                            <ListGroupItem key={studentDetails._id}>
                                <h2>{studentDetails.name}</h2>
                                <h3>{studentDetails.itnumber}</h3>
                                <h6>{studentDetails.email}</h6>
                                <h6>{studentDetails.phone}</h6>
                                <NavLink to="/updateStudent">
                                <button type="submit" className="btn-primary">Update Profile</button>
                                </NavLink>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                    </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default MyProfile;