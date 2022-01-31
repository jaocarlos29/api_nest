import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Teste } from './entities/teste.entity';

@Injectable()
export class TestesService {
  private testes: Teste[] = [
    {
      id: 1,
      name: 'foo',
      brand: 'bar',
      flavors: ['apple', 'orange', 'chocolate'],
    },

    {
      id: 2,
      name: 'foot',
      brand: 'apple',
      flavors: ['cherry', 'apple', 'chocolate']
    }
  ];

  findAll() {
    return this.testes;
  }

  findOne(id: string) {
    const teste = this.testes.find(item => item.id === +id);
    if (!teste) {
      throw new NotFoundException(`O ID #${id} não foi encontrado`);
    }
    return teste;
  }

  create(createTesteDto: any) {
    this.testes.push(createTesteDto);
    return createTesteDto;
  }

  update(id: string, updateTesteDto: any) {
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
