import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Alogin from './components/Alogin';
import Ahome from './components/Ahome';
import Aregistration from "./components/Aregistration";
import Alist from "./components/Alist";
import Ainstructor from "./components/Ainstructor";
import Ailist from "./components/Ailist";
import Acourse from "./components/Acourse";
import Aclist from "./components/Aclist"
import MainHome from "./components/MainHome";


function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Switch>
                    <Route path="/" component={MainHome} exact/>
                    <Route path="/alogin" component={Alogin} exact/>
                    <Route path="/ahome" component={Ahome} exact/>
                    <Route path="/aregistration" component={Aregistration} exact/>
                    <Route path="/alist" component={Alist} exact/>
                    <Route path="/ainstructor" component={Ainstructor} exact/>
                    <Route path="/ailist" component={Ailist} exact/>
                    <Route path="/acourse" component={Acourse} exact/>
                    <Route path="/aclist" component={Aclist} exact/>

                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;