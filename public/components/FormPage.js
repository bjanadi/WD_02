import React,{Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import AppNavbar from "./Register";
import Navigation from "./home/Navigation";

class FormPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email: '',
            itnumber: '',
            phone: ''
        }
    };
    //handle Submit
    handleSubmit(e) {

        const student = {
            "name": e.student.name,
            "password": e.student.password,
            "email": e.student.email,
            "itnumber":e.student.itnumber,
            "phone": e.student.phone
        };
        alert(student.name + ", " + student.password + ", " + student.email + ", " + student.itnumber + ", " + student.phone);

        fetch('http://localhost:3000/api/students/register-student', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        });
    }

    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();

        const student_details = {
            name: document.getElementById('name').value,
            password: document.getElementById('password').value,
            email: document.getElementById('email').value,
            itnumber: document.getElementById('itnumber').value,
            phone: document.getElementById('phone').value
        };

        this.handleSubmit({student: student_details});
        this.props.history.push(`/login`);
    }

    render() {
        return (
            <MDBContainer>
                <AppNavbar/>
                <Navigation/>
                <MDBRow>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                    <p className="h4 text-center py-4">REGISTER</p>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Name"
                                            icon="user"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Password"
                                            icon="user"
                                            group
                                            type="password"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Email"
                                            icon="envelope"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Your IT Number"
                                            icon="exclamation-triangle"
                                            group
                                            type="text"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Your Phone Number"
                                            icon="lock"
                                            group
                                            type="number"
                                            validate
                                        />
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="dark" type="submit">Register</MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }};

export default FormPage;