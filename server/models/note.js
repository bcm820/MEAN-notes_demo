
const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema(
{
    text: { type: String, required: [true], minlength: [3] },
    date: { type: Date },
    
});

mongoose.model('Note', NoteSchema);