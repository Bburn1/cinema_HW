const Router = require('express')
const genreController = require('../controllers/genreController')
//========================================

const router = new Router()

router
  .route('/genres')
  .post(genreController.createGenre)
  .get(genreController.getGenres)

router
  .route('/genres/:id')
  .put(genreController.updateGenre)

  .get(genreController.getGenreById)
  .delete(genreController.deleteGenre)

module.exports = router
