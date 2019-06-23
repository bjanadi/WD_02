import React,{Component} from 'react';
import LNavigation from './LNavigation';
import LAppNavbar from "./LAppNavbar";
import "../css/myprofile.css";
import icon from "../images/humanicon.png";
import {ListGroup, ListGroupItem} from 'reactstrap';


class StudentCourseWeb extends Component{

    render() {
        return (
            <div>
                <LAppNavbar/>
                <div className='container bg-light'>

                    <LNavigation/>
                    <div className='row'>
                        <div className='card' style={{margin: 'auto'}}>
                            <div className='card-header'>
                                <h1 className='modal-header'>Welcome to the CourseWeb !</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default StudentCourseWeb;