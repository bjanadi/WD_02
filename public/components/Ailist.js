import React,{Component} from 'react';
import AAppNavbar from "./AAppNavbar";
import axios from 'axios';
import {NavLink} from "react-router-dom";
import icon from "../images/ilist.png";





class Ailist extends Component {

    constructor(props) {
        super(props);

        this.delete=this.delete.bind(this);

        this.state = {
            data: []
        };

    }
    componentDidMount() {

        fetch('http://localhost:3000/api/instructors/get-instructors')
            .then(res => {
                return res.json();
            })
            .then(json =>{
                console.log(json);
                this.setState({ data:json });
            })
    }
    delete(username){
        console.log("hari")
        console.log(username.target.value)
         fetch('http://localhost:3000/api/instructors/delete/' + username.target.value , {
             method: 'DELETE',

         }).then(response => {
             console.log(response)
         }).catch(err => {
             console.log(err);
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
                                <input type="search" placeholder="  Search..."/>
                                <button type="submit" className="btn-primary">Search</button>
                            </form>

                        </ul>
                    </div>


                    <div className='row'>
                        <div className='card' style={{margin: 'auto'}}>
                            <div className='card-header'>
                                <h1 className='modal-header'>INSTRUCTOR LIST</h1>
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
                                    {this.state.data.map(instructor =>
                                        <tr key={instructor._id}>
                                            <td>{instructor.username}</td>
                                            <td>{instructor.password}</td>
                                            <td>{instructor.email}</td>
                                            <td>{instructor.phone}</td>
                                            <td><button type="submit" className='btn btn-outline-danger' value={instructor.username} onClick={value => this.delete(value)}>Delete</button></td>
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
export default Ailist;