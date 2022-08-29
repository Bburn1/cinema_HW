const Router = require('express')
const actorMoviesController = require('../controllers/actorMoviesController')
//========================================

const router = new Router()

router
  .route('/actors/:id/movies')
  .post(actorMoviesController.createMovieByActor)
  .get(actorMoviesController.getMoviesByActor)
  .delete(actorMoviesController.deleteMovieByActor)

// router
//   .route('/genres/:id')

module.exports = router
