import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTableDto } from "./dto/create-table.dto";
import { Table } from "./entities/table.estity";

@Injectable()
export class TableService{

  constructor(private readonly prisma:PrismaService){}

  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto }

    return this.prisma.table.create({ data });
  }

  findOne(id: string): Promise<Table> {
    return this.prisma.table.findUnique({ where: { id } })
  }

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }
}

