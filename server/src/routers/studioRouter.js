const Router = require('express')
const studioController = require('../controllers/studioController')
//========================================

const router = new Router()

router
  .route('/studios')
  .post(studioController.createStudio)
  .get(studioController.getStudios)

router
  .route('/studios/:id')

  .put(studioController.updateStudio)
  // .get(studioController.getStudioById)
  .delete(studioController.deleteStudio)

module.exports = router
