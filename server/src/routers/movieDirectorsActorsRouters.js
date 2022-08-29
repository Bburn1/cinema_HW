const Router = require('express')
const movieDirectorsActorsController = require('../controllers/movieDirectorsActorsController')
//========================================

const router = new Router()

router
  .route('/movies/:id/directors')
  .post(movieDirectorsActorsController.createDirectorByMovie)
  .get(movieDirectorsActorsController.getDirectorsByMovie)
  .delete(movieDirectorsActorsController.deleteDirectorByMovie)

router
  .route('/movies/:id/actors')
  .post(movieDirectorsActorsController.createActorByMovie)
  .get(movieDirectorsActorsController.getActorsByMovie)
  .delete(movieDirectorsActorsController.deleteActorByMovie)

// router
//   .route('/genres/:id')

module.exports = router
