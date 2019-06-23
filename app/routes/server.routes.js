const express = require('express');
const app = express();
const AdminController = require('../controller/AdminController');
const InstructorController = require('../controller/InstructorController');
const CourseController = require('../controller/CourseController');



app.use('/admins', AdminController);
app.use('/instructors', InstructorController);
app.use('/courses', CourseController);



module.exports = app;