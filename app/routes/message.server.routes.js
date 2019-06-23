const express = require('express');
const app=express();
const MarksController=require('../controller/MarksController');
const UploadController=require('../controller/UploadController');
const CourseController=require('../controller/CourseController');
const AssignmentController=require('../controller/AssignmentController');

app.use('/marks',MarksController);
app.use('/upload',UploadController);
app.use('/courses',CourseController);
app.use('/assignments',AssignmentController);

module.exports = app;
