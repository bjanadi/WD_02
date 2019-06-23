const express = require('express');
const router = express.Router();
const CourseAssignment = require('../models/CourseAssignment');

const multer = require('multer');

const storage= multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null, './uploads/');
    }
});

// const fileFilter = (req,res,cb) => {
//     //reject a file
//     if (file.mimeType === 'image/jpg' || file.mimeType === 'image/png') {
//     cb(null, false);
// }
//     else{
//         cb(null,true);
//     }
// };

const upload = multer({
    storage:storage ,
    limits:{
        fileSize:1024* 1024 * 5
    }
    // ,fileFilter:fileFilter
});

router.post('/upload-assignment',upload.single('uploadImage'), (req,res) =>{
    // console.log(req.file);
    const newUpload= new CourseAssignment({
        courseId: req.body.courseId,
        courseName: req.body.courseName,
        assignmentId:req.body.assignmentId,
        studentId:req.body.studentId,
        uploadImage: req.file.path
    });
    newUpload.save()
        .then(upload => res.json(upload))
});


