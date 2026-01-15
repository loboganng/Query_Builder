//Migration to create a new table that will hold our relationships
import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("course_modules", (table) => {
    table.increments("id").primary(),
    table.text("name").notNullable(),
    //Now we'll create the FK
    table.integer("course_id").references("id").inTable("courses")
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("course_modules")
}

