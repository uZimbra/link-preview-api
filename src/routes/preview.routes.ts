import Router, { Request, Response} from 'express'

import { PreviewController } from '../controller/Preview.controller'

const routes = Router()

routes.get('/get-preview', async (request: Request, response: Response) => {
  const { url } = request.body;

  const controller = new PreviewController();

  const controllerResponse = await controller.getController({ url });

  return response.json(controllerResponse);
})


export { routes }