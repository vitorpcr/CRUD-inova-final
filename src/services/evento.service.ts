import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class EventoService {
  async criarEvento(data: { nome: string, data: Date, descricao?: string }) {
    return prisma.evento.create({ data });
  }

  async listarEventos() {
    return prisma.evento.findMany();
  }

  async encontrarEventoPorId(id: number) {
    return prisma.evento.findUnique({ where: { id } });
  }

  async atualizarEvento(id: number, data: { nome?: string, data?: Date, descricao?: string }) {
    return prisma.evento.update({ where: { id }, data });
  }

  async deletarEvento(id: number) {
    return prisma.evento.delete({ where: { id } });
  }
}

export default new EventoService();