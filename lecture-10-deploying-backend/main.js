const express = require("express")

const PORT = process.env.PORT || 3000

const ingredientsDatabase = require("./ingredientsDatabase")

const app = express()

app.set("view engine", "ejs")

// This is a middleware function that will be called for every request
// and logs the method and url of the request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.get("/", (req, res) => {
    // This gives us an object with the keys being the ingredients and the values being the descriptions
    const objIngredients = Object.fromEntries(ingredientsDatabase)

    // This gives us an array of the ingredients
    const ingredients = Object.keys(objIngredients)

    // We are using the ejs templating engine to render the index.ejs file
    res.render("index", { ingredients: ingredients })
})

app.get("/ingredient/:ingredientName", (req, res) => {
    const ingredientName = req.params.ingredientName

    const description = ingredientsDatabase.get(ingredientName)

    if (!description) {
        res.status(404).send("ingredient not found")
        return
    }

    res.send(description)
})

app.post("/ingredient/:ingredientName", (req, res) => {
    const ingredientName = req.params.ingredientName

    if (ingredientsDatabase.has(ingredientName)) {
        res.status(409).send("ingredient already exists")
        return
    }

    const description = req.query.description

    ingredientsDatabase.set(ingredientName, description)

    res.send("ingredient added")
})

app.put("/ingredient/:ingredientName", (req, res) => {
    const ingredientName = req.params.ingredientName

    if (!ingredientsDatabase.has(ingredientName)) {
        res.status(404).send("ingredient not found")
        return
    }

    const description = req.query.description

    ingredientsDatabase.set(ingredientName, description)

    res.send("ingredient updated")
})

app.delete("/ingredient/:ingredientName", (req, res) => {
    const ingredientName = req.params.ingredientName

    if (!ingredientsDatabase.has(ingredientName)) {
        res.status(404).send("ingredient not found")
        return
    }

    ingredientsDatabase.delete(ingredientName)

    res.send("ingredient deleted")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
