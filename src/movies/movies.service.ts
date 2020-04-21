import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoviesRepository } from './movies.repository';
import { Movies } from './movies.entity';
import { createMoviesDto } from './dto/create-movies.dto';
import { GenreRepository } from 'src/genre/genre.repository';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(MoviesRepository)
        private moviesRepository: MoviesRepository,
        private genreRepository: GenreRepository
    ){}

    async findAll(): Promise<Movies[]>{
        return this.moviesRepository.getMovies();
    }

    async getById(id: number): Promise<Movies> {
        const found = await this.moviesRepository.findOne(id);

        if (!found) {
            throw new NotFoundException(`Filme de "${id}" não foi encontrado`);
        }

        return found;
    }

    async postMovies(createMoviesDto: createMoviesDto): Promise<Movies>{
        let lista_genres = []
        for(let id_genre of createMoviesDto.genres){
            let found = await this.genreRepository.findOne(id_genre);
            if (found) {
                lista_genres.push(found)
            }
        }

        return this.moviesRepository.createMovies(createMoviesDto, lista_genres);
    }

    async updateMovies(id: number, updateMoviesDto: createMoviesDto): Promise<Movies>{
        await this.moviesRepository.update(id, updateMoviesDto)
        return this.getById(id);
    }

    async removeMovies(id: number): Promise<Movies>{
        this.moviesRepository.delete(id)
        return this.getById(id);
    }

}
