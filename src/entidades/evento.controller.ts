import { Request, Response } from 'express';
import { EventoService } from '../services/EventoService';

const eventoService = new EventoService();

export class EventoController {
  async criarEvento(req: Request, res: Response) {
    try {
      const evento = await eventoService.criarEvento(req.body);
      res.status(201).json(evento);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar evento' });
    }
  }

  async listarEventos(req: Request, res: Response) {
    const eventos = await eventoService.listarEventos();
    res.json(eventos);
  }

  async encontrarEventoPorId(req: Request, res: Response) {
    const id = Number(req.params.id);
    const evento = await eventoService.encontrarEventoPorId(id);
    if (evento) {
      res.json(evento);
    } else {
      res.status(404).json({ error: 'Evento não encontrado' });
    }
  }

  async atualizarEvento(req: Request, res: Response) {
    const id = Number(req.params.id);
    try {
      const evento = await eventoService.atualizarEvento(id, req.body);
      res.json(evento);
    } catch (error) {
      res.status(404).json({ error: 'Evento não encontrado' });
    }
  }

  async deletarEvento(req: Request, res: Response) {
    const id = Number(req.params.id);
    await eventoService.deletarEvento(id);
    res.status(204).send();
  }
}