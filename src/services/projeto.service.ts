import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProjetoService {
  async criarProjeto(data: { nome: string, descricao?: string }) {
    return prisma.projeto.create({ data });
  }

  async listarProjetos() {
    return prisma.projeto.findMany();
  }

  async encontrarProjetoPorId(id: number) {
    return prisma.projeto.findUnique({ where: { id } });
  }

  async atualizarProjeto(id: number, data: { nome?: string, descricao?: string }) {
    return prisma.projeto.update({ where: { id }, data });
  }

  async deletarProjeto(id: number) {
    return prisma.projeto.delete({ where: { id } });
  }
}


export default new ProjetoService();
