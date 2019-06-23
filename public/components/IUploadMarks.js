import React,{Component} from 'react';
import {Label, Input,Button} from 'reactstrap';
import IAppNavbar from "./IAppNavbar";
import INavigation from "./INavigation";


class IUploadMarks extends Component{
    constructor(props) {
        super(props);
        this.state = {
            courseName:'',
            assignmentName: '',
            iUploadID: '',
            iUploadImage:''
        }
    };


    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');
        formData.append('courseName', document.getElementById('courseName').value);
        formData.append('assignmentName', document.getElementById('assignmentName').value);
        formData.append('iUploadID', document.getElementById('iUploadID').value);
        formData.append('iUploadImage', fileField.files[0]);
        fetch('http://localhost:3000/api/upload/upload-marks', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response)));
        this.props.history.push(`/ISView`);

    };

    render() {
        return (
            <div>
                <IAppNavbar/>
                <div className='container bg-light'>
                    <INavigation/>

                    <div className='row'>
                        <div className='card' style={{margin: 'auto'}}>

                            <div className='card-header'>
                                <h1 className='modal-header'>UPLOAD ASSIGNMENT MARKS</h1>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={value => this.handleOnSubmit(value)}>
                                    <Label htmlFor="courseId">Course Name: </Label>
                                    <Input type="text" className='form-control' name='courseName' id='courseName' required/>
                                    <Label htmlFor="assignmentId">Assignment Name: </Label>
                                    <Input type="text" className='form-control' name='assignmentName' id='assignmentName' required/>
                                    <Label htmlFor="studentId">Upload ID: </Label>
                                    <Input type="text" className='form-control' name='iUploadID' id='iUploadID' required/>
                                    <Label htmlFor="upload">Upload Marks: </Label>
                                    <Input type="file" className='form-control' name="iUploadImage" id="iUploadImage" required/>
                                    <br /><br />
                                    <div  align="center"  className='form-group'>
                                        <Button type='submit'color="dark">Submit Marks</Button>
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
export default IUploadMarks;