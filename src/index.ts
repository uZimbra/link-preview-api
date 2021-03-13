import express from 'express'
import dotenv from 'dotenv'

import { routes } from '../src/routes'

dotenv.config()

const PORT = process.env.PORT || 3333

const app = express()

app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
  console.log(
    `\x1b[32mready\x1b[0m - started server on http://localhost:${PORT}`
  );
});