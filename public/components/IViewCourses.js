import React,{Component} from 'react';
import{Container,ListGroup,ListGroupItem} from "reactstrap";
import IAppNavbar from "./IAppNavbar";
import INavigation from "./INavigation";


class IViewCourses extends Component{
    constructor(props){
        super(props);
        this.state = {
            iViewCourses:[]
        }
    }


    // onSubmit(e){
    //     this.props.history.push(`/iviewassignments/`+e.target.id);
    // }

    componentDidMount() {
        fetch('http://localhost:3000/api/courses/get-courses')
            .then( res => {
                return res.json();
            })
            .then(json => {
                console.log(json);
                this.setState({
                    iViewCourses:json
                })
            })
    }

    render(){
        return(
            <div>
                <IAppNavbar/>
                <INavigation/>
                <Container>
                    <ListGroup>
                        {this.state.iViewCourses.map( courses => (
                            <ListGroupItem key={courses._id}>
                                <h2>{courses.code}</h2>
                                <h4>{courses.name}</h4>
                                {/*sessionStorage.setItem("COURSE",{courses.courseName});*/}
                                <button className="btn-dark" onClick={e=>this.onSubmit(e)}>View the {courses.code} Course</button>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>
            </div>
        );
    }

}

export default IViewCourses;