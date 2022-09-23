import { NextFunction, Request, Response } from 'express'
import { Catalog } from './catalog.model'
import { findOneCatalog, listCatalog, updateOneCatalog, deleteOneCatalog } from './catalog.service'
export const getCatalog = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const catalog = await listCatalog()
    res.status(200).json({
      statusCode: 200,
      message: 'Find all Catalogs',
      data: catalog,
      total: catalog.length
    })
  } catch (error) {
    next(error)
  }
}

export const getOneCatalog = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { id } = req.params
    const catalog = await findOneCatalog(id)
    res.status(200).json({
      statusCode: 200,
      message: 'Find a Catalog',
      data: catalog
    })
  } catch (error) {
    next(error)
  }
}

export const createCatalog = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { body } = req
    const catalog = await Catalog.create({
      ...body
    })
    res.status(201).json({
      statusCode: 201,
      message: 'Create a Catalog',
      data: catalog
    })
  } catch (error) {
    next(error)
  }
}

export const updateCatalog = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { id } = req.params
    const { body } = req
    const catalog = await updateOneCatalog(id, body)
    res.status(201).json({
      statusCode: 201,
      message: 'Update a Catalog',
      data: catalog
    })
  } catch (error) {
    next(error)
  }
}

export const deleteCatalog = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const { id } = req.params
    const catalog = await deleteOneCatalog(id)
    res.status(201).json({
      statusCode: 201,
      message: 'Delete a Catalog',
      data: catalog
    })
  } catch (error) {
    next(error)
  }
}
