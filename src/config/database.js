require("dotenv/config")
module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  node_tls:process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0,
  "dialectOptions": {
    "ssl": true
  },
  define:{
   timestamps: true,
   underscored: true,
   underscoredAll: true
  }
}
