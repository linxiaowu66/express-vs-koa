const http = require('http')

const server = http.createServer((req, res) => {
  // 暂时忽略request method,默认都是GET请求
  switch(req.url) {
    case '/api/test1':
      res.statusCode = 200
      res.write('hello')
      break;
    case '/api/test2':
      res.statusCode = 200
      res.write('world')
      break;
    default:
      res.statusCode = 404
  }
  res.end()
})

server.listen(3000)

console.log('server listening at port 3000')
