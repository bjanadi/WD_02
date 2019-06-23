import React,{Component} from 'react';
import sliit from "../images/sliit3.jpg";
import icon from "../images/SLIIT-malabe.jpg";
import {Container, Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";

class MainHome extends Component{
    render() {
        return(
            <div>
                <Navbar color='dark' dark expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand href='/'>STUDENT AND INSTRUCTOR INFORMATION SYSTEM</NavbarBrand>

                    </Container>
                </Navbar>

                <div className='container bg-light' height="100%">
                    <ul className="nav nav-tabs nav-justified">
                        <li className="nav-item">
                            <NavLink to="/alogin" className="nav-link" exact activeStyle={{color:'black'}}>ADMIN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/alogin" className="nav-link" exact activeStyle={{color:'black'}}>INSTRUCTOR</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/alogin" className="nav-link" exact activeStyle={{color:'black'}}>STUDENT</NavLink>
                        </li>




                    </ul>


                    <div className="card text-center">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Welcome to the SII System</h5>

                            <img src={sliit} width = "75%"  height="200%" alt="graph" />
                            <p className="card-text">Education is the foundation of the future.....
                                content.</p>
                            <li className="nav-item">
                                <NavLink to="/alogin" className="nav-link" exact activeStyle={{color:'black'}}>Login Here</NavLink>
                            </li>
                        </div>
                        <div className="card-footer text-muted">
                            contact us with 0112630753 or www.sliit.lk</div>
                    </div>









                </div>



            </div>
        );
    }
}
export  default MainHome;