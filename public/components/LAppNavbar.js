import React, { Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, Container, ListGroupItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class LAppNavbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentDetails:[],
        }
    }
    componentDidMount() {
        console.log(sessionStorage.getItem("SESSIONLOGIN"));
        fetch('http://localhost:3000/api/students/get-details/'+ sessionStorage.getItem("SESSIONLOGIN"))
            .then( res => {
                return res.json();
            })
            .then(json => {
                console.log(json);
                this.setState({
                    studentDetails:json
                })
            })
    }
    render() {
        return (
            <div>
                <Navbar color='dark' dark expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand href='/'>STUDENT AND INSTRUCTOR SYSTEM</NavbarBrand>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                {this.state.studentDetails.map( student => (
                                    <ListGroupItem key={student._id}>
                                        <h2>Welcome {student.name}</h2>
                                    </ListGroupItem>
                                ))}
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink to="/" exact>Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
export default LAppNavbar;