import React,{Component} from 'react';
import LNavigation from './LNavigation';
import LAppNavbar from "./LAppNavbar";

class LHome extends Component{

    constructor(props){
        super(props);
        this.state={
            isLoading:true,
        }
    };

    render() {
            return(<div>
                <LAppNavbar/>
                <div className='container bg-light'>
                    <LNavigation/>

                </div>
            </div>);
    }
}

export default LHome;