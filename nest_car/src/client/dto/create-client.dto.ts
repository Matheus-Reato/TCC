import { IsNotEmpty } from "class-validator";

export class CreateClientDto {
        @IsNotEmpty({message: 'Name cannot be empty.'})
        name: string;
    
        @IsNotEmpty({message: 'CPF cannot be empty.'})
        cpf: string;
    
        @IsNotEmpty({message: 'Phone Number cannot be empty.'})
        phoneNumber: string;
}
