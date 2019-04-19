const Koa=require('koa')
const router=require('koa-router')()
const websockify=require('koa-websocket')
const app= websockify(new Koa())

let t;
app.ws.use(router.all('/test',(ctx,next)=>{
    ctx.websocket.on('message',msg=>{
        let num=1;
        t=setInterval(()=>{
            ctx.websocket.send(num++)
        },3000)
    })
    ctx.websocket.on('close',err=>{
        clearInterval(t)
    })
}).routes())
app.listen(8080)
module.exports=app;