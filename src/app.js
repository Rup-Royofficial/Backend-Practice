const express = require("express")

const app = express()
app.use(express.json())

app.get("/", (req,res) => {
    req.send("Hello World")
})
const notes = []
app.get("/about", (req,res) =>{
    res.send("About section")
})

app.get("/notes",(req,res)=>{
    console.log(notes)
    res.status(200).send(notes)
})
app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.status(201).send(req.body)
})
app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index
    console.log(index)
    notes[index] = req.body
    res.status(201).send(req.body)

})
app.delete("/notes/:index",(req,res)=>{
    const { index } = req.params
    notes.splice(index, 1)
    res.status(204).send(notes)
})

module.exports = app