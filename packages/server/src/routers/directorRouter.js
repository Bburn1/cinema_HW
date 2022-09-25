const Router = require('express')
const directorController = require('../controllers/directorController')
//========================================

const router = new Router()

router
  .route('/directors')
  .post(directorController.createDirector)
  .get(directorController.getDirectors)

router
  .route('/directors/:id')

  .put(directorController.updateDirector)
  .get(directorController.getDirectorById)
  .delete(directorController.deleteDirector)

module.exports = router
