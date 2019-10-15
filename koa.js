const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const router = Router()

const sleep = (mseconds) => new Promise((resolve) => setTimeout(() => {
  console.log('sleep timeout...')
  resolve()
}, mseconds))

app.use(async(ctx, next) => {
  console.log('I am the first middleware')
  const startTime = Date.now()
  console.log(`================ start ${ctx.req.method} ${ctx.req.url}`, { query: ctx.req.query, body: ctx.req.body });
  await next()
  const cost = Date.now() - startTime
  console.log(`================ end ${ctx.req.method} ${ctx.req.url} ${ctx.res.statusCode} - ${cost} ms`)
})

app.use(async (ctx, next) => {
  console.log('I am the second middleware')
  await next()
  console.log('second middleware end calling')
})

router.get('/api/test1', async(ctx, next) => {
  console.log('I am the router middleware => /api/test1')
  await sleep(2000)
  ctx.body = 'hello'
})

router.get('/api/testerror', async(ctx, next) => {
  throw new Error('I am error.')
})

app.use(router.routes())

app.listen(3000)
console.log('server listening at port 3000')
