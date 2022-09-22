import { DataTypes, Model } from 'sequelize'
import Sequelize from '../db/connection'

class CatalogModel extends Model {
  public title!: string
  public pub_date!: string
  public img!: string
  public url_download!: string
}

export const Catalog = Sequelize.define<CatalogModel>(
  'catalog',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    pub_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url_download: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)
