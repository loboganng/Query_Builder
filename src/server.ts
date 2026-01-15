import express, { Request, Response } from "express"
import { knex } from "./database/knex"

const app = express()
app.use(express.json())

// app.get("/", async (request: Request, response: Response) => {
//   response.json({ message: "Hello World!" })
// })

app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body

  //Here we're able to insert data into the database, using knex
  await knex("courses").insert({ name })

  response.status(201).json()
})

app.listen(3333, () => console.log(`Server is running on port 3333`))
