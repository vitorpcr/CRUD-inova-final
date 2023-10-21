import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CategoriaService {
  async criarCategoria(data: { nome: string }) {
    return prisma.categoria.create({ data });
  }

  async listarCategorias() {
    return prisma.categoria.findMany();
  }

  async encontrarCategoriaPorId(id: number) {
    return prisma.categoria.findUnique({ where: { id } });
  }

  async atualizarCategoria(id: number, data: { nome?: string }) {
    return prisma.categoria.update({ where: { id }, data });
  }

  async deletarCategoria(id: number) {
    return prisma.categoria.delete({ where: { id } });
  }
}


export default new CategoriaService();
