import { Router } from 'express'
import {
  getUsers,
  getOneUser,
  createUser
  // updateUser,
  // deleteUser
} from './user.controller'
import { validateJwt, validationHandler } from '../utils/middlewares'
import {
  idUserSchema,
  createUserSchema
  // updatedUserSchema
} from '../utils/schemas'
import { chargeImageHandler } from '../utils/middlewares/chargeImageHandler'

const router = Router()

router.get('/', [
  validateJwt
], getUsers)

router.get('/:id', [
  validateJwt,
  validationHandler(idUserSchema, 'params')], getOneUser)

router.post(
  '/',
  [
    validationHandler(createUserSchema, 'body'),
    chargeImageHandler
  ],
  createUser
)

// router.put(
//   '/:id',
//   [
//     validationHandler(idUserSchema, 'params'),
//     validationHandler(updatedUserSchema, 'body'),
//     chargeImageHandler
//   ],
//   updateUser
// )

// router.delete('/:id', [validationHandler(idUserSchema, 'params')], deleteUser)

export default router
