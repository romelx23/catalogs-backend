import Joi from 'joi'

const userId = Joi.number().integer().min(1)
const userEmail = Joi.string().email()
const userPassword = Joi.string().min(3).max(30)

export const idUserSchema = Joi.object({
  id: userId.required()
})

export const createUserSchema = Joi.object({
  email: userEmail.required(),
  password: userPassword.required()
})

export const updatedUserSchema = Joi.object({
  email: userEmail.optional(),
  password: userPassword.optional()
})
