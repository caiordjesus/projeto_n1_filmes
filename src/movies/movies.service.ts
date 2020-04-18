import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoviesRepository } from './movies.repository';
import { Movies } from './movies.entity';
import { createMoviesDto } from './dto/create-movies.dto';
import { updateMoviesDto } from './dto/update-movies.dto';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(MoviesRepository)
        private moviesRepository: MoviesRepository
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
        return this.moviesRepository.createMovies(createMoviesDto);
    }

    async updateMovies(updateMoviesDto: createMoviesDto): Promise<Movies>{
        let updateMovies;
        console.log('passei aqui tb')
            if(updateMovies){
                updateMovies.name = updateMoviesDto.name;
                updateMovies.classification = updateMoviesDto.classification;
                updateMovies.genre = updateMoviesDto.genre;
                updateMovies.director = updateMoviesDto.director;
                updateMovies.duration = updateMoviesDto.duration;
                updateMovies.main_cast = updateMoviesDto.main_cast;
                updateMovies.favorite = updateMoviesDto.favorite;
                await updateMovies.save();
                console.log('se passar por aqui é SUCESSO')
            }
        return updateMovies;
    }


}
