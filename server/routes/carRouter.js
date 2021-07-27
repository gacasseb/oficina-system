const express = require("express")
const router = express.Router()
const carController = require("../controller/carController")

router.get("/", carController.index)
router.post("/create", carController.create)
router.post("/update", carController.update)
router.delete("/destroy", carController.destroy)
module.exports = router
