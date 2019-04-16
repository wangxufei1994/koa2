//导出SequelizeInstance实例
const Sequelize = require('sequelize')
const SequelizeInstance=new Sequelize('hospital', 'root', 'root', {
				host: 'localhost',
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
module.exports=SequelizeInstance