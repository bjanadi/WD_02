import React,{Component} from 'react';
import {Label, Input,Button} from 'reactstrap';
import IAppNavbar from "./IAppNavbar";
import {NavLink} from "react-router-dom";

class IMarks extends Component{

    constructor(props) {
        super(props);
        this.state = {
            courseID:'',
            courseName:'',
            assignmentID:'',
            assignmentName:'',
            uploadID:'',
            studentID: '',
            marks: ''
        }
    };

    //handle Submit
    handleSubmit(e) {

        const assignmentMarks = {
            "courseID":e.assignmentMarks.courseID,
            "courseName":e.assignmentMarks.courseName,
            "assignmentID":e.assignmentMarks.assignmentID,
            "assignmentName":e.assignmentMarks.assignmentName,
            "uploadID":e.assignmentMarks.uploadID,
            "studentID": e.assignmentMarks.studentID,
            "marks": e.assignmentMarks.marks
        };
        alert(assignmentMarks.studentID + ", " + assignmentMarks.marks);

        fetch('http://localhost:3000/api/marks/assign-marks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(assignmentMarks)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
    }

    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();

        const marks_details = {
            courseID:document.getElementById('courseID').value,
            courseName:document.getElementById('courseName').value,
            assignmentID:document.getElementById('assignmentID').value,
            assignmentName:document.getElementById('assignmentName').value,
            uploadID:document.getElementById('uploadID').value,
            studentID: document.getElementById('studentID').value,
            marks: document.getElementById('marks').value
        };

        this.handleSubmit({assignmentMarks: marks_details});
    }


    render() {
        return (
            <div>
                <IAppNavbar/>
                <div className='container bg-light' height="100%">

                    <div>
                        <ul className="nav nav-tabs nav-justified">
                            <li className="nav-item">
                                <NavLink to="/imarks" className="nav-link" exact activeStyle={{color:'black'}}>Add Assignments Marks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/iview" className="nav-link" exact activeStyle={{color:'black'}}>View Assignment Marks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/iviewcourses" className="nav-link" exact activeStyle={{color:'black'}}>View Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/iupload" className="nav-link" exact activeStyle={{color:'black'}}>Upload Marks</NavLink>
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
                                <h1 className='modal-header'>ALLOCATE STUDENT MARKS</h1>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={value => this.handleOnSubmit(value)}>
                                    <Label htmlFor="courseID">Course ID: </Label>
                                    <Input type="text" className='form-control' name='courseID' id='courseID' required/>
                                    <Label htmlFor="courseName">Course Name: </Label>
                                    <Input type="text" className='form-control' name='courseName' id='courseName' required/>
                                    <Label htmlFor="assignmentID">Assignment ID: </Label>
                                    <Input type="text" className='form-control' name='assignmentID' id='assignmentID' required/>
                                    <Label htmlFor="assignmentName">Assignment Name: </Label>
                                    <Input type="text" className='form-control' name='assignmentName' id='assignmentName' required/>
                                    <Label htmlFor="uploadID">Upload ID: </Label>
                                    <Input type="text" className='form-control' name='uploadID' id='uploadID' required/>
                                    <Label htmlFor="studentID">Student ID: </Label>
                                    <Input type="text" className='form-control' name='studentID' id='studentID' required/><br/>
                                    <Label htmlFor="marks">Marks: </Label>
                                    <Input type="text" className='form-control' name='marks' id='marks' required/><br/>
                                    <div className='form-group'>
                                        <Button type='submit' color="dark">Insert Marks</Button>
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
export default IMarks;