const http = require('http')

const server = http.createServer((req, res) => {
  // 暂时忽略request method,默认都是GET请求
  try {
    switch(req.url) {
      case '/api/test1':
        res.statusCode = 200
        res.write('hello')
        break;
      case '/api/testerror':
        throw new Error('I am error.')
        break;
      default:
        res.statusCode = 404
    }
  } catch (err) {
    res.statusCode = 500
    res.write('server Error')
  }
  res.end()
})

server.listen(3000, () => {
  console.log('connecting....')
})

console.log('server listening at port 3000')
