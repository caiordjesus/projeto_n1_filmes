import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesRepository } from './movies.repository';
import { MoviesService } from './movies.service';
import { GenreRepository } from 'src/genre/genre.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesRepository, GenreRepository])],
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule {}
