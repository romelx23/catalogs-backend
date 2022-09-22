import { DataTypes, Model } from 'sequelize'
import Sequelize from '../db/connection'

class UserModel extends Model {
  public id!: number
  public email!: string
  public password!: string
  public status!: boolean
}

export const User = Sequelize.define<UserModel>(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {
    timestamps: false
  }
)
