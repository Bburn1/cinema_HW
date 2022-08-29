const Router = require('express')
const locationController = require('../controllers/locationController')
//========================================

const router = new Router()

router.route('/locations')

router
  .route('/locations/:id')
  .post(locationController.createLocation)
  .get(locationController.getLocations)
  .put(locationController.updateLocation)
  .delete(locationController.deleteLocation)

module.exports = router
