const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentCourseSchema = new Schema({
    studentId: {
        type:String
    },
    courseId: {
        type:String
    }
});


module.exports = StudentCourseModel = mongoose.model('studentcourse',StudentCourseSchema);