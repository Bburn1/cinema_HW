const Router = require('express')
const directorMoviesController = require('../controllers/directorMoviesController')
//========================================

const router = new Router()

router
  .route('/directors/:id/movies')
  .post(directorMoviesController.createMovieByDirector)
  .get(directorMoviesController.getMoviesByDirector)
  .delete(directorMoviesController.deleteMovieByDirector)

// router
//   .route('/genres/:id')

module.exports = router
