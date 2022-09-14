const { Router } = require('express')
const express = require('express') //express
const http = require('http') //node.js
const morgan = require('morgan')
const app = express()
const sever = http.createServer(app)

const PORT = process.env.PORT || 4000
app.use(morgan('dev'))
app.use(express.json())

//Application-level-middleware
// app.use((req,res,next)=>{
//     console.log('Time:',Date.now())
//     // res.json({'Time:':Date(Date.now())})
//     next()
// })

//2. Router - level middleware
Router.use((req,res,next)=>{
    console.log('hello')
    // res.json({'status:true'})
    next()
})

//app.use(())

//register route
//GET:http://localhost:4000
app.get('/', requestTime, (req, res,next) => {
    next()
})

app.get('/contact', requestTime, (req, res) => {
    res.status(200), json({
        message: "Contact page"
    })
})

//GET:http://localhost:4000/user/id
app.get('/user/:id([a-d,0-3](4))', (req, res) => {
    res.status(200).send(`ID is:` + req.params.id)
})

//GET:http://localhost:4000/user/mark
app.get('/student/:name/:id', (req, res) => {
    res.status(200).send(`Name is:${req.params.name}, ID is:${req.params.id}`)
})

//GET:http://localhost:4000/user/mark
app.get('/student/:name/:id', (req, res) => {
    res.status(200).json({
        Name: req.params.name,
        ID: req.params.id,
    })
})
//http://localhost:4000
sever.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
