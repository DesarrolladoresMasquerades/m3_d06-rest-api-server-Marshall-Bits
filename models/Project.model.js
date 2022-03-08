const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, maxLength: 500},
  // owner: {type: Schema.Type.ObjectId, ref: "User"},
  tasks: [{type: Schema.Types.ObjectId, ref: "Task", default: []}]
})


module.exports = model("Project", projectSchema)