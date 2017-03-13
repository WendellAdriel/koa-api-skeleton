import Router from 'koa-router'

/**
 * Import Modules routes
 */
import todoModule from 'modules/todo/controllers'

/**
 * Register application routes
 */
const api = new Router()

api.use('/todos', todoModule.routes())

export default api
