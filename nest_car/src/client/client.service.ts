import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientService {

  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async createClient(createClientDto: CreateClientDto) {
    const newClient = this.clientRepository.create(createClientDto);
    return await this.clientRepository.save(newClient);
  }

  async getAllCars() {
    return await this.clientRepository.find({relations: ['cars'], order: {id: 'ASC'}});
  }

  async getClientById(id: number) {
    return await this.searchId(id);
  }

  async updateClient(id: number, updateClientDto: UpdateClientDto) {
    await this.clientRepository.update(id, updateClientDto);
    return await this.searchId(id);
  }

  async deleteClient(id: number) {
    return await this.clientRepository.delete(id);
  }

  async searchId(id:number){
    const client = await this.clientRepository.findOne({
      where: { id },
      relations: ['cars'],
    });

    if(!client){
      throw new NotFoundException(`ID not found.`);
    }

    return client;
}

}


 