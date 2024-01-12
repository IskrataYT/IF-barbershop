const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    date: {
        type: String
    },

    time:
    {
        type: String
    },

    service:
    {
        type: String
    },

    phoneNumber:
    {
        type: String
    },

    name:
    {
        type: String
    }
}, {timestamps: true})

const user = mongoose.model('user', userSchema)
module.exports = user