const mongoose = require('../models/Instructor');
const InstructorModel = mongoose.model('instructor');
const nodemailer=require('nodemailer');
const bcrypt=require('bcrypt');

const InstructorRepository = function () {
    this.insertInstructor = (instructor) => {
        return new Promise((resolve, reject) => {
            const newInstructor = new InstructorModel({
                username: instructor.username,
                password: instructor.password,
                email: instructor.email,
                phone: instructor.phone
            });



    newInstructor.save().then(result=>{
        //send email to instructor email
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'hugsforbugs2019@gmail.com',
                pass:'ypieeexuvgbpciis'
            }
        });

        const mailOptions={
            from:'noreply@eventors4.herokuapp.com',
            to:instructor.email,
            subject:'Welcome '+ instructor.username +' to Student Information System! Your login password '+ instructor.password +'.... please use given password for login',
            html:'Hi! '+instructor.username +', <br/> '+ 'Welcome to SII System. We warmly welcome our instructor!<br/> Thanks and Best Regards,<br/>Admin'
        };

        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log(error);
            }else{
                console.log('Email sent:'+info.response);
            }
        });

        console.log(result);
        res.status(201).json({
            message:'Instructor added',
            createdInstructor:result
        });
    }).catch(err=>{
        console.log(err.message);
        res.status(500).json({
            error:err
        });
    });

            console.log(result);
            res.status(201).json({
                message:'Instructor added',
                createdInstructor:result
            });
        }).catch(err=>{
            console.log(err.message);
            res.status(500).json({
                error:err
            });});

     };

    //get all the instructor details
    this.getAllInstructors = () => {
        return new Promise((resolve, reject) => {
            InstructorModel.find().exec().then((instructor) => {
                resolve({status: 200, instructors: instructor})
            }).catch(err => {
                reject({status: 404, message: "Error: " + err})
            })
        })
    }

    this.delete = (username) => {
        return new Promise((resolve, reject) => {
            InstructorModel.remove({username: username}).then(() => {
                resolve({status: 200, message: "removed instructor"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            });
        });
    }
};









































module.exports = new InstructorRepository();