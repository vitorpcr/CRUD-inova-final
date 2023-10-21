import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ExpositorService {
  async criarExpositor(data: { nome: string, descricao?: string }) {
    return prisma.expositor.create({ data });
  }

  async listarExpositores() {
    return prisma.expositor.findMany();
  }

  async encontrarExpositorPorId(id: number) {
    return prisma.expositor.findUnique({ where: { id } });
  }

  async atualizarExpositor(id: number, data: { nome?: string, descricao?: string }) {
    return prisma.expositor.update({ where: { id }, data });
  }

  async deletarExpositor(id: number) {
    return prisma.expositor.delete({ where: { id } });
  }
}


export default new ExpositorService();
