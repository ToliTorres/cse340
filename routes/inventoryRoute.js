// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")

// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId)

// Route for inventory detail view
router.get("/detail/:invId", invController.buildByInventoryId)

// Intentional error route
router.get("/trigger-error", invController.triggerError)

module.exports = router