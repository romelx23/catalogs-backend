import { Catalog } from './catalog.model'
import boom from '@hapi/boom'

interface CatalogI{
    title:string,
    pub_date:string,
    img:string,
    url_download:string,
}

export const listCatalog = async () => {
  const catalog = await Catalog.findAll()
  if (!catalog) throw boom.boomify(new Error('No hay catalogo'), { statusCode: 404 })
  return catalog
}

export const findOneCatalog = async (id: number | string) => {
  const catalog = await Catalog.findOne({
    where: {
      id
    }
  })
  if (!catalog) throw boom.boomify(new Error('No se encontro catalogo con ese ID'), { statusCode: 400 })
  return catalog
}

export const createOneCatalog = async (catalogData: CatalogI) => {
  const newCatalog = await Catalog.create({
    ...catalogData
  })
  if (!newCatalog) throw boom.boomify(new Error('Error al crear catalogo'), { statusCode: 400 })
  return newCatalog
}

export const updateOneCatalog = async (id: string, catalog: CatalogI) => {
  const catalogToUpdate = await Catalog.findOne({
    where: {
      id
    }
  })
  if (!catalogToUpdate) throw boom.boomify(new Error('No se encontro catalogo con ese ID'), { statusCode: 400 })
  const updatedCatalog = await catalogToUpdate.update({
    ...catalog
  })
  if (!updatedCatalog) throw boom.boomify(new Error('Error al actualizar catalogo'), { statusCode: 400 })
  return updatedCatalog
}

export const deleteOneCatalog = async (id: string) => {
  const catalogToDelete = await Catalog.findOne({
    where: {
      id
    }
  })
  if (!catalogToDelete) throw boom.boomify(new Error('No se encontro catalogo con ese ID'), { statusCode: 400 })
  const deletedCatalog = await catalogToDelete.destroy()
  return deletedCatalog
}
