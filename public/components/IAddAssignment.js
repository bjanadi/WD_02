import React,{Component} from 'react';
import {Label, Input,Button} from 'reactstrap';
import icon from "../images/books.png";
import ISessionNav from "./ISessionNav";
import {NavLink} from "react-router-dom";

class IAddAssignment extends Component{

    constructor(props) {
        super(props);
        this.state = {
            courseName: '',
            assignment: '',
            startDate: '',
            endDate: ''
        }
    };

    //handle Submit
    handleSubmit(e) {

        const Assignment = {
            "courseName": e.Assignment.courseName,
            "assignment": e.Assignment.assignment,
            "startDate": e.Assignment.startDate,
            "endDate": e.Assignment.endDate
        };
        alert(Assignment.courseName + ", " + Assignment.assignment + ", " + Assignment.startDate + ",  " + Assignment.endDate);

        fetch('http://localhost:3000/api/assignments/add-assignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Assignment)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
    }

    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();

        const assignment_details = {
            courseName: document.getElementById('courseName').value,
            assignment: document.getElementById('assignment').value,
            startDate: document.getElementById('startDate').value,
            endDate: document.getElementById('endDate').value
        };

        this.handleSubmit({Assignment: assignment_details});
    }




    render() {
        return (
            <div>
                <ISessionNav/>
                <div className='container bg-light' height="100%">

                    <div>
                        <ul className="nav nav-tabs nav-justified">
                            <li className="nav-item">
                                <NavLink to="/IAddAssignment" className="nav-link" exact activeStyle={{color:'black'}}>Add Assignment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/IAssignmentList" className="nav-link" exact activeStyle={{color:'black'}}>Assignment List</NavLink>
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
                                <h1 className='modal-header'>ADD ASSIGNMENT</h1>
                            </div>
                            <div className='card-body'>
                                <img src={icon} width = "30%"  height="30%" alt="graph" align="center" />
                                <form onSubmit={value => this.handleOnSubmit(value)}>
                                    <Label htmlFor="courseName">Course Name: </Label>
                                    <Input type="text" className='form-control' name='courseName' id='courseName' required/>
                                    <Label htmlFor="assignment">Assignment: </Label>
                                    <Input type="text" className='form-control' name='assignment' id='assignment' required/>
                                    <Label htmlFor="startDate">Start Date: </Label>
                                    <Input type="date" className='form-control' name='startDate' id='startDate' required/>
                                    <Label htmlFor="endDate">End Date: </Label>
                                    <Input type="date" className='form-control' name='endDate' id='endDate' required/><br/>
                                    <div className='form-group'>
                                        <Button type='submit' color="dark">Confirm</Button>
                                        <Button type='cancel' color="dark">Cancel</Button>
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
export default IAddAssignment;