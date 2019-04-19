const fs=require('fs')
const path=require('path')
const router = require('koa-router')()
const db = require('../db/index.js')
//增删改查
router.post('/', async (ctx, next) => {
	const req=ctx.request.body;
	let rlt,res;
	switch (parseInt(req.type)) {
		case 0:
			//增
			let obj={name:'张三',school:'山西大学商务学院'}
			//  res 返回当前创建的这个对象的信息
			rlt=await db.model('User').create(obj);
			res={
				code:1,
				data:rlt.id
			}
			break;
		case 1:
			//删除
			//res 返回删除的对象的数量
			rlt=await db.model('user').destroy({where:{name:'张三'}});
			res={
				code:1
			}
			break;
		case 2:
			//修改
			//res 返回一个数组  例如 [3]   3是被更新的对象的数量
			rlt=await db.model('user').update({school:'皇家马德里竞技'},{where:{name:'张三'}})
			res=rlt
			break;
		case 3:
			//查询
			//res 返回数组 查询出的结果
			res= await db.model('user').findAll()
			break;
		default:
			break;
	}
	ctx.body=res
})

//上传文件
router.post('/upload',async(ctx,next)=>{
	const req=ctx.request.body;
	//获取上传的文件
	const file=ctx.request.files.file;
	//创建可读流
	const reader=fs.createReadStream(file.path);
	let filePath=path.join(__dirname,'../public/upload/'+`${file.name}`)
	//创建可写流
	const upStream=fs.createWriteStream(filePath);
	//可读流通过管道写入可写流
	reader.pipe(upStream)
	ctx.body="上传成功"


	//上传多个文件
	// const files=ctx.request.files.file;
	// for(let file in files){
	// 	// 创建可读流
	// 	const reader = fs.createReadStream(file.path);
	// 	// 获取上传文件扩展名
	// 	let filePath = path.join(__dirname, '../public/upload/') + `/${file.name}`;
	// 	// 创建可写流
	// 	const upStream = fs.createWriteStream(filePath);
	// 	// 可读流通过管道写入可写流
	// 	reader.pipe(upStream);
	// }
	// ctx.body="上传成功"
})

module.exports = router