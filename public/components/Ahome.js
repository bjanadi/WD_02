import React,{Component} from 'react';
import ANavigation from './ANavigation';
import icon from "../images/SLIIT-malabe.jpg";
import AAppNavbar from "./AAppNavbar";

class Ahome extends Component{


    render() {
        return (
            <div>
                <AAppNavbar/>
                <div className='container bg-light' height="100%">
                    <ANavigation/>
                    <img src={icon} width = "75%"  height="200%" alt="graph" />


                </div>
            </div>
        );
    }

}

export default Ahome;
