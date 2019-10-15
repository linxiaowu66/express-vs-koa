const express = require('express')

const app = express()
const router = express.Router()

const sleep = (mseconds) => new Promise((resolve) => setTimeout(resolve, mseconds))

app.use(async (req, res, next) => {
  console.log('I am the first middleware')
  next()
  console.log('first middleware end calling')
})
app.use((req, res, next) => {
  console.log('I am the second middleware')
  next()
  console.log('second middleware end calling')
})

router.get('/api/test1', async(req, res, next) => {
  console.log('I am the router middleware => /api/test1')
  await sleep(2000)
  res.status(200).send('hello')
})

router.get('/api/testerror', (req, res, next) => {
  console.log('I am the router middleware => /api/testerror')
  throw new Error('I am error.')
})

app.use('/', router)

app.use(async(err, req, res, next) => {
  if (err) {
    console.log('last middleware catch error', err)
    res.status(500).send('server Error')
    return
  }
  console.log('I am the last middleware')
  await sleep(2000)
  next()
  console.log('last middleware end calling')
})

app.listen(3000)
console.log('server listening at port 3000')
