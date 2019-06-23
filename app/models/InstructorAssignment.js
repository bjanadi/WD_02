const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AssignmentMarks = new Schema({
    courseID: {
        type: String
    },
    courseName: {
        type: String
    },
    assignmentID: {
        type: String
    },
    assignmentName: {
        type: String
    },
    uploadID: {
        type: String
    },
    studentID: {
        type: String
    },
    marks: {
        type: Number
    },


});



module.exports = AssignmentMarksModel = mongoose.model('assignmentMarks',AssignmentMarks);