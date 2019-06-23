const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const InstructorSchema = new Schema({
    username: {
        type: String,
        unique:true
    },
    password: {
        type: String,
        minlength:6,
        maxlength:8
    },
    email: {
        type: String,
        unique: true
    },

    phone: {
        type: Number,
        maxlength: 10
    },


});

module.exports = InstructorModel = mongoose.model('instructor',InstructorSchema);