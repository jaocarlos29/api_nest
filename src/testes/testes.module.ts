import { Module } from '@nestjs/common';
import { TesteController } from 'src/teste/teste.controller';
import { TestesService } from './testes.service';

@Module({controllers: [TesteController], providers: [TestesService]})
export class TestesModule {}
