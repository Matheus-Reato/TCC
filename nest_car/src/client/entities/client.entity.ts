import { Length, min } from "class-validator";
import { Car } from "src/car/entities/car.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 80, nullable: false})
    name: string;

    @Column({length: 11, nullable: false})
    @Length(11, 11, {message: 'CPF must have 11 characters.'})
    cpf: string;

    @Column({nullable: false})
    phoneNumber: string;

    @OneToMany(() => Car, (car) => car.client, { cascade: true, onDelete: 'CASCADE' })
    cars: Car[];
    
}
