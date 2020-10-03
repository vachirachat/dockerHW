const mongoose = require('mongoose')

const Schema = mongoose.Schema
const todoSchema = new Schema({
  name: String,
  todo: String,
})
const TodoModel = mongoose.model('Form', todoSchema)
module.exports = TodoModel