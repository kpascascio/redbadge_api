
module.exports = {
  development: {
    username : "postgres",
    password : process.env.PGPASS,
    database : "redbadge",
    host : "127.0.0.1",
    dialect : "postgres",
    port : 5432
  },
  test : {
    username : "postgres",
    password : "passhere",
    database : "databasenamehere",
    host : "127.0.0.1",
    dialect : "postgres",
    port : 5432
  },
  production : {
    username : "postgres",
    password : "passhere",
    database : "databasenamehere",
    host : "127.0.0.1",
    dialect : "postgres",
    port : 5432
  }
}
