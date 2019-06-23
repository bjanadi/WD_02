import React,{Component} from "react";
import  {NavLink} from "react-router-dom";

class INavigation extends Component {

    render() {
        return (
            <div>
                <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" exact activeStyle={{color:'black'}}>Add Assignment</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" exact activeStyle={{color:'black'}}>Assignment List</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" exact activeStyle={{color:'black'}}>Add Instructor</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" exact activeStyle={{color:'black'}}>Instructor List</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" exact activeStyle={{color:'black'}}>Add Course</NavLink>
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