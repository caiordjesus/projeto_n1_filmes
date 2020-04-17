import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoviesRepository } from './movies.repository';
import { Movies } from './task.entity';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(MoviesRepository)
        private moviesRepository: MoviesRepository
    ) {}

    async findAll(): Promise<Movies[]> {
        return this.moviesRepository.getMovies();
    }
}
