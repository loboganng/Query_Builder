//This file is created to import all the database config into one variable
import { knex as knexConfig } from "knex"
import config from "../../knexfile"

export const knex = knexConfig(config)