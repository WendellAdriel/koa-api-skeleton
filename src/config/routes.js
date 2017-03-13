import Router from 'koa-router'

/**
 * Import Modules routes
 */
import { todoRoutes } from 'modules/todo'

/**
 * Register application routes
 */
const api = new Router()

api.use('/todos', todoRoutes.routes())

export default api
