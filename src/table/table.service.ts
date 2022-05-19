import { Injectable, NotFoundException } from "@nestjs/common";
import { NOTFOUND } from "dns";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTableDto } from "./dto/create-table.dto";
import { UpdateTableDto } from "./dto/update-table.dto";
import { Table } from "./entities/table.estity";

@Injectable()
export class TableService{

  constructor(private readonly prisma:PrismaService){}

  async findOne(id: string): Promise<Table> {
    const record = await this.prisma.table.findUnique({ where: { id } });

    if(!record){
      throw new NotFoundException(`Registro com ID '${id}' não encontrado.`)
    }

    return record
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

  async delete(id: string) {
   await this.prisma.table.delete({ where: { id }});
  }

}

