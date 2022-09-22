import { Router } from 'express'
import { validationHandler, validateJwt } from '../utils/middlewares'
import { createCatalogSchema, idCatalogSchema } from '../utils/schemas'
import { getCatalog, getOneCatalog, createCatalog, updateCatalog, deleteCatalog } from './catalog.controller'
const router = Router()

router.get('/', getCatalog)

router.get('/:id', [
  validateJwt,
  validationHandler(idCatalogSchema, 'params')], getOneCatalog)

router.post('/', [
  validateJwt,
  validationHandler(createCatalogSchema, 'body')
], createCatalog)

router.put('/:id', [
  validateJwt,
  validationHandler(idCatalogSchema, 'params'),
  validationHandler(createCatalogSchema, 'body')
], updateCatalog)

router.delete('/:id', [
  validateJwt,
  validationHandler(idCatalogSchema, 'params')
], deleteCatalog)

export default router
