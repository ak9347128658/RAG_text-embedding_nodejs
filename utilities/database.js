const {Sequelize} = require("sequelize");


const db = new Sequelize("db_hasankhan_3005f",'youtuberag', 'U4ii7B8MTNLDP3DmblRHXr8pLS66ZIA9',{
    host: 'svc-3482219c-a389-4079-b18b-d50662524e8a-shared-dml.aws-virginia-6.svc.singlestore.com',
    dialect: 'mysql',
    port: 3333,
    dialectOptions: {
      ssl: { rejectUnauthorized: false }
    },
    logging: true,
});

module.exports = db;