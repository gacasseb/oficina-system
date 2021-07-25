const express = require("express")
const router = express.Router()
const carController = require("../controller/carController")

router.get("/", carController.index)
router.post("/create", carController.create)
module.exports = router
