import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Repository } from 'typeorm';
import { Client } from 'src/client/entities/client.entity';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class CarService {

  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
    
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}
  
  async createCar(createCarDto: CreateCarDto) {
    const client = await this.clientRepository.findOneBy({ id: createCarDto.idClient });
    if (!client) {
      throw new NotFoundException(`Client ID not found.`);
    }

    const newCar = this.carRepository.create(createCarDto);
    newCar.client = client;
    
    const savedCar = await this.carRepository.save(newCar);
    return instanceToPlain(savedCar);
  }

  async getAllCars() {
    return instanceToPlain(await this.carRepository.find({order: {id: 'ASC'}}));
  }

  async getCarById(id: number) {
    return instanceToPlain(await this.searchId(id));
  }

  async updateCar(id: number, updateCarDto: UpdateCarDto) {
    const client = await this.clientRepository.findOneBy({ id: updateCarDto.idClient });
    if (!client) {
      throw new NotFoundException(`Client ID not found.`);
    }

    await this.carRepository.update(id, { ...updateCarDto, client });
    return instanceToPlain(await this.searchId(id));
  }

  async deleteCar(id: number) {
    return instanceToPlain(await this.carRepository.delete(id));
  }

  async searchId(id:number){
      const car = await this.carRepository.findOneBy({id})

      if(!car){
        throw new NotFoundException(`ID not found.`);
      }

      return car;
  }
}
