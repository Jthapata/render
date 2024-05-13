const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/students?/:id', (req,res)=>{
    res.send(`Request: ${req.params.id}\n${process.env.STATUS}`)
})
app.post('/newStudent', (req, res)=>{
    const firstName = req.body.fName
    res.send(`${firstName}`)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})