import React,{Component} from 'react';
import {Label, Input,Button} from 'reactstrap';
import icon from "../images/books.png";
import ISessionNav from "./ISessionNav";
import ISessionNavigation from "./ISessionNavigation";


class InstructorUpload extends Component{
    constructor(props) {
        super(props);
        this.state = {
            assignmentId: '',
            courseName:'',
            assignment: '',
            startDate: '',
            endDate: '',
            uploadImage:'',
        }
    };


    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');
        formData.append('assignmentId', document.getElementById('assignmentId').value);
        formData.append('courseName', document.getElementById('courseName').value);
        formData.append('assignment', document.getElementById('assignment').value);
        formData.append('startDate', document.getElementById('startDate').value);
        formData.append('endDate', document.getElementById('endDate').value);
        formData.append('uploadImage', fileField.files[0]);
        fetch('http://localhost:3000/api/assignments/upload-assignment', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response)));
        this.props.history.push(`/IAssignmentList`);

    };

    render() {
        return (
            <div>
                <ISessionNav/>
                <div className='container bg-light'>
                    <ISessionNavigation/>

                    <div className='row'>
                        <div className='card' style={{margin: 'auto'}}>

                            <div className='card-header'>
                                <h1 className='modal-header'>UPLOAD YOUR ASSIGNMENT</h1>
                                <h3 align="center">Upload Before:</h3>
                            </div>
                            <div className='card-body'>
                                <img src={icon} width = "30%"  height="30%" alt="graph" align="center" />
                                <form onSubmit={value => this.handleOnSubmit(value)}>
                                    <Label htmlFor="assignmentId">Assignment ID: </Label>
                                    <Input type="text" className='form-control' name='assignmentId' id='assignmentId' required/>
                                    <Label htmlFor="courseName">Course Name: </Label>
                                    <Input type="text" className='form-control' name='courseName' id='courseName' required/>
                                    <Label htmlFor="assignment">Assignment Name: </Label>
                                    <Input type="text" className='form-control' name='assignment' id='assignment' required/>
                                    <Label htmlFor="startDate">Start Date: </Label>
                                    <Input type="date" className='form-control' name='startDate' id='startDate' required/>
                                    <Label htmlFor="endDate">End Date: </Label>
                                    <Input type="date" className='form-control' name='endDate' id='endDate' required/>
                                    <Label htmlFor="upload">Upload: </Label>
                                    <Input type="file" className='form-control' name="uploadImage" id="uploadImage" required/>
                                    <br /><br />
                                    <div  align="ccenter"  className='form-group'>
                                        <Button type='submit'color="dark">Submit Assignment</Button>
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
export default InstructorUpload;