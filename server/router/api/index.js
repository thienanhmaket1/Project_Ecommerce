const express = require('express')

const apiRouter = express.Router()
const authenRouter = require('./authen/index')

const manageruserRouter = require('./manage-users/index')

const middleWares = require('../../middlewares')

apiRouter.use('/authen', authenRouter)

apiRouter.post('/*', middleWares.authenMiddleWare)

apiRouter.use('/manage-users', manageruserRouter)

module.exports = apiRouter
