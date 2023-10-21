import { Request, Response } from 'express';
import { CategoriaService } from '../services/categoria.service';

const categoriaService = new CategoriaService();

export class CategoriaController {
  async criarCategoria(req: Request, res: Response) {
    try {
      const categoria = await categoriaService.criarCategoria(req.body);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar categoria' });
    }
  }

  async listarCategorias(req: Request, res: Response) {
    const categorias = await categoriaService.listarCategorias();
    res.json(categorias);
  }

  async encontrarCategoriaPorId(req: Request, res: Response) {
    const id = Number(req.params.id);
    const categoria = await categoriaService.encontrarCategoriaPorId(id);
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ error: 'Categoria não encontrada' });
    }
  }

  async atualizarCategoria(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const categoria = await categoriaService.atualizarCategoria(id, req.body);
      res.json(categoria);
    } catch (error) {
      res.status(404).json({ error: 'Categoria não encontrada' });
    }
  }

  async deletarCategoria(req: Request, res: Response) {
    const id = Number(req.params.id);
    await categoriaService.deletarCategoria(id);
    res.status(204).send();
  }
}
