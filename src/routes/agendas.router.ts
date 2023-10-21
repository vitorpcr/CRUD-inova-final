import express from 'express';

import agendasController from '@/controllers/agendas.controller';

export const agendasRouter = express.Router();

agendasRouter.get('/', agendasController.findAll);

agendasRouter.get('/:id', agendasController.findById);

agendasRouter.post('/', agendasController.create);

agendasRouter.put('/:id', agendasController.update);

agendasRouter.delete('/:id', agendasController.delete);
