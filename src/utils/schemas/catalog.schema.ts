import Joi from 'joi'

const catalogId = Joi.number().integer().min(1)
const catalogTitle = Joi.string().min(3).max(255)
const catalogPubDate = Joi.string().min(3).max(30)
const catalogImg = Joi.string().min(3).max(255)
const catalogUrlDownload = Joi.string().min(3).max(255)

export const idCatalogSchema = Joi.object({
  id: catalogId.required()
})

export const createCatalogSchema = Joi.object({
  title: catalogTitle.required(),
  pub_date: catalogPubDate.required(),
  img: catalogImg.required(),
  url_download: catalogUrlDownload.required()
})

export const updatedCatalogSchema = Joi.object({
  title: catalogTitle.optional(),
  pub_date: catalogPubDate.optional(),
  img: catalogImg.optional(),
  url_download: catalogUrlDownload.optional()
})
