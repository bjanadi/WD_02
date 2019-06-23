const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    courseName: {
        type: String
    },
    assignment: {
        type: String
    },
    startDate: {
        type:Date
    },
    endDate: {
        type: Date,
        default: Date.now()
    },
});
module.exports = AssignmentSchemaModel = mongoose.model('Assignment',AssignmentSchema);
