const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: String,
  description: String, 
  project: [{type: Schema.Type.ObjectId, ref: "Project", required: true}]
})


module.exports = model("Task", projectSchema)