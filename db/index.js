const mongoose = require('mongoose')
const uri = "mongodb+srv://ido:ido321321@cluster0.wxcor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.catch(e=>{
    console.error('connection error', e)
})

const db = mongoose.connection
module.exports = db