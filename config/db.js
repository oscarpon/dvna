module.exports = {
  username: oponte,
  password: 1234566543,
  database: postgres,
  host: process.env.MYSQL_HOST || 'mysql-db',
  port: process.env.MYSQL_PORT || 3306,
  dialect: 'mysql'
}