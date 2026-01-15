//File create to seed our database

import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    // await knex("courses").del();

    // Inserts seed entries
    await knex("courses").insert([
        {  name: "HTML" },
        {  name: "Javascript" },
        {  name: "CSS" },
        {  name: "React" },
        {  name: "Node.js" },
        {  name: "Git" },
        {  name: "GitHub" },
        {  name: "TypeScript" },
        {  name: "Express.js" },
        {  name: "Database" },
    ]);
};
