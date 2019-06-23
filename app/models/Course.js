const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema ({

    code:{
        type: String,
        unique:true,
        maxlength:4
    },
    name:{
        type: String
    },

    credits:{
        type:Number
    },
    lecturerincharge:{
        type:String
    },
    instructor:{
        type:String
    }
});

module.exports = Course = mongoose.model('course', CourseSchema);