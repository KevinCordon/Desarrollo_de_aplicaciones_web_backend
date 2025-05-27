const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    dueDate: Date
});

module.exports = mongoose.model('Goal', GoalSchema);
