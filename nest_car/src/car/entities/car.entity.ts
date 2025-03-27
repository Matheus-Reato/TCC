import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "src/client/entities/client.entity";
import { Exclude } from "class-transformer";

@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 80, nullable: false})
    brand: string;

    @Column({length: 80, nullable: false})
    model: string;

    @Column({nullable: false})
    year: number;

    @Column({length: 80, nullable: false})
    color: string;

    @Column({ name: 'registration_plate', length: 80, nullable: false})
    registrationPlate: string;

    @Column({nullable: false})
    idClient: number;

    @ManyToOne(() => Client, (client) => client.cars, { onDelete: 'CASCADE', eager: false })
    @JoinColumn({ name: 'client_id' })
    @Exclude()
    client: Client;
}
