import express from 'express';

import secretariasController from '@/controllers/secretarias.controller';

export const secretariasRouter = express.Router();

secretariasRouter.get('/', secretariasController.findAll);

secretariasRouter.get('/:id', secretariasController.findById);

secretariasRouter.post('/', secretariasController.create);

secretariasRouter.put('/:id', secretariasController.update);

secretariasRouter.delete('/:id', secretariasController.delete);
