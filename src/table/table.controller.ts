import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateTableDto } from "./dto/create-table.dto";
import { Table } from "./entities/table.estity";
import { TableService } from "./table.service";

@ApiTags('table')
@Controller('table')
export class TableController{
  constructor(private readonly tableService: TableService){}

  @Get()
  @ApiOperation({
    summary:'Lista todas as mesas'
  })
  findAll(): Promise<Table[]>{
    return this.tableService.findAll()
  }
  @Get(':id')
  @ApiOperation({
    summary:'Lista uma mesa'
  })
  findOne(@Param('id') id: string): Promise<Table>{
    return this.tableService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary:'Criar uma mesa'
  })
  create(@Body() dto: CreateTableDto): Promise<Table>{
    return this.tableService.create(dto)
  }
}
