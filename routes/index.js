const router = require('koa-router')()
const Sequelize = require('sequelize')
const SequelizeInstance=require("../db/index.js")

router.get('/', async (ctx, next) => {
	const users = require("../db/models/hdyy_user.js")(SequelizeInstance,Sequelize)
	await users.findAll({attributes:['id','name'],where:{organ_id:5}}).then(res=>{
		ctx.body=res
	})
})

module.exports = router
