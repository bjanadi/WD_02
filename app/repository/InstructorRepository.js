const mongoose = require('../models/InstructorSchema');
const InstructorModel = mongoose.model('instructor');

const InstructorRepository = function () {
    //insert the new admin

    //get all the admin details
    this.getAllAssignments = () => {
        return new Promise((resolve, reject) => {
            AssignmentModel.find().exec().then((Assignment) => {
                resolve({status: 200, assignments: Assignment})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    };

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            AssignmentModel.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "User updated successfully"})
            }).catch((err) => {
                reject({status: 500, message: "Error: "+ err});
            })
        })
    };

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            AssignmentModel.remove({_id: id}).then(() => {
                resolve({status:200, message: "Deleted user"});
            }).catch(err => {
                reject({status: 500, message: "Could not be deleted due to " + err})
            })
        })
    };

};

module.exports = new IAssignmentRepository();