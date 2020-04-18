import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesRepository } from './movies.repository';
import { MoviesService } from './movies.service';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesRepository])],
  controllers: [MoviesController],
  providers: [MoviesService]
})
export class MoviesModule {}
