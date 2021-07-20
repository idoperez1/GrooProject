const questionModel = require('../models/question-model')

getAllQuestions = async (req, res) => {
    try {
        await questionModel.find({}, (err, questions) => {
            if (err) {
                return res.status(400).json({ succuess: false, error: err })
            }
            return res.status(200).json({ success: true, data: questions })
        })
    } catch (e) {
        return res.status(500).json({ "error": e })
    }
}

getQuestionById = async (req, res) => {
    try {
        const _id = req.params.id
        let question = await questionModel.findOne({ _id })
        if (!question) {
            return res.status(404).json({ message: "There is no question with this id" })
        } else {
            return res.status(200).json(question)
        }
    } catch (e) {
        return res.status(500).json({ "error": e })
    }
}

voteAnswerByQuestionID = async (req, res) => {
    try {
        const body = req.body
        const _id = req.params.id
        const { answer } = body
        let question = await questionModel.findOne({ _id })
        let votesPerAnswer = []
        let counter = 0
        if (Object.keys(body).length === 0) {
            return res.status(400).json({
                success: false,
                error: 'You must provide an answer',
            })
        }
        if (!question) {
            return res.status(404).json({ message: "There is no question with this id" })
        } else {
            question.answers.map(async ans => {
                let object = {}
                let answerText = ans.text
                if (answerText === answer) {
                    ans.votes += 1
                    counter++;
                }
                ans.votes = object[answerText] = ans.votes
                votesPerAnswer.push(object)
            })
            if (counter === 0) {
                return res.status(404).json({ message: "There is no answer with this text" })
            }
            await question.save()
        }
        return res.status(200).json({ "Number of votes per answer:": votesPerAnswer })
    } catch (e) {
        return res.status(500).json({ "error": e })
    }
}

insertQuestion = async (req, res) => {
    const body = req.body
    const { description } = body
    const { answers } = body
    if (Object.keys(body).length === 0) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a question',
        })
    }
    try {
        let question = new questionModel({
            description, answers
        })
        await question.save()
        return res.status(200).json(question._id)
    } catch (e) {
        return res.status(500).json({ "error": e })
    }
}

module.exports = {
    getAllQuestions,
    getQuestionById,
    voteAnswerByQuestionID,
    insertQuestion
}
