import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { GenreRepository } from 'src/genre/genre.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository, GenreRepository])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
