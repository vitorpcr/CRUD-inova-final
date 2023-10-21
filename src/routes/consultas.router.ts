import express from 'express';

import consultasController from '@/controllers/consultas.controller';

export const consultasRouter = express.Router();

consultasRouter.get('/', consultasController.findAll);

consultasRouter.get('/:id', consultasController.findById);

consultasRouter.post('/', consultasController.create);

consultasRouter.put('/:id', consultasController.update);

consultasRouter.delete('/:id', consultasController.delete);
