import { Injectable } from '@nestjs/common';
import { Teste } from './entities/teste.entity';

@Injectable()
export class TestesService {
  private testes: Teste[] = [
    {
      id: 1,
      name: 'foo',
      brand: 'bar',
      flavors: ['apple', 'orange'],
    },
  ];

  findAll() {
    return this.testes;
  }

  findOne(id: string) {
    return this.testes.find((item) => item.id === +id);
  }

  create(createTesteDto: any) {
    this.testes.push(createTesteDto);
  }

  update(id: string, testeDto: any) {
    const existingTeste = this.findOne(id);
    if (existingTeste) {
      // fdhf
    }
  }

  remove(id: string) {
    const testeIndex = this.testes.findIndex((item) => item.id === +id);
    if (testeIndex >= 0) {
      this.testes.splice(testeIndex, 1);
    }
  }
}
