import express from "express"
import { router } from "./routes/todos.js"
const app = express()
const port = process.env.port || 4000


app.use(express.json())

const todoRouter = router

app.use("/api", todoRouter)

app.listen(port, () => {
     console.log(`Server is running on the ${port}`)
})