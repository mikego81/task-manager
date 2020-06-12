require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5edf0a0e7c68951ed11cf636', { age: 1 }).then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: true })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed })

    return count
}

deleteTaskAndCount('5edf8b347c68951ed11cf63b', false).then((count) => {
    console.log('Count: ', count)
}).catch((e) => {
    console.log(e)
})
