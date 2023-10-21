import express from 'express';

import pacientesController from '@/controllers/pacientes.controller';

export const pacientesRouter = express.Router();

pacientesRouter.get('/', pacientesController.findAll);

pacientesRouter.get('/:id', pacientesController.findById);

pacientesRouter.post('/', pacientesController.create);

pacientesRouter.put('/:id', pacientesController.update);

pacientesRouter.delete('/:id', pacientesController.delete);
