import Router from 'koa-router'

import translation from 'core/translation'

const trans = translation(__dirname)
const todoRoutes = new Router()

todoRoutes
  .get('/', async (ctx, next) => {
    ctx.body = { message: trans('list.success') }
  })

  .post('/', async (ctx, next) => {
    ctx.body = { message: trans('create.success') }
  })

  .get('/:id', async (ctx, next) => {
    ctx.body = { message: trans('show.success', { id: ctx.params.id }) }
  })

  .put('/:id', async (ctx, next) => {
    ctx.body = { message: trans('update.success', { id: ctx.params.id }) }
  })

  .delete('/:id', async (ctx, next) => {
    ctx.body = { message: trans('delete.success', { id: ctx.params.id }) }
  })

export default todoRoutes
