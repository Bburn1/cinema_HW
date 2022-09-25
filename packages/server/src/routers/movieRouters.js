const Router = require('express')
const movieController = require('../controllers/movieController')
//========================================

const router = new Router()

router
  .route('/movies')
  .post(movieController.createMovie)
  .get(movieController.getMovies)

router
  .route('/movies/:id')
  .put(movieController.updateMovie)

  .get(movieController.getOneMovie)
  .delete(movieController.deleteMovie)

module.exports = router
