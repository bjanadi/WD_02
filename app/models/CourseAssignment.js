const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    courseID: {
        type: String
    },

    courseName: {
        type: String
    },
    assignment: {
        type: String
    },
    startDate: {
        type:Date
    },

    endDate: {
        type: Date
    },

    uploadImage: {
        type: String
    }


});

module.exports = StudentModel = mongoose.model('Assignment',AssignmentSchema);