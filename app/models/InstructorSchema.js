const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type:String
    },

    phone: {
        type: Number
    },


});

module.exports = StudentModel = mongoose.model('instructor',InstructorSchema);