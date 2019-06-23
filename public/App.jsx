import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import IMarks from "./components/IMarks";
import IViewMarks from "./components/IViewMarks";
import ISView from "./components/ISView";
import IUploadMarks from "./components/IUploadMarks";
import IViewCourses from "./components/IViewCourses";

function  App() {
    return(
        <BrowserRouter>
            <div className='App'>
                <Switch>
                    <Route path="/iviewcourses" component={IViewCourses}/>
                    <Route path="/imarks" component={IMarks} exact/>
                    <Route path="/iview" component={IViewMarks}/>
                    <Route path="/isview" component={ISView}/>
                    <Route path="/iupload" component={IUploadMarks}/>

                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
