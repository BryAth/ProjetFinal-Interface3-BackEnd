const geantController = require ("../controllers/geant-controllers")

const geantRouter = require('express').Router();

geantRouter.route('/')

.get(geantController.getAll)
.post(geantController.create)


geantRouter.route('/:id')

.get(geantController.getById)
.put(geantController.update)
.delete(geantController.delete)

module.exports = geantRouter