import React,{Component} from 'react';
import{Container,ListGroup,ListGroupItem} from "reactstrap";
import ISessionNav from "./ISessionNav";
import ISessionNavigation from "./ISessionNavigation"


class IAssignmentList extends Component{
    constructor(props){
        super(props);
        this.state = {
            assignments:[],
            courseName:'',
            startDate:'',
            endDate:''
        }
    }


    componentDidMount() {
        console.log(sessionStorage.getItem("SESSIONLOGIN"));
        fetch('http://localhost:3000/api/assignments/get-assignments')
            .then( res => {
                return res.json();
            })
            .then(json => {
                console.log(json);
                this.setState({
                    assignments:json
                })
            })
    }
    render(){
        return(
            <div>
                <ISessionNav/>
                <ISessionNavigation/>
                <Container>
                    <ListGroup>
                        {this.state.assignments.map( Assignment => (
                            <ListGroupItem key={Assignment.courseName}>
                                <h6>Assignment - {Assignment.assignment}</h6>
                                <h6>Start Date-{Assignment.startDate}</h6>
                                <h6>End Date-{Assignment.endDate}</h6>

                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>
            </div>

        );
    }
}
export default IAssignmentList;