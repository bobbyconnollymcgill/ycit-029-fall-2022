// Q: make me a database of users using Map and put 10 users with random IDs in it

const uuid = require("uuid").v4

const books = new Map()

for (let i = 0; i < 4; i++) {
    const id = uuid()
    users.set(id, {
        id,
        author: "John Doe " + i,
        title: "The Book of Life",
    })
}

module.exports = books
