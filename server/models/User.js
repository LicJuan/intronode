const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = mongoose.model('User', new Schema({
    name: String,
    desc: String
}))

module.exports = Users