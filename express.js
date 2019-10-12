const express = require('express')

const app = express()

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

app.get('/api/test1', async(req, res, next) => {
  console.log('I am the router middleware => /api/test1')
  await sleep(2000)
  res.status(200).send('hello')
})
app.get('/api/test2', async(req, res, next) => {
  console.log('I am the router middleware => /api/test2')
  res.status(200).send('world')
})
app.get('/api/testerror', (req, res, next) => {
  console.log('I am the router middleware => /api/testerror')
  throw new Error('I am error.')
})

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

app.listen(3001)
console.log('server listening at port 3001')
