import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestesModule } from './testes/testes.module';

@Module({
  imports: [TestesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
