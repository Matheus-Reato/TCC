import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
            @IsNotEmpty({message: 'Name cannot be empty.'})
            name: string;
        
            @IsNotEmpty({message: 'CPF cannot be empty.'})
            cpf: string;
        
            @IsNotEmpty({message: 'Phone Number cannot be empty.'})
            phoneNumber: string;
}
