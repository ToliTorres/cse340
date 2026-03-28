const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  try {
    const classification_id = req.params.classificationId
    const data = await invModel.getInventoryByClassificationId(classification_id)
    const grid = await utilities.buildClassificationGrid(data)
    let nav = await utilities.getNav()
    const className = data[0].classification_name
    res.render("./inventory/classification", {
      title: className + " vehicles",
      nav,
      grid,
      message: null
    })

  } catch (error) {
    next(error)
  }
}

/* ***************************
 *  Build Utility function
 * ************************** */
invCont.buildByInventoryId = async function (req, res, next) {
  try {
    const invId = parseInt(req.params.invId)
    const data = await invModel.getInventoryById(invId)
    const nav = await utilities.getNav()
    const vehicleHTML = await utilities.buildVehicleDetail(data.rows[0])
    const vehicleName = `${data.rows[0].inv_make} ${data.rows[0].inv_model}`
    res.render("inventory/detail", {
      title: vehicleName,
      nav,
      vehicleHTML
    })

  } catch (error) {
    next(error)
  }
}

/* ***************************
 *  Trigger intentional error
 * ************************** */
invCont.triggerError = async function(req, res, next) {
  const error = new Error("Intentional Server Error")
  error.status = 500
  next(error)
}

module.exports = invCont