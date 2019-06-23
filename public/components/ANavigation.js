import React,{Component} from "react";
import  {NavLink} from "react-router-dom";

class ANavigation extends Component {

    render() {
        return (
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
        );
    }
}

export default ANavigation;