import React,{Component} from 'react';
import INavigation from './INavigation';
import icon from "../images/SLIIT-malabe.jpg";
import AAppNavbar from "./AAppNavbar";

class IHome extends Component{


    render() {
        return (
            <div>
                <AAppNavbar/>
                <div className='container bg-light' height="100%">
                    <INavigation/>
                    <img src={icon} width = "75%"  height="200%" alt="graph" />


                </div>
            </div>
        );
    }

}

export default IHome;
