const express = require('express');
const router = express.Router();
const IAssignmentRepository = require('../repository/IAssignmentRepository');
const CourseAssignment = require('../models/CourseAssignment');


 const multer = require('multer');

const upload = multer({dest: 'uploads/'});

// const fileFilter = (req,res,cb) => {
//     //reject a file
//     if (file.mimeType === 'image/jpg' || file.mimeType === 'image/png') {
//     cb(null, false);
// }
//     else{
//         cb(null,true);
//     }
// };
//
// const upload = multer({
//     storage:storage ,
//     limits:{
//         fileSize:1024* 1024 * 5
//     }
//     // ,fileFilter:fileFilter
// });

router.post('/upload-assignment',upload.single('uploadImage'), (req,res) =>{
    // console.log(req.file);
    const newUpload= new CourseAssignment({
        assignmentId: req.body.assignmentId,
        courseName: req.body.courseName,
        assignment:req.body.assignment,
        startDate:req.body.startDate,
        endDate:req.body.endDate,
        uploadImage: req.file.path
    });
    newUpload.save()
        .then(upload => res.json(upload))
});

router.get('/get-upload-assignments',(req,res) => {
    CourseAssignment.find()
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                products : docs.map(doc => {
                    return{
                        courseId:doc.courseId,
                        uploadImage: doc.uploadImage,
                        _id:doc._id,
                        request:{
                            type:"GET",
                            url:"http://localhost:3000/api/assignments/get-upload-assignments/" + doc._id
                        }
                    };
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
});


router.get('/get-assignments', (req, res, next) => {
    IAssignmentRepository.getAllAssignments().then((assignments) => {
        res.status(assignments.status).send(assignments.assignments)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

router.post('/add-assignment', (req, res, next) => {
    const body = req.body;
    IAssignmentRepository.insertAssignment(body).then((data) => {
        res.status(data.status).send(data.message)
    }).catch(err => {
        res.status(err.status).send(err.message)
    })
});

router.put('/update-assignment/:id', (req, res, next) => {
    const id = req.params.id;
    const user = req.body;
    IAssignmentRepository.update(id, user).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: "Error: " + err});
    })
});


router.delete('/delete-assignment/:id', (req, res, next) => {
    const id = req.params.id;
    IAssignmentRepository.delete(id).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: "Error: " + err});
    })
});

module.exports = router;