const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const koaBody=require('koa-body')
const logger = require('koa-logger')
const cors=require('koa2-cors')
const index = require('./routes/index')

// error handler
onerror(app)

// middlewares
app.use(koaBody({
  multipart:true,
  encoding:'gzip',
  formidable:{
    // 设置上传文件大小最大限制，默认2M
    maxFileSize: 200*1024*1024    
  }
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

// 跨域
app.use(cors())
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
