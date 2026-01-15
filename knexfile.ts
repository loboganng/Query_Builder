export default {
  client: "sqlite3",
  connection: {
    filename: "./src/database/database.db"
  },
  userNullAsDefault: true,
  migrations: {
    extensions: "ts",
    directory: "./src/database/migrations"
  }
}