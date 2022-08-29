const Router = require('express')
const nationalityController = require('../controllers/nationalityController')
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

module.exports = router
