const express = require("express")
const uuid = require("uuid").v4
const usersDatabase = require("./usersDatabase")

const app = express()

// Q: how to add body parser to express?
app.use(express.json())

const userRouter = express.Router()
app.use("/user", userRouter)

userRouter
    .get("/", (req, res) => {
        // gets all the users who have ever been to the library

        res.json(Object.values(Object.fromEntries(usersDatabase)))
    })
    .post("/", (req, res) => {
        // create a new user

        if (!req.body.name) {
            res.status(400).json({ error: "name is required" })
            return
        }
        if (!req.body.email) {
            res.status(400).json({ error: "email is required" })
            return
        }

        const id = uuid()

        const newUser = {
            id,
            name: req.body.name,
            email: req.body.email,
        }

        usersDatabase.set(id, newUser)

        res.status(201).json(newUser)
    })
    .use(
        "/:id",
        (req, res, next) => {
            // this middleware will run for all the routes below

            const id = req.params.id
            res.locals.userId = id

            next()
        },
        express
            .Router()
            .get("/", (req, res) => {
                // get a specific user

                const id = res.locals.userId

                const user = usersDatabase.get(id)

                if (!user) {
                    res.status(404).json({ error: "user not found" })
                    return
                }

                res.json(user)
            })
            .put("/", (req, res) => {
                // replace/update an existing user

                const id = res.locals.userId

                const user = usersDatabase.get(id)

                if (!user) {
                    res.status(404).json({ error: "user not found" })
                    return
                }

                if (!req.body.name) {
                    res.status(400).json({ error: "name is required" })
                    return
                }
                if (!req.body.email) {
                    res.status(400).json({ error: "email is required" })
                    return
                }

                const updatedUser = {
                    id,
                    name: req.body.name,
                    email: req.body.email,
                }

                usersDatabase.set(id, updatedUser)

                res.json(updatedUser)
            })
            .delete("/", (req, res) => {
                // replace/update an existing user

                const id = res.locals.userId

                const user = usersDatabase.get(id)

                if (!user) {
                    res.status(404).json({ error: "user not found" })
                    return
                }

                usersDatabase.delete(id)

                res.status(204).end()
            })
    )

// we want the user to be able to check out a book

// here are various ways to do it
app.post("/user/:userId/book/:bookId", (req, res) => {})
app.post("/book/:bookId/user/:userId", (req, res) => {})
app.patch("/user/:userId", (req, res) => {
    const bookIds = req.body.bookIds
})

// we want the user to be able to return a book

app.listen(3333, () => {
    console.log("listening on port 3333")
})
