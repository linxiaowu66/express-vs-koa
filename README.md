## express-vs-koa
express和koa中间件的执行对比，结合文章[一文搞懂express和koa的区别]()

## Features
* node.js: 最基础的nodejs服务器，看着很原始，不依赖于任何框架。
* express.js: 常规的express服务器，中间件的执行很像koa2的洋葱模型，没有看出任何端倪
* express_mysterious.js: 通过别的打印和一些await函数，这个时候有一些方法的执行就显得诡异无比，这也正是文章中所要解释清楚的
* express_router.js: 展示如何使用express.Router来新建路由
* koa.js: 常规的koa，所有的一切都是按照我们想的执行，没有任何特殊地方
