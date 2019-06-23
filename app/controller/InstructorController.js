const express = require('express');
const router = express.Router();
const Instructor = require('../models/InstructorSchema');
const InstructorSession = require('../models/InstructorSession');

router.get('/get-details/:email',(req,res) => {
    const EMAIL= req.params.email;
    Instructor.find({email:EMAIL})
        .then(instructors => res.json(instructors))
});

router.post('/login' , (req,res,next) => {
    const{body} = req;
    const {
        password
    }= body;
    let {
        email
    } = body;

    if(!email){
        return res.send({
            success:false,
            message: 'Error: Email cannot be blank'
        });
    }
    if(!password){
        return res.send({
            success:false,
            message:'Error: Password cannot be blank'
        })
    }
    Instructor.find( {email:email} ,(err, instructors) => {
        if(err){
            return res.send({
                success:false,
                message: 'Error: IT Number isnt in the database'
            });
        }
        if(instructors.length !== 1 ){
            return res.send({
                success:false,
                message: 'Error: Invalid Login '
            });
        }
        const instructor = instructors[0];
        const instructorSession = new InstructorSession();
        instructorSession.email = instructor.email;
        instructorSession.save((err,doc) => {
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


module.exports = router;