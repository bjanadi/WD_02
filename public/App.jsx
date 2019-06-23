import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import IHome from "./components/IHome";
import IAssignmentList from "./components/IAssignmentList";
import IAddAssignment from "./components/IAddAssignment";
import ILogin from "./components/ILogin";
import ISessionHome from "./components/ISessionHome";
import InstructorUpload from "./components/InstructorUpload";


function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Switch>
                    <Route path="/" component={IHome} exact/>
                    <Route path="/IAddAssignment" component={IAddAssignment} exact/>
                    <Route path="/IAssignmentList" component={IAssignmentList} exact/>
                    <Route path="/ILogin" component={ILogin} exact/>
                    <Route path="/ISessionHome" component={ISessionHome} exact/>
                    <Route path="/InstructorUpload" component={InstructorUpload} exact/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;