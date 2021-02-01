const bodyParser = require('body-parser')
var express = require('express')
const fs = require('fs')
var app = express()

var port = 9999
var hostname = "localhost"
var loginsave = "savelogin.txt"

app.use(
    bodyParser.urlencoded({ extended: true })
)
app.use(bodyParser.json())

app.post('/primeiroPost',
    (req, res) => {
        console.log(req.body.login)
    }
)

app.get('/primeiroGet',
    (req, res) => {
        console.log(req.body.login)
    }
)

app.post('/SalvarLoginPost',
    (req, res) => {
        var content = req.body.salvarLogin

        content = writeFile(loginsave, content)

        if (content)
            console.log("Login salvo com sucesso!")

        content = readFile(loginsave)
        if (content)
            console.log(content)
    }
)

app.get('/SalvarLogin',
    (req, res) => {
        var content = req.body.salvarLogin

        content = writeFile(loginsave, content)

        if (content)
            console.log("Login salvo com sucesso!")

        content = readFile(loginsave)
        if (content)
            console.log(content)
    }
)

function writeFile(filename, content) {
    try {
        fs.writeFileSync(filename, content)
        return true
    } catch (error) {
        console.error(error)
    }
}

function readFile(filename) {
    try {
        return fs.readFileSync(filename, "utf8")
    } catch (error) {
        console.error(error)
    }
}

app.listen(port, hostname,
    () => {
        console.log("Server running at http://" + hostname + ":" + port)
    }
)