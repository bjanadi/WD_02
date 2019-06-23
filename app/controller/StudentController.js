const express = require('express');
const router = express.Router();
const StudentRepository = require('../repository/StudentRepository');
const Student = require('../models/Student');
const StudentSession = require('../models/StudentSession');
const StudentCourse = require('../models/StudentCourse');
const CourseAssignmentStudentUpload = require('../models/CourseAssignmentStudentUpload');



//GETTING ALL THE STUDENTS
router.get('/get-students', (req, res, next) => {
    StudentRepository.getAllStudents().then((students) => {
        res.status(students.status).send(students.students)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

//GETTING DETAILS OF A STUDENT
router.get('/get-details/:sid',(req,res) => {
   const SID= req.params.sid;
    Student.find({itnumber:SID})
        .then(student => res.json(student))
});

//UPDATING A STUDENT
router.route("/update/:id").put(function(req, res) {
    Student.findById(req.params.id, function(err, student) {
        if (!student) res.status(404).send("Data is not found");
        else
            student.name = req.body.name;
            student.password = req.body.password;
            student.email = req.body.email;
            student.itnumber = req.body.itnumber;
            student.phone = req.body.phone;
        student
            .save()
            .then(student => {
                res.json("Student Updated");
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

//Updating a student - 2
router.get('/update-student/:sid', (req,res)  => {
    const SID = req.params.sid;
    Student.findByIdAndUpdate({itnumber:SID})

        .then(student => res.json(student))
});

//DELETING A STUDENT
router.route("/delete/:id").delete(function(req, res) {
    Student.findOneAndDelete({ _id: req.params.id }, function(err, student) {
        if (err) res.json(err);
        else res.json("Successfully removed");
    });
});

//REGISTER A STUDENT
router.post('/register-student', (req, res, next) => {
    const body = req.body;
    StudentRepository.insertStudent(body).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

//LOGGING INTO THE SYSTEM
router.post('/login' , (req,res,next) => {
    const{body} = req;
    const {
        password
    }= body;
    let {
        studentId
    } = body;

    if(!studentId){
        return res.send({
            success:false,
            message: 'Error: Student ID cannot be blank'
        });
    }
    if(!password){
        return res.send({
            success:false,
            message:'Error: Password cannot be blank'
        })
    }
     Student.find( {itnumber:studentId} ,(err, students) => {
        if(err){
            return res.send({
                success:false,
                message: 'Error: IT Number isnt in the database'
            });
        }
        if(students.length !== 1 ){
            return res.send({
                success:false,
                message: 'Error: Invalid Login '
            });
        }
        const student = students[0];
        const studentSession = new StudentSession();
        studentSession.studentId = student.itnumber;
        studentSession.save((err,doc) => {
            if(err){
                return res.send({
                    success:false,
                    message:'Error:server Error in saving student session'
                });
            }
            return res.send({
                success:true,
                message:'Valid Login',
                token:doc._id
            })
        })
    })
 });

//VERIFYING ITS A STUDENT
router.get('/verify-student' , (req,res,next) => {
    //get the token
    const {query} = req;
    const {token} = query;
    //?token=test

    //verify token is one of a kind
    StudentSession.find({
        _id:token,
        isDeleted:false
    } , (err,sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        if(sessions.length !== 1){
            return res.send({
                success:true,
                message:'Good'
            })
        }
    })
});

//LOGOUT
router.get('/logout-student' , (req,res,next) => {
    //get the token
    const {query} = req;
    const {token} = query;
    //?token=test

    //verify token is one of a kind
    StudentSession.findOneAndUpdate({
        _id : token,
        isDeleted : false
    } ,{
    $set:{
        isDeleted:true
    }
    }, null, (err,sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        return res.send({
            success:true,
            message: 'Good'
        });
    });
});

//Registering a Student to a Course
router.post('/join-a-course', (req,res,next) =>{
  const newStudentCourse= new StudentCourse({
        studentId:req.body.studentId,
        courseId: req.body.courseId
    });
    newStudentCourse.save((err,doc) =>{
        if(err){
            return res.send({
                success:false,
                message:'Error: Student did not join the course'
            });
        }
        return res.send({
            success:true,
            message:'Student Joined  the Course Successfully',
            token:doc._id
        })
    })
});

//Uploading an Assignment
router.post('/upload-assignment', (req,res) =>{
    const newUpload= new CourseAssignmentStudentUpload({
        courseId: req.body.courseId,
        assignmentId:req.body.assignmentId,
        studentId:req.body.studentId,
        upload:req.body.upload
    });
    newUpload.save()
        .then(upload => res.json(upload) )
});



//getting the students who joined a course
router.get('/studentcourses',(req,res) => {
    StudentCourse.find()
        .populate('studentId')
        .populate('courseId')
        .then(studentcourses => res.json(studentcourses))
});

//getting the courses a particular student has joined
router.get('/studentcourses/:student', (req,res) => {
    const SID= req.params.student;
    StudentCourse.find({studentId:SID})
        .populate('courseId')
        .select('courseId.name')
        .then(students => res.json(students))
});
module.exports = router;




// if(!student.validPassword(password)){
//     return res.send({
//         success:false,
//         message: 'Error: Invalid Password - passwords dont match'
//     });
// }


