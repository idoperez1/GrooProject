const express = require('express')
const questionCrl = require('../controllers/question-crl')

const router = express.Router()

router.get('/questions', questionCrl.getAllQuestions)
router.get('/questions/:id', questionCrl.getQuestionById)
router.put('/questions/:id', questionCrl.voteAnswerByQuestionID)
router.post('/questions/insertQuestion', questionCrl.insertQuestion)

module.exports = router