import React,{Component} from 'react';
import AAppNavbar from "./AAppNavbar";
import {NavLink} from "react-router-dom";

class Alist extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                <AAppNavbar/>

                <div className='container bg-light' height="100%">
                    <div>
                        <ul className="nav nav-tabs nav-justified">
                            <li className="nav-item">
                                <NavLink to="/aregistration" className="nav-link" exact activeStyle={{color:'black'}}>Add Admin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/adminlist" className="nav-link" exact activeStyle={{color:'black'}}>Admin List</NavLink>
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
                                <input type="search" placeholder="  Search an Admin"/>
                                <button type="submit" className="btn-primary">Search</button>
                            </form>

                        </ul>
                    </div>


                    <div className='row'>
                        <div className='card' style={{margin: 'auto'}}>
                            <div className='card-header'>
                                <h1 className='modal-header'>ADMIN LIST</h1>
                            </div>
                            <div className='card-body'>
                                <table className="table table-striped" style={{ marginTop: 20}}>
                                    <thead>
                                        <tr>
                                            <th>Username</th>
                                            <th>Password</th>
                                            <th>Email</th>
                                            <th>Mobile Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>{this.username}</th>
                                            <th>{this.password}</th>
                                            <th>{this.email}</th>
                                            <th>{this.phone}</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Alist;