import { NextFunction, Request, Response } from 'express'
import { body, header, param, validationResult } from 'express-validator'
import { handleFailRequest } from './utils'

const userValidationRules = () => {
  return [
    body('username',"O campo username é obrigatório").notEmpty(),
    body('password',"O campo password é obrigatório").notEmpty(),
  ]
}

const searchByNameValidationRules = () => {
    return [
        header('authorization','Token não encontrado').notEmpty(),
        param('page').optional(),
        body('name').optional(),
        body('count', 'O campo count deve ser um número inteiro!').optional().isInt()
    ]
}

const searchByUserNameValidationRules = () => {
    return [
        header('authorization','Token não encontrado').notEmpty(),
        param('page').optional(),
        body('username').optional(),
        body('count', 'O campo count deve ser um número inteiro!').optional().isInt()
    ]
}

const validate = (req:Request, res:Response, next:NextFunction) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  res.status(422).send(handleFailRequest(extractedErrors))
}

export {
  userValidationRules,
  searchByNameValidationRules,
  searchByUserNameValidationRules,
  validate,
}