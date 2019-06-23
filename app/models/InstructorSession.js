const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstructorSessionSchema = new Schema({
    email: {
        type: 'String',
        default:''
    },
    timestamp: {
        type: Date,
        default:Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('InstructorSession',InstructorSessionSchema);