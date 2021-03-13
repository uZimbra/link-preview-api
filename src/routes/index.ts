import { Router } from 'express'

import { routes as Preview } from './preview.routes'

const routes = Router()

routes.use('/api/v1/', Preview)

export { routes }