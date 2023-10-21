import { Request, Response } from 'express';
import { ProjetoService } from '../services/projeto.service';

const projetoService = new ProjetoService();

export class ProjetoController {
  async criarProjeto(req: Request, res: Response) {
    try {
      const projeto = await projetoService.criarProjeto(req.body);
      res.status(201).json(projeto);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar projeto' });
    }
  }

  async listarProjetos(req: Request, res: Response) {
    const projetos = await projetoService.listarProjetos();
    res.json(projetos);
  }

  async encontrarProjetoPorId(req: Request, res: Response) {
    const id = Number(req.params.id);
    const projeto = await projetoService.encontrarProjetoPorId(id);
    if (projeto) {
      res.json(projeto);
    } else {
      res.status(404).json({ error: 'Projeto não encontrado' });
    }
  }

  async atualizarProjeto(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const projeto = await projetoService.atualizarProjeto(id, req.body);
      res.json(projeto);
    } catch (error) {
      res.status(404).json({ error: 'Projeto não encontrado' });
    }
  }

  async deletarProjeto(req: Request, res: Response) {
    const id = Number(req.params.id);
    await projetoService.deletarProjeto(id);
    res.status(204).send();
  }
}
