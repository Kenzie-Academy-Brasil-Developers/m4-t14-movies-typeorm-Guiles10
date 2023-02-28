import 'express-async-errors'
import express, { Application } from 'express'
import { HandleErrors } from './errors'
import { movieRoutes } from './routes/movies.routes'

const app: Application = express()
app.use(express.json())

app.use('/movies', movieRoutes)

app.use(HandleErrors)

export default app