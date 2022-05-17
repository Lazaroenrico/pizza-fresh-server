import { Injectable } from "@nestjs/common";
import { CreateTableDto } from "./dto/create-table.dto";
import { Table } from "./entities/table.estity";

@Injectable()
export class TableService{
  tables: Table[] = [];

  create(createTableDto: CreateTableDto) {
    const table: Table = {id: 'ramdon_id',...createTableDto }

    this.tables.push(table);

    return table;
  }

  findAll() {
    return 'Buscar todas as mesas' ;
  }
}

