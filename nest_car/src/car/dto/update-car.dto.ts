import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';
import { IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';

export class UpdateCarDto extends PartialType(CreateCarDto) {
    @IsNotEmpty({message: 'Brand cannot be empty'})
    brand: string;
    
    @IsNotEmpty({message: 'Model cannot be empty'})
    model: string;
    
    @IsNotEmpty({message: 'Year cannot be empty'})
    year: number;
    
    @IsNotEmpty({message: 'Color cannot be empty'})
    color: string;
    
    @IsNotEmpty({message: 'Registration Plate cannot be empty'})
    registrationPlate: string;

    @IsNotEmpty({message: 'Client ID cannot be empty.'})
    idClient: number;
}
