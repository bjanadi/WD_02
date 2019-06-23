import React,{Component} from 'react';
import INavigation from './INavigation';
import IAppNavbar from "./IAppNavbar";

class Ihome extends Component{


    render() {
        return (
            <div>
                <IAppNavbar/>
                <div className='container bg-light' height="100%">
                    <INavigation/>
                    <img src={icon} width = "75%"  height="200%" alt="graph" />


                </div>
            </div>
        );
    }

}

export default Ihome;