const mongoose = require('../models/CourseAssignment');
const AssignmentModel = mongoose.model('Assignment');

const IAssignmentRepository = function () {
    //insert the new admin
    this.insertAssignment = (Assignment) => {
        return new Promise((resolve, reject) => {
            const newAssignment = new AssignmentModel({
                courseName: Assignment.courseName,
                assignment: Assignment.assignment,
                startDate: Assignment.startDate,
                endDate: Assignment.endDate
            });

            newAssignment.save().then(() => {
                resolve({status: 200, message: "Assignment is successfully inserted to the system"});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err})
            })
        })
    };
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