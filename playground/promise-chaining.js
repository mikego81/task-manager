require('../src/db/mongoose')
const User = require('../src/models/user')

// 5edeef76070c691a23d38d09

// User.findByIdAndUpdate('5edef48091af6b1a6fc5c513', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
    // recall that async always returns a promise
}

updateAgeAndCount('5edef5639389ab1a8dd9ce73', 99).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
