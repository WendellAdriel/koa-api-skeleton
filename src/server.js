import Koa from 'koa'
import cors from 'kcors'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'

import config from 'config/config'
import api from 'config/routes'

const server = new Koa()

server.use(logger())
server.use(cors())
server.use(bodyParser())
server.use(api.routes())
server.use(api.allowedMethods())

server.listen(config.env.port, () => console.log(`Koa server started at port ${config.env.port}`))

export default server
