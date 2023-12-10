module.exports = {
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
  },
};
