import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTableDto } from "./dto/create-table.dto";
import { UpdateTableDto } from "./dto/update-table.dto";
import { Table } from "./entities/table.estity";

@Injectable()
export class TableService{
  constructor(private readonly prisma:PrismaService){}


  findOne(id: string): Promise<Table> {
    return this.prisma.table.findUnique({ where: { id } })
  }

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  update(id: string, dto: UpdateTableDto): Promise<Table> {
    const data: Partial<Table> = { ...dto }

   return this.prisma.table.update({
     where: { id },
     data
   });
  }


  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto }

    return this.prisma.table.create({ data });
  }

}

