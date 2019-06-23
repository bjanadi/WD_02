const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Upload = new Schema({
     courseName:{
         type:String
     },
     assignmentName:{
         type:String
     },
     iUploadID:{
         type:String
     },
     iUploadImage: {
        type: String
     }

});

module.exports = UploadModel = mongoose.model('uploading',Upload);