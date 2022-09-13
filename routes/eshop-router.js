const eshopController = require ("../controllers/eshop-controllers")

const bodyValidator = require ("../middlewares/bodyValidator")

const EshopValidator = require ("../validators/eshop-validator")


const eshopRouter = require ("express").Router()


eshopRouter.route("/")
.get(eshopController.getAll)
.post( bodyValidator(EshopValidator),eshopController.create)

eshopRouter.route("/:id")
.get(eshopController.getByID)
.put(eshopController.update)
.delete(eshopController.delete)


module.exports = eshopRouter