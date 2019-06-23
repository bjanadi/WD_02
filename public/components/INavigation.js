import React,{Component} from "react";
import  {NavLink} from "react-router-dom";

class INavigation extends Component {

    render() {
        return (
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
        );
    }
}

export default INavigation;