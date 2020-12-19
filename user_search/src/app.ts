import express from 'express'
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from './openapi.json'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(router)

export { app }