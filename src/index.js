const express = require('express')
require('./db/mongoose') // this ensures file runs and connects to db
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

/*
**    START THE SERVER   
*/

app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})

/*
**    TESTING   
*/

const Task = require('./models/task')
const User = require('./models/user')