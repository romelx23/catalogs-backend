import express, { Application } from 'express'
import { config } from '../config/config'
import userRoutes from '../user/user.routes'
import authRoutes from '../auth/auth.routes'
import catalogRoutes from '../catalog/catalog.routes'
import cors from 'cors'
import morgan from 'morgan'
import sequelize from '../db/connection'
import { errorHandler, logErrors, wrapErrors } from '../utils/middlewares/'

export default class NodeServer {
  private app:Application
  private port = config.SERVER.PORT
  constructor () {
    this.app = express()
    // Conectar a base de datos
    this.dbConnection()
    // Middlewares
    this.middlewares()
    // Routes
    this.routes()
    // Error handler
    this.setErrorHandlers()
  }

  public start () {
    this.listen()
  }

  private routes () {
    this.app.use('/api/users', userRoutes)
    this.app.use('/api/auth', authRoutes)
    this.app.use('/api/catalog', catalogRoutes)
  }

  private middlewares () {
    // Morgan http
    this.app.use(morgan('dev'))
    // Cors middleware
    this.app.use(cors())
    // URL Encoded
    this.app.use(express.urlencoded({ extended: true }))
    // JSON Encoded
    this.app.use(express.json())
  }

  private async dbConnection () {
    // Database connection
    try {
      await sequelize.authenticate()
      await sequelize.sync()
      console.log('All models were synchronized successfully.')
      console.log('Database online')
    } catch (error) {
      console.log('Database online', error)
    }
  }

  private setErrorHandlers () {
    this.app.use(logErrors)
    this.app.use(wrapErrors)
    this.app.use(errorHandler)
  }

  private listen () {
    this.app.listen(this.port, () => {
      console.log(`Server is up on port ${this.port}`)
    })
  }
}
