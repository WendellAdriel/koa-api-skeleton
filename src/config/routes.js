import Router from 'koa-router'

/**
 * Register application routes
 */
const api = new Router()

api.get('/', async (ctx, next) => {
  ctx.body = { message: 'Hello World' }
})

export default api
