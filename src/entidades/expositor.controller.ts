import { Request, Response } from 'express';
import { ExpositorService } from '../services/expositor.service';

const expositorService = new ExpositorService();

export class ExpositorController {
  async criarExpositor(req: Request, res: Response) {
    try {
      const expositor = await expositorService.criarExpositor(req.body);
      res.status(201).json(expositor);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar expositor' });
    }
  }

  async listarExpositores(req: Request, res: Response) {
    const expositores = await expositorService.listarExpositores();
    res.json(expositores);
  }

  async encontrarExpositorPorId(req: Request, res: Response) {
    const id = Number(req.params.id);
    const expositor = await expositorService.encontrarExpositorPorId(id);
    if (expositor) {
      res.json(expositor);
    } else {
      res.status(404).json({ error: 'Expositor não encontrado' });
    }
  }

  async atualizarExpositor(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const expositor = await expositorService.atualizarExpositor(id, req.body);
      res.json(expositor);
    } catch (error) {
      res.status(404).json({ error: 'Expositor não encontrado' });
    }
  }

  async deletarExpositor(req: Request, res: Response) {
    const id = Number(req.params.id);
    await expositorService.deletarExpositor(id);
    res.status(204).send();
  }
}
