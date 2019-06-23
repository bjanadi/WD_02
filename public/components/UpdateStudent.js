import React, { Component } from "react";
import LNavigation from "./LNavigation";
import LAppNavbar from "./LAppNavbar";
import {NavLink} from "react-router-dom";

class UpdateStudent extends Component {
    constructor(props) {
        super(props);
        this.onChangename = this.onChangename.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangeitnumber = this.onChangeitnumber.bind(this);
        this.onChangephone = this.onChangephone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            password: "",
            email: "",
            itnumber:'',
            phone: ""
        };
    };
    //OnSubmit
    onSubmit(e) {
        e.preventDefault();
        const updatedStudent = {
            name: this.state.name,
            password: this.state.password,
            email:this.state.email,
            itnumber:this.state.itnumber,
            phone:this.state.phone
        };
        fetch('http://localhost:3000/api/students/update', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStudent)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        });
    }

    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangepassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeemail(e) {
      this.setState({
        email: e.target.value
      });
    }
    onChangeitnumber(e) {
        this.setState({
            itnumber: e.target.value
        });
    }
    onChangephone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/students/get-details/' + sessionStorage.getItem("SESSIONLOGIN"))
            .then(res => {
                this.setState({
                    name:res.data.name,
                    password:res.data.password,
                    email:res.data.email,
                    itnumber:res.data.itnumber,
                    phone:res.data.phone,
                });
                console.log(res.json());
            })
            .catch(function (error) {
                console.log(error)
            });
    };

    render(){
        return(
            <div>
                <LAppNavbar/>
                <div className='container bg-light'>

                    <LNavigation/>
                    <div className='row' align="center">
                        <div className='card' style={{margin: 'auto'}}>
                                <div className='card-header'>
                                    <h1 className='modal-header'>UPDATE YOUR ACCOUNT</h1>
                                </div>
                                <form onSubmit={this.onSubmit}>
                                <div>
                                    <label>Name </label>
                                    <input type="text" className="form-control" value={this.state.name} onChange={this.onChangename} />
                                </div>
                                <div>
                                    <label> Password </label>
                                    <input type="password" className="form-control" value={this.state.password} onChange={this.onChangepassword}/>
                                </div>
                                <div className="form-group">
                                    <label> Email </label>
                                    <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeemail}/>
                                </div>
                                <div className="form-group">
                                    <label> IT Number </label>
                                    <input type="text" className="form-control" value={this.state.itnumber} onChange={this.onChangeitnumber}/>
                                </div>
                                <div className="form-group">
                                    <label> Phone </label>
                                    <input type="number" className="form-control" value={this.state.phone} onChange={this.onChangephone}/>
                                </div>
                                <br />
                                <div className="form-group">
                                    <button type="submit" value="Update Student" className="btn btn-primary">Update Account</button>
                                </div>
                     </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateStudent;


