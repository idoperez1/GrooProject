const mongoose = require('mongoose') 

var QuestionSchema = new mongoose.Schema({
    description: String,
    answers: [
        {
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            },
            votes: {
                type: Number,
                required: true,
                default:0
            }
        }
    ]
},{versionKey: false});

module.exports = mongoose.model('questions', QuestionSchema);