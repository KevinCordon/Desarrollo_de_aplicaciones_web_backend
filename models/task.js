
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date },  // puedes agregar fecha límite si quieres
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
