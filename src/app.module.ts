import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesteController } from './teste/teste.controller';
import { TestesService } from './testes/testes.service';

@Module({
  imports: [],
  controllers: [AppController, TesteController],
  providers: [AppService, TestesService],
})
export class AppModule {}
