
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:
        {
            type: String,
            required: true },
    dueDate:
        {
            type: Date
        },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
