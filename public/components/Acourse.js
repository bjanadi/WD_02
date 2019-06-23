import React,{Component} from  'react';
import AAppNavbar from "./AAppNavbar";
import {NavLink} from "react-router-dom";
import {Button, Input, Label} from "reactstrap";
import icon from "../images/ilist.png";

class Acourse extends Component {

    constructor(props) {
        super(props);

        this.state = {
            code: '',
            name: '',
            credits: '',
            lecturerincharge: '',
            instructors:[]
        }



    };

    //handle Submit
    handleSubmit(e) {

        const course = {
            "code": e.course.code,
            "name": e.course.name,
            "credits": Number(e.course.credits),
            "lecturerincharge": e.course.lecturerincharge,
            "instructor": e.course.instructor,

        };
        alert(course.code + ", " + course.name + ", " + course.credits + ", " + course.lecturerincharge + ", " + course.instructor);

        fetch('http://localhost:3000/api/courses/add-course', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
    }

    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();

        const course_details = {
            code: document.getElementById('code').value,
            name: document.getElementById('name').value,
            credits: document.getElementById('credits').value,
            lecturerincharge: document.getElementById('lecturerincharge').value,
            instructor: document.getElementById('instructor').value,

        };

        this.handleSubmit({course: course_details});
    }

    componentDidMount()
    {
        fetch('http://localhost:3000/api/instructors/get-instructors')
            .then(res => {
                return res.json();
            })
            .then(json =>{
                console.log(json);
                this.setState( {
                    instructors:json
                })
            });


    };




    render() {
        return(
            <div>

                <AAppNavbar/>
                <div className='container bg-light' height="100%">

                    <div>
                        <ul className="nav nav-tabs nav-justified">
                            <li className="nav-item">
                                <NavLink to="/aregistration" className="nav-link" exact activeStyle={{color:'black'}}>Add Admin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/alist" className="nav-link" exact activeStyle={{color:'black'}}>Admin List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/ainstructor" className="nav-link" exact activeStyle={{color:'black'}}>Add Instructor</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/ailist" className="nav-link" exact activeStyle={{color:'black'}}>Instructor List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/acourse" className="nav-link" exact activeStyle={{color:'black'}}>Add Course</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aclist" className="nav-link" exact activeStyle={{color:'black'}}>Course List</NavLink>
                            </li>


                            <form>
                                <input type="search" placeholder="  Search..."/>
                                <button type="submit" className="btn-primary">Search</button>
                            </form>
                        </ul>
                    </div>




                    <div className='row'>
                        <div className='card' style={{margin: 'auto'}}>
                            <div className='card-header'>
                                <h1 className='modal-header'>Create a Course</h1>
                            </div>
                            <div className='card-body'>
                                    <form onSubmit={value => this.handleOnSubmit(value)}>
                                    <Label htmlFor="code">Course ID: </Label>
                                    <Input type="text" className='form-control' name='code' id='code' required/>
                                    <Label htmlFor="name">Course Name: </Label>
                                    <Input type="name" className='form-control' name='name' id='name' required/>
                                    <Label htmlFor="credits">Course Credits: </Label>
                                    <Input type="credits" className='form-control' name='credits' id='credits' required/>
                                    <Label htmlFor="lecturerincharge">Lecturer in Charge: </Label>
                                    <Input type="text" className='form-control' name='lecturerincharge' id='lecturerincharge' required/>
                                    <label htmlFor="instructor">Instructor:</label>
                                    <select className="form-control" name="instructor" id="instructor">
                                        <option>----------------------</option>
                                        {this.state.instructors.map( instructors => (
                                            <option key={instructors._id} value={instructors.username}>{instructors.username} {instructors.email}</option>
                                        ))}
                                    </select><br/><br/>
                                    <div className='form-group'>

                                            <Button type='submit' className="btn btn-primary">Create</Button>
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

export default Acourse;