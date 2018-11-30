const mongoose = require('mongoose'),
Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {
        type: string,
        required: true
    },
    password: {
        type: string,
        required: true
    },
    isOver21: {
        type: Boolean,
        required: false
    }
})

module.exports = mongoose.model('User',UserSchema);