const express = require('express');
const app = express();

const AdminController = require('../controller/AdminController');
const AssignmentController = require('../controller/AssignmentController');
const InstructorController = require('../controller/InstructorController');

app.use('/assignments', AssignmentController);
app.use('/admins', AdminController);
app.use('/instructors', InstructorController);



module.exports = app;