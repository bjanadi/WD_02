import React, { Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, Container, ListGroup, ListGroupItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class ISessionNav extends Component {
    constructor(props){
        super(props);
        this.state = {
            instructors:[],
            email:'',
            username:'',
            password:''
        }
    }

    componentDidMount() {
        console.log(sessionStorage.getItem("SESSIONLOGIN"));
        fetch('http://localhost:3000/api/instructors/get-details/'+ sessionStorage.getItem("SESSIONLOGIN"))
            .then( res => {
                return res.json();
            })
            .then(json => {
                console.log(json);
                this.setState({
                    instructors:json
                })
            })
    }

    render() {
        return (
            <div>
                <Navbar color='dark' dark expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand href='/'>STUDENT AND INSTRUCTOR INFORMATION SYSTEM</NavbarBrand>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <ListGroup>
                                    {this.state.instructors.map( Instructor => (
                                        <ListGroupItem key={Instructor._id}>
                                            Welcome {Instructor.username} !!
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
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
export default ISessionNav;