const express = require("express")
const app = express()
var methodOverride = require("method-override")
const path = require("path")
const con = require("./config/db.js")
const cors = require('cors')

app.use(cors())
// connecting route to database
app.use(function(req, res, next) {
  req.con = con
  next()
})

// parsing body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// include router
const carRouter = require("./routes/carRouter")

// routing
app.use("/v1/car", carRouter)

// starting server
app.listen(4000, function() {
  console.log("server listening on port 4000")
})
