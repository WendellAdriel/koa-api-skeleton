import Koa from 'koa'
const server = new Koa()

server.use(async ctx => {
  ctx.body = 'Hello World'
})

server.listen(3000, () => console.log('Koa server started at port 3000'))

export default server
