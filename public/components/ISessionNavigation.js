import React,{Component} from "react";
import  {NavLink} from "react-router-dom";

class ISessionNavigation extends Component {

    render() {
        return (
            <div>
                <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item">
                        <NavLink to="/InstructorUpload" className="nav-link" exact activeStyle={{color:'black'}}>Add Assignment</NavLink>
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
        );
    }
}

export default ISessionNavigation;