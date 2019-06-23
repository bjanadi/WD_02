const express = require('express');
const router = express.Router();
const Upload=require('../models/Upload');
const mongoose=require("mongoose");

const multer=require('multer');
const upload= multer({dest: 'uploads/'});

// const storage=multer.diskStorage({
//     destination:function (req,file,cb) {
//         cb(null,'./upload/');
//     }
// });

// const upload=multer({
//     storage:storage,
//     limits:{
//     fileSize:1024*1024*5
//     }
// });

router.post('/upload-marks',upload.single('iUploadImage'), (req,res) =>{
    console.log(req.file);
    const newUpload= new Upload({
        courseName: req.body.courseName,
        assignmentName:req.body.assignmentName,
        iUploadID:req.body.iUploadID,
        iUploadImage: req.file.path
    });
    newUpload.save()
        .then(upload => res.json(upload))
});

module.exports = router;