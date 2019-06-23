const mongoose = require('../models/InstructorAssignment');
const mongoose1=require('../models/Course');
const AssignmentMarksModel = mongoose.model('assignmentMarks');
const Book=mongoose1.model('course');

const MarksRepository = function () {
    //insert the new admin
    this.insertMarks = (assignmentMarks) => {
        return new Promise((resolve, reject) => {
            const newMarks = new AssignmentMarksModel({
                courseID: assignmentMarks.courseID,
                courseName:assignmentMarks.courseName,
                assignmentID: assignmentMarks.assignmentID,
                assignmentName:assignmentMarks.assignmentName,
                uploadID: assignmentMarks.uploadID,
                studentID: assignmentMarks.studentID,
                marks: assignmentMarks.marks
            });

            newMarks.save().then(() => {
                resolve({status: 200, message: "Mark of the student is added successfully"});
            }).catch(err => {
                reject({status: 500, message: "Error: " + err})
            })
        })
    };


    this.getAllMarks = () => {
        return new Promise((resolve, reject) => {
            AssignmentMarksModel.find().exec().then((assignmentMarks) => {
                resolve({status: 200, assignmentMarks: assignmentMarks})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    }


    // this.getByID = () => {
    //     return new Promise((resolve, reject) => {
    //         AssignmentMarksModel.find().exec().then((assignmentMark) => {
    //             resolve({status: 200, assignmentMark: assignmentMark})
    //         }).catch(err => {
    //             reject({status: 404, message: "Error: " + err})
    //         })
    //     })
    // }


    this.getByID = (assignmentID) => {
        return new Promise((resolve, reject) => {
            AssignmentMarksModel.find({assignmentID: assignmentID}).exec().then((marks) => {
                resolve({status: 200, marks: marks})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    }

    // this.getAllCourses = () => {
    //     return new Promise((resolve, reject) => {
    //         Book.find().exec().then((course) => {
    //             resolve({status: 200, course: course})
    //         }).catch(err => {
    //             reject({status: 404, message: "Error: " + err})
    //         })
    //     })
    // }


    // this.getByCourseID = () => {
    //     return new Promise((resolve, reject) => {
    //         AssignmentMarksModel.find().exec().then((assignmentMarks) => {
    //             resolve({status: 200, assignmentMarks: assignmentMarks})
    //         }).catch(err => {
    //             reject({status: 404, message: "Error: " + err})
    //         })
    //     })
    // }

};

module.exports = new MarksRepository();