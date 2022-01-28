import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TestesService } from 'src/testes/testes.service';

@Controller('teste')
export class TesteController {
  constructor(private readonly testesService: TestesService) {}
  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.testesService.findAll();
    // return `Ação que retorna todos os dados. Limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testesService.findOne(id);
    // return `Ação que retorna um id especifico #${id}`;
  }

  @Post()
  create(@Body() body) {
    return this.testesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.testesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testesService.remove(id);
    // return `Ação que remove um id especifico, id removido: #${id} `;
  }
}
