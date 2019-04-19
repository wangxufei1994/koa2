//导出SequelizeInstance实例
let db={}
const Sequelize = require('sequelize')
const SequelizeInstance=new Sequelize('sql0419', 'root', 'root', {
							host: '192.168.5.173',
							dialect: 'mysql',
							pool: {
								max: 5,
								min: 0,
								acquire: 30000,
								idle: 10000
							},
							define:{
								timestamps:false
							}
						});
db.model=function(name){
	const model=require("../db/models/"+name+".js")(SequelizeInstance,Sequelize)
	return model;	
}
module.exports=db;