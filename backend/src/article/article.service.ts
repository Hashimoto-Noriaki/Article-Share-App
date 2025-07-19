import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  create(data: { title: string; content: string; author?: string }) {
    return this.prisma.article.create({ data });
  }

  findAll() {
    return this.prisma.article.findMany();
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({ where: { id } });
  }

  update(id: number, data: { title?: string; content?: string }) {
    return this.prisma.article.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.article.delete({ where: { id } });
  }
}
