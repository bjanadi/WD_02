import React,{Component} from 'react';
import AAppNavbar from "./AAppNavbar";
import {NavLink} from "react-router-dom";
import icon from "../images/alist.jfif";

class Alist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

    }
    componentDidMount() {

        fetch('http://localhost:3000/api/admins/get-admins')
            .then(res => {
                return res.json();
            })
            .then(json =>{
                console.log(json);
            this.setState({ data:json });
            })
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
                                <input type="search" placeholder="  Search ..."/>
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
                                        <div>< img src={icon} align="right" className="img-fluid" alt="Responsive image"
                                                   width="75%" height="100%"/>

                                        </div></tr>
                                        <tr>
                                            <th>Username</th>
                                            <th>Password</th>
                                            <th>Email</th>
                                            <th>Mobile Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.data.map(admin =>
                                        <tr key={admin._id}>
                                            <td>{admin.username}</td>
                                            <td>{admin.password}</td>
                                            <td>{admin.email}</td>
                                            <td>{admin.phone}</td>
                                            <td><button type="submit"  className="btn btn-outline-info" >Edit</button></td>
                                            <td><button type="submit" className='btn btn-outline-danger'>Delete</button></td>
                                        </tr>
                                    )}
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