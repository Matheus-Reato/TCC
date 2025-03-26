import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('/api/cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(@Body() createCarDto: CreateCarDto) {
    return this.carService.createCar(createCarDto);
  }

  @Get()
  @HttpCode(200)
  async findAll() {
    return this.carService.getAllCars();
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string) {
    return this.carService.getCarById(+id);
  }

  @Put(':id')
  @HttpCode(200)
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.updateCar(+id, updateCarDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    return this.carService.deleteCar(+id);
  }
}
