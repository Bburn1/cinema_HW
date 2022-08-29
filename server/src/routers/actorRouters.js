const Router = require('express')
const actorController = require('../controllers/actorController')
//========================================

const router = new Router()

router
  .route('/actors')
  .post(actorController.createActor)
  .get(actorController.getActors)

router
  .route('/actors/:id')
  .put(actorController.updateActor)

  .get(actorController.getActorById)
  .delete(actorController.deleteActor)

module.exports = router
