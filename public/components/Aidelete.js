import React,{Component} from 'react';
export default class Aidelete extends Component{


    componentDidMount() {
        fetch('http://localhost:3000/api/instructors/delete/' + username.id , {
            method: 'DELETE',

        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return(
            <div>
                <h5>Instructor Delete Successfully</h5>
            </div>
        );
    }


}