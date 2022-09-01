const Router = require('express')
const nationalityController = require('../controllers/nationalityController')
const locationController = require('../controllers/locationController')

//========================================

const router = new Router()

router
  .route('/nationalities')
  .post(nationalityController.createNationality)
  .get(nationalityController.getNationalities)

router
  .route('/nationalities/:id')
  .put(nationalityController.updateNationality)
  .get(nationalityController.getNationalityById)
  .delete(nationalityController.deleteNationality)

router
  .route('/nationalities/:id/cities')
  .post(locationController.createLocation)
  .get(locationController.getLocations)
  // .put(locationController.updateLocation)
  .delete(locationController.deleteLocation)

module.exports = router
