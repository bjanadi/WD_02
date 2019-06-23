import React,{Component} from 'react';
import IAppNavbar from "./IAppNavbar";
import {NavLink} from "react-router-dom";

class ISView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

    }
    componentDidMount() {

        fetch('http://localhost:3000/api/marks/:assignmentID')
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
                <IAppNavbar/>

                <div className='container bg-light' height="100%">
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
                                <input type="search" placeholder="  Search an Admin"/>
                                <button type="submit" className="btn-primary">Search</button>
                            </form>

                        </ul>
                    </div>


                    <div className='row'>
                        <div className='card' style={{margin: 'auto'}}>
                            <div className='card-header'>
                                <h1 className='modal-header'>ASSIGNMENT MARKS</h1>
                            </div>
                            <div className='card-body'>
                                <table className="table table-striped" style={{ marginTop: 20}}>
                                    <thead>
                                    <tr>
                                        <th>Student ID</th>
                                        <th>Marks</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.data.map(assignmentMark =>
                                        <tr key={assignmentMark._id}>
                                            <td>{assignmentMark.studentID}</td>
                                            <td>{assignmentMark.marks}</td>
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
export default ISView;