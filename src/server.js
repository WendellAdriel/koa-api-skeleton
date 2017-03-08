import Koa from 'koa'
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello World'
})

app.listen(3000, () => console.log('Koa server started at port 3000'))

export default app
