const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSessionSchema = new Schema({
    username: {
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


module.exports = mongoose.model('adminsession',AdminSessionSchema);