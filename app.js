require('dotenv').config()
const connectDB = require('./db/connect')
const express = require("express")
const notFound = require("./middleware/not-found")
const errorHandlerMW = require("./middleware/error-handler")
const app = express();

const taskRouter = require('./routes/task')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/v1/task-manager', taskRouter)

app.use(notFound);
app.use(errorHandlerMW)

const port = process.env.PORT
const start = async()=>{
    try {
        await connectDB(process.env.ConnectionString)
        app.listen(port, console.log(`Server listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()