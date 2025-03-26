import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car/entities/car.entity';
import { ClientModule } from './client/client.module';
import { Client } from './client/entities/client.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'nest-db',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nestdb',
      entities: [Car, Client],
      synchronize: true,
    }),
    CarModule,
    ClientModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
