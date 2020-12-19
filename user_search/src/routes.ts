import { Router } from "express";
import authController from "./controllers/auth.controller";
import userController from "./controllers/user.controller";
import { checkJwt } from "./middlewares/auth.middleware";
import { userValidationRules,searchByNameValidationRules,searchByUserNameValidationRules, validate } from "./utils/validate";

const router = Router()

router.post('/auth/login',userValidationRules(),validate, authController.login)

router.post('/users/name/:page?',searchByNameValidationRules(),validate,checkJwt, userController.findByName)
router.post('/users/username/:page?',searchByUserNameValidationRules(),validate,checkJwt, userController.findByUsername)


export {router}