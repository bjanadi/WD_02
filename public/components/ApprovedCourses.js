import React,{Component} from 'react';
import{Container,ListGroup,ListGroupItem} from "reactstrap";
import LAppNavbar from "./LHome";

class ApprovedCourses extends Component{
    constructor(props){
        super(props);
        this.state = {
            testCourses:[],
            studentId:'',
            courseId:''
        }
    }

    //handle Submit
    handleSubmit(e) {
        const joinCourse = {
            "studentId": e.joinCourse.studentId,
            "courseId": e.joinCourse.courseId
        };
        alert(joinCourse.studentId + ", " + joinCourse.courseId);
        fetch('http://localhost:3000/api/students/join-a-course', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(joinCourse)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        });
    }

    //handle On submit
    handleOnSubmit(e){
        e.preventDefault();
        const joinCourse_details = {
            studentId: document.getElementById('studentId').value,
            courseId: document.getElementById('courseId').value
        };
        this.handleSubmit({joinCourse: joinCourse_details});
    }

    componentDidMount() {
        console.log(sessionStorage.getItem("SESSIONLOGIN"));
        fetch('http://localhost:3000/api/testcourses/get-test-courses')
            .then( res => {
                return res.json();
            })
            .then(json => {
                console.log(json);
                this.setState({
                    testCourses:json
                })
            })
    }


    render(){
        return(
            <div>
                <LAppNavbar/>
                <Container>
                    <ListGroup>
                        {this.state.testCourses.map( courses => (
                                <ListGroupItem key={courses._id}>

                                <h2>{courses.name}</h2>
                                <h6>Code - {courses.code}</h6>

                                <form onSubmit={value => this.handleOnSubmit(value)}>
                                    <input type="text" id="studentId" value={sessionStorage.getItem("SESSIONLOGIN")}/>
                                    <input type="text" id="courseId" value={courses.code} />
                                    <button type="submit" className="btn btn-primary">Join Course</button>
                                </form>

                                </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>
            </div>

        );
    }
}
export default ApprovedCourses;