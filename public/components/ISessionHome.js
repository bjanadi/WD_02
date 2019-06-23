import React,{Component} from 'react';
import ISessionNavigation from './ISessionNavigation';
import icon from "../images/SLIIT-malabe.jpg";
import ISessionNav from "./ISessionNav";

class ISessionHome extends Component{


    render() {
        return (
            <div>
                <ISessionNav/>
                <div className='container bg-light' height="100%">
                    <ISessionNavigation/>
                    <img src={icon} width = "75%"  height="200%" alt="graph" />


                </div>
            </div>
        );
    }

}

export default ISessionHome;
